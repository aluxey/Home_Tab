import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppDetail from './pages/AppDetail.jsx'
import Landing from './pages/Landing.jsx'
import ServiceLanding from './pages/ServiceLanding.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Landing />} />
        <Route path="/integrations/:serviceId" element={<ServiceLanding />} />
        <Route path="/apps/:id" element={<AppDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
