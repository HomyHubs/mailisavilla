import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import VillaTypePage from './pages/VillaTypePage'
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate'

export default function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa/:slug" element={<VillaTypePage />} />
        <Route path="*" element={<VillaTypePage />} />
      </Route>
    </Routes>
    </>
  )
}
