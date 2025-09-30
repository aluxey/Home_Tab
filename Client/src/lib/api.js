const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  })

  if (!response.ok) {
    const message = `Request failed with status ${response.status}`
    throw new Error(message)
  }

  return response.json()
}

export async function fetchGmailWidget() {
  return request('/widgets/gmail')
}

export { API_BASE_URL }
