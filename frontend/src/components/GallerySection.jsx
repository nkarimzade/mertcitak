import DriftWall from './DriftWall'
import TextReveal from './TextReveal'
import './GallerySection.css'

const items = [
  { image: '/gallery/photo7.webp', title: 'Danışma ve Karşılama Bankosu' },
  { image: '/gallery/photo4.webp', title: 'Modern Tedavi Ünitesi' },
  { image: '/gallery/photo5.webp', title: 'Dt. Mert Çıtak Muayene Odası' },
  { image: '/gallery/photo6.webp', title: 'Panoramik Klinik ve Tedavi Alanı' },
  { image: '/gallery/photo8.webp', title: 'Geniş Açılı Muayene Odası' },
  { image: '/gallery/photo_one.webp', title: 'Ferah Karşılama Alanı' },

  { image: '/gallery/photo_two.webp', title: '3D Ağız İçi Tarama & Planlama' },
  { image: '/gallery/photo_three.webp', title: 'Tedavi ve Muayene Koltuğu' },
  { image: '/gallery/photo4.webp', title: 'Steril Klinik Donanımı' },
  { image: '/gallery/photo5.webp', title: 'Birebir Hekim Görüşmesi' },
  { image: '/gallery/photo7.webp', title: 'Resepsiyon & Danışma' },
  { image: '/gallery/photo8.webp', title: 'Panoramik Şehir Manzaralı Ünite' },

  { image: '/gallery/photo6.webp', title: 'Ferah Tedavi Ortamı' },
  { image: '/gallery/photo_one.webp', title: 'Bekleme ve Dinlenme Salonu' },
  { image: '/gallery/photo_two.webp', title: 'Dijital Röntgen & Görüntüleme' },
  { image: '/gallery/photo4.webp', title: 'İleri Teknoloji Diş Ünitesi' },
  { image: '/gallery/photo8.webp', title: 'Tam Donanımlı Tedavi Odası' },
  { image: '/gallery/photo_three.webp', title: 'İmplant ve Estetik Diş Hekimliği' },

  { image: '/gallery/photo5.webp', title: 'Hasta Kabul ve Bilgilendirme' },
  { image: '/gallery/photo7.webp', title: 'Konforlu Klinik Karşılama' },
  { image: '/gallery/photo6.webp', title: 'Aydınlık ve Hijyenik Muayene Alanı' },
  { image: '/gallery/photo_one.webp', title: 'Zirkonyum ve Gülüş Tasarımı' },
  { image: '/gallery/photo_two.webp', title: 'Tedavi Öncesi Dijital Planlama' },
  { image: '/gallery/photo8.webp', title: 'Modern Klinik Atmosferi' },
];

export default function GallerySection() {
  return (
    <section className="clinic-gallery-section" id="gallery">
      <div className="clinic-gallery-header">
        <span className="gallery-minimal-eyebrow">KLİNİK ORTAMI</span>
        <TextReveal className="gallery-minimal-title">Tedavi ve Muayene Odalarımız</TextReveal>
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
