import { Link } from '@tanstack/react-router'
import type { ParsedSection } from '@/lib/parse-pratik-bilgiler-md'
import { ContentBlocks } from './ContentBlocks'

const linkClass = 'font-semibold text-blue-700 underline-offset-2 hover:text-blue-900 hover:underline'

export function PratikBilgilerArticle({ sections }: { sections: ParsedSection[] }) {
  return (
    <div className="space-y-12 md:space-y-16">
      {sections.map((section, index) => (
        <article
          key={`pb-section-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {section.h2}
          </h2>

          {section.blocks.length > 0 && (
            <div className="mb-8">
              <ContentBlocks blocks={section.blocks} />
            </div>
          )}

          {section.subsections.length > 0 && (
            <div className="space-y-10 border-t border-slate-100 pt-8 first:border-t-0 first:pt-0">
              {section.subsections.map((sub, sj) => (
                <div key={sj}>
                  <h3 className="mb-4 text-lg font-bold text-slate-900 md:text-xl">{sub.h3}</h3>
                  <ContentBlocks blocks={sub.blocks} />
                </div>
              ))}
            </div>
          )}

          {(section.h2.includes('Perdeler Nasıl Yıkanmalı') ||
            section.h2.includes('Perdelerin Tozu')) && (
            <p
              className={`mt-8 text-sm text-slate-600 md:text-base ${
                section.subsections.length > 0 || section.blocks.length > 0
                  ? 'border-t border-slate-100 pt-8'
                  : ''
              }`}
            >
              Bölgesel hizmet ve randevu için{' '}
              <Link to="/hizmet-bolgeleri" className={linkClass}>
                hizmet bölgeleri
              </Link>{' '}
              sayfamıza göz atabilir veya{' '}
              <Link to="/iletisim" className={linkClass}>
                iletişim
              </Link>{' '}
              üzerinden bize ulaşabilirsiniz.
            </p>
          )}

          {section.h2.includes('Korniş Nasıl Takılır') && (
            <p className="mt-8 text-sm text-slate-600 md:text-base border-t border-slate-100 pt-8">
              Profesyonel montaj ve yerinde keşif için{' '}
              <Link to="/halkali-kornis-montaji" className={linkClass}>
                Halkalı korniş montajı
              </Link>{' '}
              sayfamızdan süreci inceleyebilir veya{' '}
              <Link to="/iletisim" className={linkClass}>
                iletişim
              </Link>{' '}
              üzerinden randevu talep edebilirsiniz.
            </p>
          )}
        </article>
      ))}
    </div>
  )
}
