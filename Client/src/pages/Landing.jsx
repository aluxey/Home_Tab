import { Link } from 'react-router-dom'
import AppCard from '../components/AppCard.jsx'
import BrandIcon from '../components/BrandIcon.jsx'
import Navbar from '../components/Navbar.jsx'
import { apps } from '../data/apps.js'

const logos = ['Google', 'GitHub', 'WeatherAPI', 'Twitter', 'LinkedIn']
const features = [
  { title: 'Widgets modulaires', text: 'Composez votre tableau de bord en 3 clics.' },
  { title: 'Intégrations', text: 'Gmail, GitHub, Twitch, YouTube, LinkedIn…' },
  { title: 'Rapide & Léger', text: 'Vite + React, aucun superflu.' },
  { title: 'Thème sombre', text: 'Design moderne, lisible et focus.' },
  { title: 'Recherche instantanée', text: 'Trouvez vos apps en un clin d’œil.' },
  { title: 'Open future', text: 'Ajoutez vos propres widgets bientôt.' },
]

export default function Landing() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <span className="badge">Dashboard personnel</span>
          <h1>Votre univers d’apps, sur une seule page</h1>
          <p className="muted">Connectez vos sources, choisissez vos widgets, automatisez votre journée.</p>
          <div className="hero-ctas">
            <a href="#services" className="button">Voir les services</a>
            <Link to="/integrations/gmail" className="button ghost">Gmail</Link>
          </div>
          <div className="mock">
            <div className="mock-grid">
              <div className="mock-card" />
              <div className="mock-card" />
              <div className="mock-card" />
              <div className="mock-card" />
              <div className="mock-card" />
              <div className="mock-card" />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <div className="logos-inner">
          {logos.map(l => (
            <span key={l} className="logo-pill">
              <BrandIcon name={l.toLowerCase()} size={16} />
              <span style={{ marginLeft: 6 }}>{l}</span>
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES GRID (Home replaces dashboard) */}
      <section id="services" className="features">
        <h2 style={{textAlign:'center', marginBottom: 10}}>Services</h2>
        <p className="muted" style={{textAlign:'center', marginTop: 0}}>Tous vos systèmes au même endroit</p>
        <div className="grid">
          {apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="muted">© {new Date().getFullYear()} HomeTab</span>
          <div className="links">
            <Link to="/">Accueil</Link>
            <a href="#services">Services</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
