export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

export type ParsedSubsection = {
  h3: string
  blocks: ContentBlock[]
}

export type ParsedSection = {
  h2: string
  blocks: ContentBlock[]
  subsections: ParsedSubsection[]
}

export type ParsedFaqItem = {
  question: string
  answer: string
}

export type ParsedPratikBilgiler = {
  introNote: string | null
  sections: ParsedSection[]
  faq: ParsedFaqItem[]
}

/** Merge segments that continue a section (start with ## only) into the previous # section. */
function mergeContinuationParts(parts: string[]): string[] {
  const merged: string[] = []
  for (const raw of parts) {
    const t = raw.trim()
    if (!t) continue
    const isMainHeading = /^#\s+/.test(t) && !/^##\s+/.test(t)
    if (isMainHeading) {
      merged.push(t)
    } else if (merged.length > 0) {
      merged[merged.length - 1] += `\n\n${t}`
    } else {
      merged.push(t)
    }
  }
  return merged
}

function parseBlocks(text: string): ContentBlock[] {
  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const blocks: ContentBlock[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }
    if (line.startsWith('* ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('* ')) {
        items.push(lines[i].slice(2).trim())
        i++
      }
      blocks.push({ type: 'ul', items })
      continue
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, '').trim())
        i++
      }
      blocks.push({ type: 'ol', items })
      continue
    }
    if (line.startsWith('#')) {
      i++
      continue
    }

    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('* ') &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].startsWith('#')
    ) {
      paraLines.push(lines[i].trim())
      i++
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'p', text: paraLines.join(' ') })
    }
  }
  return blocks
}

function parseSection(part: string): ParsedSection | null {
  const t = part.trim()
  if (!t) return null

  const chunks = t.split(/\n(?=##\s)/)
  const first = chunks[0]?.trim() ?? ''
  const h2Match = first.match(/^#\s+(.+?)\n+([\s\S]*)$/s)
  if (!h2Match) {
    return {
      h2: 'Pratik bilgiler',
      blocks: parseBlocks(t),
      subsections: [],
    }
  }

  const h2 = h2Match[1].trim().replace(/\s*#+\s*$/, '')
  const afterH2 = h2Match[2].trim()
  const blocks = parseBlocks(afterH2)
  const subsections: ParsedSubsection[] = chunks.slice(1).map((chunk) => {
    const c = chunk.replace(/^##\s+/, '').trim()
    const nl = c.search(/\n/)
    if (nl === -1) {
      return { h3: c, blocks: [] }
    }
    const h3 = c.slice(0, nl).trim()
    const body = c.slice(nl).trim()
    return { h3, blocks: parseBlocks(body) }
  })

  return { h2, blocks, subsections }
}

function parseFaqBlock(text: string): ParsedFaqItem[] {
  const body = text.replace(/^#\s*Sık Sorulan Sorular\s*\n+/im, '').trim()
  if (!body) return []

  const chunks = body.split(/\n---\n/).map((c) => c.trim()).filter(Boolean)
  const items: ParsedFaqItem[] = []

  for (const chunk of chunks) {
    const m = chunk.match(/^##\s+(.+?)\n+([\s\S]*)$/s)
    if (!m) continue
    items.push({
      question: m[1].trim(),
      answer: m[2].trim(),
    })
  }
  return items
}

const FAQ_HEADING = /^#\s*Sık Sorulan Sorular/im

export function parsePratikBilgilerMarkdown(md: string): ParsedPratikBilgiler {
  const normalized = md.replace(/\r\n/g, '\n')
  const faqMatch = normalized.search(FAQ_HEADING)
  const mainText = faqMatch === -1 ? normalized : normalized.slice(0, faqMatch)
  const faqText = faqMatch === -1 ? '' : normalized.slice(faqMatch)

  const rawParts = mainText.split(/\n---\n/).map((p) => p.trim()).filter(Boolean)
  const introRaw = rawParts[0] ?? ''
  const introBody = introRaw.replace(/^#\s[^\n]+\n+/, '').trim()
  const introNote = introBody || null

  const bodyParts = mergeContinuationParts(rawParts.slice(1))
  const sections = bodyParts
    .map(parseSection)
    .filter((s): s is ParsedSection => s !== null)

  const faq = faqText ? parseFaqBlock(faqText) : []

  return { introNote, sections, faq }
}
