import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import { apps } from '../data/apps.js'

export default function AppDetail() {
  const { id } = useParams()
  const app = apps.find(a => a.id === id)

  if (!app) {
    return (
      <div className="app-container">
        <Header title="Not found" />
        <p>We couldn't find that app.</p>
        <Link to="/" className="button">Back home</Link>
      </div>
    )
  }

  return (
    <div className="app-container">
      <Header title={app.name} subtitle={app.description} />

      <section className="card">
        <h3>Details</h3>
        <ul className="list">
          <li><strong>Name:</strong> {app.name}</li>
          <li><strong>Category:</strong> {app.category}</li>
          {app.url && (
            <li>
              <strong>URL:</strong> <a href={app.url} target="_blank" rel="noreferrer">{app.url}</a>
            </li>
          )}
          {app.version && (
            <li><strong>Version:</strong> {app.version}</li>
          )}
        </ul>
        {app.tags && app.tags.length > 0 && (
          <div className="tags">
            {app.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </section>

      {app.widgets && app.widgets.length > 0 && (
        <section className="card">
          <h3>Widgets</h3>
          <div className="grid">
            {app.widgets.map(w => (
              <div key={w.id} className="widget">
                <h4>{w.title}</h4>
                {w.content && <p>{w.content}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <Link to="/" className="button">Back</Link>
    </div>
  )
}
