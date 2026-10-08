import { FiArrowUp, FiArrowUpRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import TextReveal from './TextReveal'
import './Footer.css'

const currentYear = new Date().getFullYear()
const links = [
  ['Tedavilerimiz', '#treatments'],
  ['Hakkımızda', '#about'],
  ['Ekibimiz', '#team'],
  ['Hasta yorumları', '#reviews'],
  ['Kliniğimizden', '#clinic-video'],
  ['Galeri', '#gallery'],
]

export default function Footer({ homePath = '' }) {
  return (
    <footer className="clinic-footer" aria-label="Klinik bilgileri">
      <div className="clinic-footer-inner">
        <div className="clinic-footer-grid">
          <div className="clinic-footer-brand">
            <a href={`${homePath}#home`} className="clinic-footer-logo" aria-label="Dt. Mert Çıtak Diş Kliniği, ana sayfa">
              <img src="/logo.png" alt="" width="80" height="80" loading="lazy" />
            </a>
            <TextReveal className="clinic-footer-name">Dt. Mert Çıtak<br /><span>Diş Kliniği</span></TextReveal>
            <p className="clinic-footer-description" data-reveal data-reveal-delay="2">Sizi dinleyen, ihtiyaçlarınıza odaklanan,<br />özenli bir diş hekimliği yaklaşımı.</p>
          </div>

          <nav className="clinic-footer-navigation" aria-labelledby="footer-explore-title">
            <h3 id="footer-explore-title" className="clinic-footer-label">KLİNİĞİMİZİ KEŞFEDİN</h3>
            <div className="clinic-footer-links">
              {links.map(([label, href]) => <a href={`${homePath}${href}`} key={href}>{label}<FiArrowUpRight aria-hidden="true" /></a>)}
            </div>
          </nav>

          <div className="clinic-footer-contact">
            <h3 className="clinic-footer-label">ÇANKIRI'DA, SİZE YAKIN</h3>
            <a className="clinic-footer-phone" href="tel:+905452011918"><FiPhone aria-hidden="true" />0545 201 19 18</a>
            <address>Cumhuriyet Mahallesi, Necip Fazıl Kısakürek Sokak<br />İkizler İş Merkezi No:32/6<br />Çankırı Merkez / Çankırı</address>
            <div className="clinic-footer-contact-actions">
              <a className="clinic-footer-map" href="https://www.google.com/maps/search/?api=1&query=Mert+%C3%87%C4%B1tak+Di%C5%9F+Klini%C4%9Fi+%C3%87ank%C4%B1r%C4%B1" target="_blank" rel="noopener noreferrer">Yol tarifi<FiArrowUpRight aria-hidden="true" /></a>
              <a className="clinic-footer-whatsapp" href="https://wa.me/905452011918" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile iletişim" title="WhatsApp ile iletişim"><FaWhatsapp aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="clinic-footer-bottom">
          <p>© {currentYear} Dt. Mert Çıtak Diş Kliniği. Tüm hakları saklıdır.</p>
          <a className="clinic-footer-top" href={`${homePath}#home`}>Başa dön<FiArrowUp aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}
