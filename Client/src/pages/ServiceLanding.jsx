import { Link, useParams } from 'react-router-dom'
import GmailPreview from '../components/GmailPreview.jsx'
import Navbar from '../components/Navbar.jsx'

const titles = {
  gmail: { badge: 'Service', title: 'Agenda & Mails Google', desc: 'Consolidez vos mails et votre agenda dans un seul widget.' },
  github: { badge: 'Service', title: 'GitHub Pull Requests', desc: 'Suivez vos PRs et issues en temps réel.' },
}

export default function ServiceLanding() {
  const { serviceId } = useParams()
  const meta = titles[serviceId] || { badge: 'Service', title: 'Intégration', desc: 'Connectez ce service à votre dashboard.' }

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero service">
        <div className="hero-inner">
          <span className="badge">{meta.badge}</span>
          <h1>{meta.title}</h1>
          <p className="muted">{meta.desc}</p>
          
          <div className="mock service-mock">
            <div className="mock-list">
              <div className="mock-item" />
              <div className="mock-item" />
              <div className="mock-item" />
            </div>
            <div className="mock-calendar" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="features">
        <div className="grid">
          {[ 'Sécurité OAuth2', 'Lecture seule', 'Cache 30 min', 'Filtrage mails' ].map(t => (
            <div key={t} className="card"><h3>{t}</h3><p className="muted">—</p></div>
          ))}
        </div>
      </section>

      {/* WIDGET MOCKUP / PREVIEW */}
      {serviceId === 'gmail' && (
        <section className="how">
          <h2>Aperçu Gmail</h2>
          <GmailPreview />
        </section>
      )}

      {/* (Activation steps and marketing CTA removed for personal project) */}
    </div>
  )
}
