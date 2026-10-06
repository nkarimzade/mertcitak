import DriftWall from './DriftWall'
import './GallerySection.css'

const items = [
  { image: '/gallery/photo_one.png', title: 'Ferah Karşılama Alanı' },
  { image: '/gallery/photo_three.png', title: 'Tedavi ve Muayene Ünitesi' },
  { image: '/gallery/photo_two.png', title: '3D Ağız İçi Tarama' },

  { image: '/gallery/photo_one.png', title: 'Zirkonyum ve Kaplama Uygulaması' },
  { image: '/gallery/photo_three.png', title: 'Birebir Hekim Görüşmesi' },
  { image: '/gallery/photo_two.png', title: 'Otoklav Sterilizasyon Ünitesi' },

  { image: '/gallery/photo_three.png', title: 'İmplant ve Cerrahi Odası' },
  { image: '/gallery/photo_one.png', title: 'Bekleme ve Dinlenme Salonu' },
  { image: '/gallery/photo_two.png', title: 'Tedavi Öncesi Dijital Planlama' },

  { image: '/gallery/photo_two.png', title: 'Dijital Röntgen & Görüntüleme' },
  { image: '/gallery/photo_three.png', title: 'Hasta Dinlenme Alanı' },
  { image: '/gallery/photo_one.png', title: 'Dijital Görüntüleme Cihazları' },

  { image: '/gallery/photo_one.png', title: 'Danışma ve Randevu Alanı' },
  { image: '/gallery/photo_three.png', title: 'Tedavi ve Muayene Koltuğu' },
  { image: '/gallery/photo_two.png', title: 'Dijital Röntgen & Görüntüleme' },

  { image: '/gallery/photo_two.png', title: 'Zirkonyum Kaplama Hazırlığı' },
  { image: '/gallery/photo_three.png', title: 'Şeffaf Tedavi Planlaması' },
  { image: '/gallery/photo_one.png', title: 'Otoklav Sterilizasyon Ünitesi' },
];

export default function GallerySection() {
  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="clinic-gallery-header" data-reveal>
        <span className="gallery-minimal-eyebrow">KLİNİK ORTAMI</span>
        <h2 className="gallery-minimal-title">Tedavi ve Muayene Odalarımız</h2>
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
