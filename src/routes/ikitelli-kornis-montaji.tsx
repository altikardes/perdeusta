import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'
import { SITE_ORIGIN } from '@/lib/site'

const faqItems = [
  {
    question: 'İkitelli korniş montajı için ne kadar sürede randevu veriyorsunuz?',
    answer:
      'Ekip takvimine göre çoğu talepte aynı gün veya ertesi gün randevu veriyoruz. Özellikle Atatürk, Mehmet Akif ve Ziya Gökalp çevresinde hızlı planlama yapabiliyoruz.',
  },
  {
    question: 'İkitelli perde montajı hizmetinde keşif gerekiyor mu?',
    answer:
      'Basit uygulamalarda telefonla bilgi alıp doğrudan montaja gelebiliyoruz. Karmaşık ölçülerde yerinde keşif yaparak doğru ekipmanla işlem planlıyoruz.',
  },
  {
    question: 'Korniş ustası İkitelli hizmetiniz hangi alanları kapsıyor?',
    answer:
      'Daire, ofis, mağaza ve küçük işletmelerde korniş ve perde montajı yapıyoruz. Mevcut sistem sökümü ve yenileme işlemleri de hizmet kapsamındadır.',
  },
  {
    question: 'Montaj sonrası destek sağlıyor musunuz?',
    answer:
      'Evet. Kullanım sırasında oluşan ayar ihtiyaçları veya küçük düzeltmeler için destek veriyoruz. Hedefimiz montaj sonrası uzun süre sorunsuz kullanım sağlamaktır.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'İkitelli Korniş ve Perde Montaj Hizmeti',
  url: `${SITE_ORIGIN}/ikitelli-kornis-montaji`,
  telephone: '+905309264830',
  areaServed: ['İkitelli, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/ikitelli-kornis-montaji')({
  head: () => ({
    meta: [
      { title: 'İkitelli Korniş Montajı ve Perde Montajı | PerdeUsta' },
      {
        name: 'description',
        content:
          'İkitelli korniş montajı ve İkitelli perde montajı hizmetinde hızlı randevu, temiz işçilik ve aynı gün servis imkanı. Korniş ustası İkitelli ekibi ile güvenli montaj.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-ikitelli', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: IkitelliKornisMontajiPage,
})

function IkitelliKornisMontajiPage() {
  return (
    <div className="bg-slate-50/50 selection:bg-blue-200 selection:text-blue-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-4 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 border border-blue-700/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
              İkitelli Yerel Montaj Desteği
            </p>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-6xl">İkitelli Korniş Montajı ve Perde Montaj Hizmeti</h1>
            <p className="max-w-xl text-base leading-relaxed text-blue-100/90 md:text-lg">
              İkitelli korniş montajı, İkitelli perde montajı ve korniş ustası İkitelli aramalarında güvenilir sonuç arayan
              kullanıcılar için hızlı, temiz ve planlı uygulama sunuyoruz. Yerel ekip yapımız sayesinde Atatürk, Mehmet Akif
              ve Ziya Gökalp çevresinde randevu sürecini hızlandırıyor, montajı tek ziyarette tamamlamayı hedefliyoruz.
            </p>
          </div>
          <div className="hidden lg:flex justify-center relative">
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-teal-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="relative z-10 w-full max-w-sm rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Yerel Usta</h3>
                  <p className="text-sm font-medium text-blue-200">Hızlı & Güvenilir Servis</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5 transition-colors hover:bg-white/10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium text-blue-50">Ölçüye Özel Montaj</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5 transition-colors hover:bg-white/10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium text-blue-50">Temiz ve Sağlam İşçilik</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/5 transition-colors hover:bg-white/10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium text-blue-50">Aynı Gün Hızlı Servis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/40 md:p-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">İkitelli’de Yerel Hizmet Anlayışı</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli bölgesi hem konut hem işyeri yoğunluğu nedeniyle pratik ve doğru montaj hizmetine en çok ihtiyaç duyulan
            noktalardan biridir. Yeni taşınma, ofis düzenleme veya tadilat sonrasında perde ve korniş montajı ertelendiğinde,
            yaşam alanlarının kullanımı doğrudan etkilenir. Biz bu ihtiyacı hızlı ama kaliteden ödün vermeyen bir yaklaşımla
            karşılıyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli korniş montajı uygulamalarında en önemli konu sabitleme güvenliğidir. Tavan ve duvar türüne uygun
            bağlantı malzemesi seçilmezse zamanla sarkma, rayda takılma veya düşme riski oluşabilir. Ekibimiz, montaj
            öncesi yüzeyi kontrol ederek doğru sistemi kurar ve perde hareketini test ederek teslim yapar.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli perde montajı taleplerinde ise sadece estetik görünümü değil, günlük kullanım rahatlığını da önemsiyoruz.
            Korniş yüksekliği, perde açılım yönü ve pencere yapısına göre yapılan doğru yerleşim, uzun vadeli memnuniyetin
            temelini oluşturur. Bu nedenle korniş ustası İkitelli ekibimiz her projeyi standart paket yerine yerinde çözümlerle ele alır.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <article className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md shadow-slate-200/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Sadece tek bir montaj adımı değil, ölçüden son kontrole kadar tüm süreci kapsayan bir hizmet veriyoruz.
              Böylece farklı ekiplerle uğraşmadan tek noktadan destek alabilirsiniz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, zebra, stor ve fon için profesyonel İkitelli perde montajı</li>
              <li>- Tek ray, çift ray ve özel ölçü İkitelli korniş montajı</li>
              <li>- Eski korniş sökümü, bakım ve yenileme uygulamaları</li>
              <li>- Ofis, mağaza ve dairelerde planlı montaj organizasyonu</li>
              <li>- Kullanım testi ve montaj sonrası düzenleme desteği</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Ayrıntılı hizmet başlıklarına{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasından
              </Link>{' '}
              ulaşabilirsiniz.
            </p>
          </article>
          <article className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-md shadow-slate-200/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Montaj hizmetinde hız kadar doğru uygulama da önemlidir. Yanlış ölçü veya yanlış montaj tekniği kısa sürede
              masraf çıkarabilir. Ekibimiz bu riskleri minimize ederek sağlam ve düzenli sonuç üretir.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası İkitelli hizmetimizde randevu saatine uyum, temiz işçilik ve açık iletişim temel prensiptir.
              Sürecin başında ne yapılacağı netleşir, montaj sırasında sürprizler yaşanmaz.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              İş sonunda alanı toplu bırakır, perde açılımını test eder ve kullanıcıya kısa kullanım bilgilendirmesi yaparız.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/40 md:p-10">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli’de acil montaj taleplerinde aynı gün servis büyük kolaylık sağlar. Özellikle yeni taşınan kullanıcılar
            için perdelerin hızlı kullanıma alınması yaşam konforunu artırır.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli perde montajı veya İkitelli korniş montajı için ön bilgi verirseniz ekiplerimiz doğru ekipmanla gelir.
            Bu sayede uygulamayı tek seferde tamamlama oranımız yükselir.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Randevu oluşturmak için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasını
            </Link>{' '}
            kullanabilir, hizmet akışını görmek için{' '}
            <Link to="/" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              ana sayfayı
            </Link>{' '}
            ziyaret edebilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/40 md:p-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:border-blue-200 hover:bg-blue-50/50">
                <h3 className="mb-2 text-base font-semibold text-slate-900 md:text-lg">{item.question}</h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-700 md:text-base">
            Diğer bölgeler için hazırladığımız içeriklere de bakabilirsiniz: {' '}
            <Link to="/basaksehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Başakşehir</Link>,{' '}
            <Link to="/bagcilar-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bağcılar</Link>,{' '}
            <Link to="/kucukcekmece-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Küçükçekmece</Link> ve{' '}
            <Link to="/bahcesehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bahçeşehir</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-6 py-14 text-center text-white shadow-2xl md:px-12 md:py-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">İkitelli’de Montaj İçin Hemen Ulaşın</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            İkitelli korniş montajı ve perde montajı için beklemeden iletişime geçin. WhatsApp üzerinden bilgi paylaşın veya
            doğrudan arayarak size uygun saat için hızlı randevu alın.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 no-underline"
            >
              💬 WhatsApp ile Yaz
            </a>
            <a
              href="tel:+905309264830"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-xl no-underline"
            >
              📞 Hemen Ara
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
