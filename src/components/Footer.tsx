import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-[#1A2E4A] text-blue-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-blue-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🪟</span>
              <div>
                <div className="font-bold text-white text-lg">PerdeUsta</div>
                <div className="text-xs text-blue-300">İstanbul Perde & Korniş</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-blue-200">
              20 yıllık deneyimimizle İstanbul'un güvenilir perde ve korniş montaj uzmanıyız.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Perde Montajı</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Korniş Montajı</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Stor Perde</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Jaluzi Montajı</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Tül Perde</Link></li>
              <li><Link to="/hizmetler" className="hover:text-white transition-colors no-underline text-blue-200">Zebra Perde</Link></li>
              <li><Link to="/pratik-bilgiler" className="hover:text-white transition-colors no-underline text-blue-200">Pratik Bilgiler</Link></li>
            </ul>
          </div>

          {/* Hizmet Bölgeleri */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmet Bölgeleri</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hizmet-bolgeleri/halkali" className="hover:text-white transition-colors no-underline text-blue-200">Halkalı</Link></li>
              <li><Link to="/hizmet-bolgeleri/ikitelli" className="hover:text-white transition-colors no-underline text-blue-200">İkitelli</Link></li>
              <li><Link to="/hizmet-bolgeleri/basaksehir" className="hover:text-white transition-colors no-underline text-blue-200">Başakşehir</Link></li>
              <li><Link to="/hizmet-bolgeleri/bahcesehir" className="hover:text-white transition-colors no-underline text-blue-200">Bahçeşehir</Link></li>
              <li><Link to="/hizmet-bolgeleri/bakirkoy" className="hover:text-white transition-colors no-underline text-blue-200">Bakırköy</Link></li>
              <li><Link to="/hizmet-bolgeleri" className="hover:text-white transition-colors no-underline text-blue-200">Tüm Bölgeler →</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-blue-200">İstanbul, Türkiye<br />Halkalı Merkez, Küçükçekmece</span>
              </li>
              <li>
                <a href="tel:+905309264830" className="flex items-center gap-2 text-blue-200 hover:text-white no-underline">
                  <span>📞</span> 0530 926 48 30
                </a>
              </li>
              <li>
                <a href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white no-underline">
                  <span>💬</span> WhatsApp ile Yaz
                </a>
              </li>
              <li>
                <a href="mailto:info@perdeusta.com" className="flex items-center gap-2 text-blue-200 hover:text-white no-underline">
                  <span>✉️</span> info@perdeusta.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/perdeusta75" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white no-underline">
                  <span>📸</span> Instagram'da İncele
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <p>© {new Date().getFullYear()} PerdeUsta. Tüm hakları saklıdır.</p>
          <p>İstanbul Perde & Korniş Montaj Hizmetleri</p>
        </div>
      </div>
    </footer>
  )
}
