import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pratik-bilgiler')({
  head: () => ({
    meta: [
      { title: 'Pratik Bilgiler | Perde Seçimi ve Korniş Montajı | PerdeUsta' },
      {
        name: 'description',
        content:
          'Perde seçimi, perde montajı ve korniş montajı hakkında pratik bilgiler. Işık durumu, ölçü alımı, kumaş seçimi ve montaj kalitesi ile doğru tercih yapın.',
      },
    ],
  }),
  component: PratikBilgilerPage,
})

const tips = [
  {
    title: 'Odanın Işık Durumu',
    text: 'Perde seçerken odanın ne kadar ışık aldığı çok önemlidir. Güneş alan odalarda kalın kumaşlar tercih edilirken, daha az ışık alan odalarda tül perdeler daha uygun olur.',
  },
  {
    title: 'Ölçü Alımı',
    text: 'Perde montajında en sık yapılan hatalardan biri yanlış ölçüdür. Korniş genişliği ve perde uzunluğu doğru ölçülmelidir. Gerekirse profesyonel destek alınmalıdır.',
  },
  {
    title: 'Kullanım Amacı',
    text: 'Perdeyi sadece dekoratif mi yoksa ışık kesici olarak mı kullanacağınızı belirleyin. Buna göre stor, zebra veya fon perde tercih edebilirsiniz.',
  },
  {
    title: 'Kumaş Seçimi',
    text: 'Kaliteli kumaşlar daha uzun ömürlü olur ve daha iyi bir görünüm sağlar. Ucuz kumaşlar kısa sürede formunu kaybedebilir.',
  },
  {
    title: 'Montaj Kalitesi',
    text: 'Perde ne kadar kaliteli olursa olsun, montaj düzgün yapılmazsa istenilen verim alınamaz. Bu nedenle profesyonel montaj hizmeti tercih edilmelidir.',
  },
]

function PratikBilgilerPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Perde Seçimi ve Korniş Montajı Hakkında Pratik Bilgiler
          </h1>
          <p className="text-base leading-relaxed text-blue-100 md:text-lg">
            Perde seçimi, ev dekorasyonunun en önemli parçalarından biridir. Doğru perde seçimi hem estetik hem de kullanım açısından büyük fark yaratır.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-4xl space-y-5">
          {tips.map((tip) => (
            <article key={tip.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-slate-900">{tip.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 md:text-base">{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Sonuç:</h2>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Doğru perde seçimi ve profesyonel montaj, yaşam alanlarınızın konforunu ve estetiğini artırır.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Uzman desteği ile perde montajı ve korniş montajı sürecini doğru planlamak, uzun ömürlü ve şık bir kullanım için en güvenli adımdır.
          </p>
        </div>
      </section>
    </div>
  )
}
