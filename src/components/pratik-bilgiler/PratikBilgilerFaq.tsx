import type { ParsedFaqItem } from '@/lib/parse-pratik-bilgiler-md'

export function PratikBilgilerFaq({ items }: { items: ParsedFaqItem[] }) {
  if (items.length === 0) return null

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:shadow-md transition-shadow"
        >
          <summary className="cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden flex items-center justify-between gap-3">
            <h3 className="pr-2 text-base font-semibold text-slate-900 md:text-lg">{item.question}</h3>
            <span
              className="shrink-0 text-slate-400 text-xl leading-none transition-transform group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="border-t border-slate-100 px-5 pb-5 pt-2">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
