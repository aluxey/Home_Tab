import { Link } from 'react-router-dom'
import BrandIcon from './BrandIcon.jsx'

export default function AppCard({ app }) {
  return (
    <article className="card app-card" style={{display:'grid', gridTemplateRows:'auto 1fr auto', gap:8}}>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <BrandIcon name={app.id} />
        <h3 style={{margin:0}}>
          <Link to={`/apps/${app.id}`}>{app.name}</Link>
        </h3>
      </div>
      <p className="muted" style={{margin:0}}>{app.description}</p>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:6}}>
        {app.tags && (
          <div className="tags">
            {app.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <Link to={`/integrations/${app.id}`} className="button" style={{marginTop:0}}>Voir</Link>
      </div>
    </article>
  )
}
