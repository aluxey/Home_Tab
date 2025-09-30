import { useMemo, useState } from 'react'
import AppCard from '../components/AppCard.jsx'
import Header from '../components/Header.jsx'
import { apps } from '../data/apps.js'

export default function Home() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return apps
    return apps.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      (a.tags && a.tags.some(t => t.toLowerCase().includes(q)))
    )
  }, [query])

  return (
    <div className="app-container">
      <Header title="Home" subtitle="Your apps at a glance" />

      <div className="toolbar">
        <input
          className="input"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search apps…"
          aria-label="Search apps"
        />
      </div>

      <div className="grid">
        {filtered.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <section className="card" style={{ marginTop: 20 }}>
        <h3>Coming soon</h3>
        <p className="muted">Sections planned:</p>
        <div className="tags">
          {['Météo', 'Tram / Bus', 'Traffic', 'News'].map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
