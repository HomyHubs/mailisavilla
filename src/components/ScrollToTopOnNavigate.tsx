import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Tự cuộn lên đầu mỗi khi chuyển trang (SPA không tự reset scroll).
export default function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}
