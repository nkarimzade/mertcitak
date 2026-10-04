import DriftWall from './DriftWall'
import './GallerySection.css'

const items = [
  { image: '/gallery/lounge.jpg', title: 'VIP Karşılama & Lounge' },
  { image: '/gallery/treatment.jpg', title: 'Modern Tedavi Odası' },
  { image: '/gallery/scanner.jpg', title: '3D Dijital Tarama' },
  { image: '/gallery/smile.jpg', title: 'Estetik Gülüş Tasarımı' },
  { image: '/gallery/consultation.jpg', title: 'Konsültasyon Odası' },
  { image: '/gallery/details.jpg', title: 'Sterilizasyon & Teknoloji' },
  { image: '/gallery/treatment.jpg', title: 'İmplantoloji & Cerrahi' },
  { image: '/gallery/lounge.jpg', title: 'Özel Bekleme Alanı' },
  { image: '/gallery/smile.jpg', title: 'Gülüş Tasarım Stüdyosu' },
  { image: '/gallery/scanner.jpg', title: 'Dijital Teşhis Laboratuvarı' },
  { image: '/gallery/consultation.jpg', title: 'Hasta Dinlenme Alanı' },
  { image: '/gallery/details.jpg', title: 'Premium Ekipmanlar' },
  { image: '/gallery/lounge.jpg', title: 'Klinik Mimarisi' },
  { image: '/gallery/treatment.jpg', title: 'Konforlu Tedavi Koltuğu' },
  { image: '/gallery/scanner.jpg', title: 'Gelişmiş Görüntüleme' },
  { image: '/gallery/smile.jpg', title: 'Doğal Gülüşler' },
  { image: '/gallery/consultation.jpg', title: 'Birebir Danışmanlık' },
  { image: '/gallery/details.jpg', title: 'Hijyen Standartları' },
]

export default function GallerySection() {
  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="clinic-gallery-header" data-reveal>
        <span className="gallery-minimal-eyebrow">GALERİ</span>
        <h2 className="gallery-minimal-title">Kliniğimizden Kareler</h2>
      </div>

      <div className="drift-wall-container">
        {/* Top White Cloud Fog */}
        <div className="gallery-cloud gallery-cloud-top" aria-hidden="true" />

        <DriftWall
          items={items}
          columns={6}
          tileWidth={220}
          tileHeight={148}
          gap={18}
          tilt={14}
          turn={0}
          perspective={1200}
          depth={80}
          speed={36}
          direction="up"
          variance={0.4}
          parallax={0.5}
          lift={50}
          fade={0.45}
          dim={0.92}
          scale={1.1}
          overlayColor="#ffffff"
          radius={16}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />

        {/* Bottom White Cloud Fog */}
        <div className="gallery-cloud gallery-cloud-bottom" aria-hidden="true" />
      </div>
    </section>
  )
}
