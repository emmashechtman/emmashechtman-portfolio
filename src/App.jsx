import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PhotojournalismProject from './pages/PhotojournalismProject'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photojournalism/:slug" element={<PhotojournalismProject />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
