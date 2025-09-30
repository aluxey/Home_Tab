import { useEffect, useState } from 'react'
import { fetchGmailWidget } from '../lib/api.js'

const fallbackMails = [
  { id: 'm1', from: 'GitHub', subject: 'Review requested on PR #42', time: '10:12' },
  { id: 'm2', from: 'LinkedIn', subject: 'New message', time: '09:30' },
  { id: 'm3', from: 'YouTube', subject: 'Your subscriptions have 5 new videos', time: '08:05' },
]

export default function GmailPreview({ initialUnread = 23, initialMails = fallbackMails }) {
  const [data, setData] = useState({
    unread: initialUnread,
    mails: initialMails.length ? initialMails : fallbackMails,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    fetchGmailWidget()
      .then(payload => {
        if (!active) return
        setData({
          unread: payload?.unread ?? initialUnread,
          mails: Array.isArray(payload?.mails) && payload.mails.length ? payload.mails : fallbackMails,
        })
        setError(null)
      })
      .catch(err => {
        if (!active) return
        // eslint-disable-next-line no-console
        console.error(err)
        setError('Impossible de récupérer les derniers mails (affichage des données de démonstration).')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [initialUnread])

  if (loading) {
    return (
      <div className="card">
        <h3>Gmail</h3>
        <p className="muted">Chargement…</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h3>Gmail</h3>
      {error && <p className="muted" style={{ marginBottom: 12 }}>{error}</p>}
      <p className="muted">Non lus: <strong>{data.unread}</strong></p>
      <div className="list" style={{ listStyle: 'none', paddingLeft: 0 }}>
        {data.mails.map(m => (
          <div key={m.id} className="mail-row">
            <div className="mail-from">{m.from}</div>
            <div className="mail-subject">{m.subject}</div>
            <div className="mail-time muted">{m.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
