import DriftWall from './DriftWall'
import './GallerySection.css'

const items = [
  { image: '/gallery/lounge.jpg', title: 'Ferah Karşılama Alanı' },
  { image: '/gallery/treatment.jpg', title: 'Modern Tedavi Ünitesi' },
  { image: '/gallery/scanner.jpg', title: '3D Ağız İçi Tarama' },
  { image: '/gallery/smile.jpg', title: 'Estetik Gülüş Tasarımı' },
  { image: '/gallery/consultation.jpg', title: 'Birebir Konsültasyon' },
  { image: '/gallery/details.jpg', title: 'Gelişmiş Sterilizasyon' },
  { image: '/gallery/treatment.jpg', title: 'İmplant ve Cerrahi Odası' },
  { image: '/gallery/lounge.jpg', title: 'Huzurlu Bekleme Alanı' },
  { image: '/gallery/smile.jpg', title: 'Gülüş Analiz Stüdyosu' },
  { image: '/gallery/scanner.jpg', title: 'Dijital Teşhis Ünitesi' },
  { image: '/gallery/consultation.jpg', title: 'Hasta Dinlenme Alanı' },
  { image: '/gallery/details.jpg', title: 'Yüksek Standartlı Ekipman' },
  { image: '/gallery/lounge.jpg', title: 'Aydınlık Klinik Mimarisi' },
  { image: '/gallery/treatment.jpg', title: 'Konforlu Tedavi Koltuğu' },
  { image: '/gallery/scanner.jpg', title: 'Dijital Röntgen & Görüntüleme' },
  { image: '/gallery/smile.jpg', title: 'Doğal Gülüş Estetiği' },
  { image: '/gallery/consultation.jpg', title: 'Şeffaf Tedavi Planlaması' },
  { image: '/gallery/details.jpg', title: 'Maksimum Hijyen Standartları' },
]

export default function GallerySection() {
  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="clinic-gallery-header" data-reveal>
        <span className="gallery-minimal-eyebrow">KLİNİK ORTAMI</span>
        <h2 className="gallery-minimal-title">Modern, Ferah ve Konforlu Alanlarımız</h2>
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
