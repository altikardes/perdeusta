import type { ContentBlock } from '@/lib/parse-pratik-bilgiler-md'

const blockP =
  'text-sm leading-relaxed text-slate-700 md:text-base [&:not(:first-child)]:mt-4'
const listBase = 'text-sm leading-relaxed text-slate-700 md:text-base space-y-2 pl-5 my-4'
const liClass = 'marker:text-slate-400'

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'p') {
          return (
            <p key={i} className={blockP}>
              {b.text}
            </p>
          )
        }
        if (b.type === 'ul') {
          return (
            <ul key={i} className={`${listBase} list-disc`}>
              {b.items.map((item, j) => (
                <li key={j} className={liClass}>
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <ol key={i} className={`${listBase} list-decimal`}>
            {b.items.map((item, j) => (
              <li key={j} className={liClass}>
                {item}
              </li>
            ))}
          </ol>
        )
      })}
    </>
  )
}
