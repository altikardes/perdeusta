import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Korniş ve Perde Montajı İstanbul | PerdeUsta' },
      {
        name: 'description',
        content:
          'İstanbul genelinde hızlı korniş montajı ve perde montajı hizmeti. 500+ müşteri, aynı gün servis ve garantili işçilik ile Halkalı, İkitelli, Başakşehir ve çevresinde profesyonel uygulama.',
      },
      { property: 'og:title', content: 'Korniş ve Perde Montajı İstanbul | PerdeUsta' },
    ],
  }),
  component: HomePage,
})

const trustBadges = [
  { title: '500+ müşteri', desc: 'İstanbul genelinde tamamlanan montaj' },
  { title: 'Aynı gün servis', desc: 'Müsaitlik durumuna göre hızlı randevu' },
  { title: 'Garantili işçilik', desc: 'Sağlam ve temiz uygulama garantisi' },
]

const serviceAreas = [
  'Halkalı',
  'İkitelli',
  'Başakşehir',
  'Bahçeşehir',
  'Bağcılar',
  'Küçükçekmece',
  'Bakırköy',
  'Zeytinburnu',
]

function HomePage() {
  return (
    <div className="bg-slate-50/50 selection:bg-blue-200 selection:text-blue-900">
      <section className="px-4 pt-10 pb-14 md:pt-16 md:pb-20" aria-label="Korniş montajı ve perde montajı hero bölümü">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100/50 border border-blue-200 px-4 py-1.5 text-xs font-bold tracking-wide text-blue-800 shadow-sm">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
              İstanbul Korniş Montajı & Perde Montajı
            </p>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-[1.15] text-slate-900 md:text-5xl lg:text-6xl">
              Evinize aynı gün gelen usta ile hızlı ve temiz montaj
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Profesyonel ekip ile korniş montajı ve perde montajı hizmetini güvenle alın. Randevu sonrası hızlı keşif,
              net fiyatlandırma ve garantili işçilik sunuyoruz.
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+905309264830"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/30 no-underline"
              >
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-500/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 no-underline"
              >
                WhatsApp
              </a>
            </div>
            <p className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <span aria-hidden="true">📍</span> Halkalı merkezli ekip ile İstanbul Avrupa Yakası genelinde hizmet.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/images/main.webp"
              alt="PerdeUsta – Halkalı perde ve korniş montaj hizmeti"
              className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Güven unsurları">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="group rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-md shadow-slate-200/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900">{badge.title}</h2>
              <p className="text-sm text-slate-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Hizmet içeriği">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md shadow-slate-200/50 transition-all hover:shadow-xl hover:shadow-blue-900/5">
            <div className="overflow-hidden">
              <img
                src="/images/2.jpg"
                alt="Evde perde montajı yapan usta ekibi"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">Perde Montajı</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Tül, fon, zebra, stor ve jaluzi perde montajı ölçüye uygun şekilde yapılır. Düzgün hizalama, temiz işçilik
                ve uzun ömürlü kullanım hedeflenir.
              </p>
            </div>
          </article>
          <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md shadow-slate-200/50 transition-all hover:shadow-xl hover:shadow-blue-900/5">
            <div className="overflow-hidden">
              <img
                src="/images/3.jpg"
                alt="Yeni takılmış korniş sistemi ve perde uygulaması"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">Korniş Montajı</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Beton, alçıpan ve farklı duvar tiplerine uygun güvenli korniş montajı yapılır. Eski sistem sökümü ve yeni
                sistem kurulumu tek ziyarette tamamlanır.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Montaj çalışmalarından örnek galeri">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Uygulama Galerisi</h2>
            <p className="text-sm text-slate-600">Gerçek daire ve ofis uygulamalarından seçilmiş montaj örnekleri.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: '/images/4.jpg',
                alt: 'Halkalı bölgesinde tamamlanmış korniş montajı ve tül perde uygulaması',
              },
              {
                src: '/images/5.jpg',
                alt: 'Başakşehir dairesinde yapılan perde montajı ve ray hizalama çalışması',
              },
              {
                src: '/images/6.jpg',
                alt: 'Bakırköy ofisinde profesyonel stor perde montajı uygulaması',
              },
            ].map((image) => (
              <figure key={image.src} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg">
                <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Hizmet Verdiğimiz Bölgeler">
        <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 md:p-12">
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="mt-2 text-sm text-slate-600">
              Bu bölgelerde aynı gün korniş montajı ve perde montajı için hızlı randevu oluşturabilirsiniz.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-8">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-100 bg-slate-50/50 px-4 py-4 text-center text-sm font-bold text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm hover:-translate-y-0.5"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20" aria-label="İletişim çağrısı">
        <div className="mx-auto w-full max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-6 py-14 text-center text-white shadow-2xl md:px-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Bugün randevu alın, montajı ertelemeyin</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Hızlı fiyat almak için bizi hemen arayın veya WhatsApp’tan fotoğraf paylaşın. Ekip planlamasına göre aynı gün
            servis için yönlendirme yapalım.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+905309264830"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-xl no-underline"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 no-underline"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://instagram.com/perdeusta75"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-blue-100 ring-1 ring-white/20 transition-all hover:bg-white/20 hover:text-white hover:ring-white/30 no-underline"
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Instagram'da Takip Edin: @perdeusta75
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
