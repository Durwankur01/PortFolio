import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const SystemFlow = lazy(() => import('./SystemFlow'))

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

function Hero() {
    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            window.history.pushState(null, null, `#${targetId}`);
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <motion.div 
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        Open to Opportunities
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="hero-name">Durwankur Motiwale</motion.h1>

                    <motion.p variants={itemVariants} className="hero-headline">
                        Software Developer · <span>Backend-Inclined</span> · DSA-Focused
                    </motion.p>

                    <motion.p variants={itemVariants} className="hero-description">
                        I build software by understanding systems first — how data flows,
                        where complexity hides, and why certain designs scale better than others.
                        Currently sharpening my fundamentals through daily practice.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-cta">
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
                            href="/DurwankurMotiwale_CV.pdf"
                            className="btn btn-secondary"
                            download="DurwankurMotiwale_CV.pdf"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
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
                    </motion.div>
                </motion.div>

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
