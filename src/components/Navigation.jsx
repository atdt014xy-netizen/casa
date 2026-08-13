import { useEffect, useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button type="button" className="logo" onClick={() => scrollToSection('hero')}>
          <img src="/logo.png" alt="까사로마 로고" className="logo-image" width="52" height="52" />
          <span className="logo-copy">
            <span className="logo-kicker">CASA ROMA</span>
            <strong>까사로마</strong>
          </span>
        </button>

        <button
          type="button"
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button type="button" onClick={() => scrollToSection('rooms')} className="nav-link">
              객실
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('facilities')} className="nav-link">
              시설
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('booking-guide')} className="nav-link">
              예약안내
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('reviews')} className="nav-link">
              후기
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('map')} className="nav-link">
              위치
            </button>
          </li>
          <li>
            <button type="button" onClick={() => scrollToSection('contact')} className="nav-link">
              예약하기
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
