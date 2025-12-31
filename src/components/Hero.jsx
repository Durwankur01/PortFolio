import { Suspense, lazy } from 'react'
import './Hero.css'

const SystemFlow = lazy(() => import('./SystemFlow'))

function Hero() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        Open to Opportunities
                    </div>

                    <h1 className="hero-name">Durwankur Motiwale</h1>

                    <p className="hero-headline">
                        Software Developer · <span>Backend-Inclined</span> · DSA-Focused
                    </p>

                    <p className="hero-description">
                        I build software by understanding systems first — how data flows,
                        where complexity hides, and why certain designs scale better than others.
                        Currently sharpening my fundamentals through daily practice.
                    </p>

                    <div className="hero-cta">
                        <a
                            href="#projects"
                            className="btn btn-primary"
                            onClick={(e) => handleNavClick(e, 'projects')}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                            </svg>
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-secondary"
                            onClick={(e) => handleNavClick(e, 'contact')}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Get in Touch
                        </a>
                    </div>
                </div>

                <Suspense fallback={null}>
                    <SystemFlow />
                </Suspense>
            </div>

            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="hero-scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
