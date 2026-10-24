import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

// Nút "lên đầu trang": ẩn khi ở trên cùng, hiện khi cuộn xuống > 400px.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      className={`fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream shadow-lg transition-all duration-300 hover:bg-bark ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ChevronUp size={24} />
    </button>
  )
}
