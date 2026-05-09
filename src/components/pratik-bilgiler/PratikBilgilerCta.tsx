export function PratikBilgilerCta() {
  return (
    <section className="px-4 pb-16 md:pb-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-6 py-12 text-center text-white shadow-xl md:px-10 md:py-14">
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">Ücretsiz keşif ve montaj desteği</h2>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-blue-100/95 md:text-base">
          Perde ve korniş seçiminde sorularınız için bizi arayın; yerinde keşif ve montaj planlaması konusunda hızlıca
          yardımcı olalım.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="tel:+905309264830"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-bold text-slate-900 no-underline transition-transform hover:scale-[1.02] hover:bg-blue-50"
          >
            📞 Hemen Ara
          </a>
          <a
            href="https://wa.me/905309264830?text=Merhaba%20pratik%20bilgiler%20ve%20montaj%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-green-500/25 no-underline transition-transform hover:scale-[1.02]"
          >
            💬 WhatsApp ile Yaz
          </a>
        </div>
      </div>
    </section>
  )
}
