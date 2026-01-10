import { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setIsMenuOpen(false)
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
                    Backend<span>.</span>Dev
                </a>

                <button
                    className={`nav-mobile-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
                        About
                    </a>
                    <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>
                        Projects
                    </a>
                    <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>
                        Skills
                    </a>
                    <a href="#learning" className="nav-link" onClick={(e) => handleNavClick(e, 'learning')}>
                        Learning
                    </a>
                    <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>
                        Contact Me
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
