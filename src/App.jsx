import { Suspense, lazy, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Contact from './components/Contact'
import SplashScreen from './components/SplashScreen'
import AnimatedBackground from './components/AnimatedBackground'
import { AnimatePresence } from 'framer-motion'

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="app">
            <AnimatePresence>
                {loading && <SplashScreen key="splash" onFinish={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <>
                    <AnimatedBackground />
                    <Navigation />
                    <main>
                        <Hero />
                        <About />
                        <Projects />
                        <Skills />
                        <Learning />
                        <Contact />
                    </main>
                </>
            )}
        </div>
    )
}

export default App
