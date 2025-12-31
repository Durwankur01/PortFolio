import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Learning from './components/Learning'
import Contact from './components/Contact'

function App() {
    return (
        <div className="app">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Learning />
                <Contact />
            </main>
        </div>
    )
}

export default App
