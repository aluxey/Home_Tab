async function getGmailWidgetPreview() {
  // TODO: replace stub with Google Gmail API + token-based fetch.
  return {
    unread: 23,
    mails: [
      { id: 'm1', from: 'GitHub', subject: 'Review requested on PR #42', time: '10:12' },
      { id: 'm2', from: 'LinkedIn', subject: 'New message', time: '09:30' },
      { id: 'm3', from: 'YouTube', subject: 'Your subscriptions have 5 new videos', time: '08:05' },
    ],
  }
}

module.exports = { getGmailWidgetPreview }
