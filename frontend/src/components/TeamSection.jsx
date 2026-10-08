import { FiArrowUpRight, FiImage } from 'react-icons/fi'
import './TeamSection.css'
import TextReveal from './TextReveal'

const teamMembers = [
  {
    id: '01',
    name: 'Dt. Mert Çıtak',
    initials: 'MÇ',
    role: 'Kurucu Diş Hekimi',
    specialty: 'Estetik Diş Hekimliği & İmplantoloji',
    image: '/ekip/mert_citak.jpg',
    portrait: true,
  },
  {
    id: '02',
    name: 'Dt. Ahmet Lütfi Kaya',
    initials: 'AK',
    role: 'Diş Hekimi',
    specialty: 'Restoratif Tedavi & Estetik Diş Hekimliği',
  },
]

export default function TeamSection() {
  return (
    <section className="team-section" id="team" aria-labelledby="team-title">
      <div className="team-inner">
        <div className="team-heading">
          <div>
            <span className="team-kicker">HEKİMLERİMİZ</span>
            <TextReveal id="team-title">Ekibimiz<span>.</span></TextReveal>
          </div>
          <p data-reveal data-reveal-delay="2">Sizi dinleyen, sorularınızı yanıtlayan,<br />tedavinizi birlikte planlayan hekimlerimiz.</p>
        </div>
        <div className="team-profiles">
          {teamMembers.map((member) => (
            <article className="team-profile" key={member.id} aria-labelledby={`team-member-${member.id}`}>
              <div className={`team-profile-visual${member.portrait ? ' has-portrait' : ''}`}>
                {member.image ? <img className={member.portrait ? 'team-portrait' : undefined} src={member.image}
                  alt={member.portrait ? member.name : 'Kliniğimizin muayene odası'}
                  loading="lazy" decoding="async" width="720" height="720" /> : (
                    <div className="team-photo-placeholder">
                      <FiImage aria-hidden="true" />
                      <span>Görsel eklenecek</span>
                    </div>
                  )}
              </div>
              <div className="team-profile-info">
                <div className="team-profile-meta">
                  <span>{member.role}</span>
                  <span className="team-profile-number" aria-hidden="true">{member.id}</span>
                </div>
                <TextReveal as="h3" id={`team-member-${member.id}`}>{member.name}</TextReveal>
                <p className="team-profile-specialty" data-reveal data-reveal-delay="2">{member.specialty}</p>
                <a className="team-profile-contact" href="#contact">
                  Hekimlerimizle iletişim <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="team-bottom-line">
          <span>Dt. Mert Çıtak Diş Kliniği</span>
          <span>Çankırı</span>
        </div>
      </div>
    </section>
  )
}
