import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_ORIGIN, absoluteSiteUrl } from '@/lib/site'

import '../styles.css'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PerdeUsta - İstanbul Perde & Korniş Montaj',
  description:
    'İstanbul\'da profesyonel perde montajı, korniş kurulumu, stor perde, jaluzi, tül perde ve zebra perde hizmetleri. 20 yıllık deneyim, garantili işçilik.',
  url: SITE_ORIGIN,
  telephone: '+905309264830',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Halkalı Merkez',
    addressLocality: 'Küçükçekmece',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.0082,
    longitude: 28.9784,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 41.0082, longitude: 28.9784 },
    geoRadius: '30000',
  },
  areaServed: [
    'Halkalı', 'İkitelli', 'Bahçelievler', 'Zeytinburnu', 'Bahçeşehir',
    'Bağcılar', 'Başakşehir', 'Bakırköy', 'Küçükçekmece', 'Arnavutköy',
  ],
  priceRange: '₺₺',
  image: `${SITE_ORIGIN}/logo.png`,
}

export const Route = createRootRoute({
  head: (ctx) => {
    const leaf = ctx.matches[ctx.matches.length - 1]
    const pathname = leaf?.pathname ?? '/'
    const pageUrl = absoluteSiteUrl(pathname)
    return {
      links: [{ rel: 'canonical', href: pageUrl }],
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: 'PerdeUsta - İstanbul Perde & Korniş Montaj Uzmanı' },
        {
          name: 'description',
          content:
            'İstanbul\'da profesyonel perde montajı, korniş kurulumu, stor perde, jaluzi ve zebra perde hizmetleri. Halkalı, Başakşehir, Bakırköy ve tüm İstanbul\'a hizmet. Ücretsiz keşif!',
        },
        { name: 'author', content: 'PerdeUsta' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PerdeUsta' },
        { property: 'og:url', content: pageUrl },
        { property: 'og:title', content: 'PerdeUsta - İstanbul Perde & Korniş Montaj Uzmanı' },
        {
          property: 'og:description',
          content: 'İstanbul\'da güvenilir perde montajı ve korniş kurulumu. 20 yıllık deneyim, garantili işçilik, ücretsiz keşif.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: pageUrl },
      ],
      scripts: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(localBusinessSchema),
        },
      ],
    }
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="bg-white text-gray-800">
      <HeadContent />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Sticky CTA Buttons */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a
          href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl font-semibold text-sm no-underline hover:bg-green-600 transition-colors"
          aria-label="WhatsApp ile iletişim"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  )
}
