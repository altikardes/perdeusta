import { Link, createFileRoute } from '@tanstack/react-router'
import pratikBilgilerSource from '../../content/pratik-bilgiler.md?raw'
import { PratikBilgilerArticle } from '@/components/pratik-bilgiler/PratikBilgilerArticle'
import { PratikBilgilerCta } from '@/components/pratik-bilgiler/PratikBilgilerCta'
import { PratikBilgilerFaq } from '@/components/pratik-bilgiler/PratikBilgilerFaq'
import { parsePratikBilgilerMarkdown } from '@/lib/parse-pratik-bilgiler-md'
import { buildFaqSchema } from '@/lib/seo-schema'

const parsed = parsePratikBilgilerMarkdown(pratikBilgilerSource)
const faqSchemaJson =
  parsed.faq.length > 0 ? JSON.stringify(buildFaqSchema(parsed.faq)) : null

export const Route = createFileRoute('/pratik-bilgiler')({
  head: () => ({
    meta: [
      {
        title:
          'Pratik Bilgiler | Tül Seçimi, Perde Temizliği, Korniş Montajı Rehberi | PerdeUsta İstanbul',
      },
      {
        name: 'description',
        content:
          'Tül perde seçimi, kırışmayan tül modelleri, perde yıkama ve beyazlatma, toz alma, korniş montajı ve bakımı hakkında pratik rehber. PerdeUsta ile İstanbul’da ücretsiz keşif ve profesyonel montaj desteği.',
      },
      {
        property: 'og:title',
        content: 'Pratik Bilgiler | Tül, Perde Bakımı ve Korniş Montajı | PerdeUsta',
      },
      {
        property: 'og:description',
        content:
          'Perde seçimi, tül bakımı, perde temizliği ve korniş montajı için adım adım bilgiler; sık sorulan sorular ve uzman desteği.',
      },
    ],
    scripts:
      faqSchemaJson !== null
        ? [
            {
              id: 'pratik-bilgiler-faq-schema',
              type: 'application/ld+json' as const,
              children: faqSchemaJson,
            },
          ]
        : [],
  }),
  component: PratikBilgilerPage,
})

const linkClass = 'font-semibold text-blue-200 underline-offset-2 hover:text-white hover:underline'

function PratikBilgilerPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl">Pratik Bilgiler</h1>
          <p className="text-base font-medium leading-relaxed text-blue-50 md:text-lg">
            Perde seçimi, perde temizliği, tül bakımı ve korniş montajı hakkında pratik bilgiler.
          </p>
          {parsed.introNote ? (
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/90 md:text-base">
              {parsed.introNote}
            </p>
          ) : null}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-blue-100/85 md:text-base">
            Yerel hizmet bölgelerimiz ve randevu için{' '}
            <Link to="/hizmet-bolgeleri" className={linkClass}>
              hizmet bölgeleri
            </Link>{' '}
            sayfasını inceleyebilir; montaj ve keşif taleplerinizde{' '}
            <Link to="/iletisim" className={linkClass}>
              iletişim
            </Link>{' '}
            veya{' '}
            <Link to="/halkali-kornis-montaji" className={linkClass}>
              Halkalı korniş montajı
            </Link>{' '}
            içeriğimize göz atabilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <PratikBilgilerArticle sections={parsed.sections} />
        </div>
      </section>

      {parsed.faq.length > 0 ? (
        <section className="px-4 pb-12 md:pb-16" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl">
            <h2 id="faq-heading" className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
              Sık sorulan sorular
            </h2>
            <PratikBilgilerFaq items={parsed.faq} />
          </div>
        </section>
      ) : null}

      <PratikBilgilerCta />
    </div>
  )
}
