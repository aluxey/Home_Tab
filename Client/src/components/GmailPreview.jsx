// Placeholder preview: shows unread count and a short list of recent mails.
// Later, wire to your backend or Google API.
export default function GmailPreview({ unread = 23, mails = [] }) {
  const demoMails = mails.length ? mails : [
    { id: 'm1', from: 'GitHub', subject: 'Review requested on PR #42', time: '10:12' },
    { id: 'm2', from: 'LinkedIn', subject: 'New message', time: '09:30' },
    { id: 'm3', from: 'YouTube', subject: 'Your subscriptions have 5 new videos', time: '08:05' },
  ]
  return (
    <div className="card">
      <h3>Gmail</h3>
      <p className="muted">Non lus: <strong>{unread}</strong></p>
      <div className="list" style={{ listStyle: 'none', paddingLeft: 0 }}>
        {demoMails.map(m => (
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
