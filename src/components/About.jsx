import { motion } from 'framer-motion'
import './About.css'

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Main Content */}
                    <div className="about-content">
                        <motion.div 
                            className="about-intro"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariants}
                        >
                            <h2>How I Think About Engineering</h2>
                            <p className="about-lead">
                                I don't just use tools — I try to understand <em>why</em> they work.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="about-philosophy"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariants}
                        >
                            <p>
                                When I work on a project, my first question isn't "what framework should I use?"
                                It's "how should data flow through this system?"
                            </p>
                            <p>
                                I'm drawn to backend development because that's where the interesting decisions happen —
                                how to structure APIs, how to model data, how to handle errors gracefully.
                                The frontend is important, but the backend is where systems either scale or break.
                            </p>
                            <p>
                                Every day, I practice Data Structures & Algorithms. Not because I love leetcode,
                                but because I've noticed it changes how I think about problems.
                                A solution that seemed complex becomes obvious once you see the right structure.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="about-approach"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={staggerVariants}
                        >
                            <motion.h3 variants={fadeUpVariants}>My Approach</motion.h3>
                            <div className="approach-cards">
                                <motion.div variants={fadeUpVariants} className="approach-card">
                                    <div className="approach-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                            <path d="M2 17l10 5 10-5" />
                                            <path d="M2 12l10 5 10-5" />
                                        </svg>
                                    </div>
                                    <h4>Systems First</h4>
                                    <p>Before writing code, I map out how components talk to each other. Architecture decisions compound.</p>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="approach-card">
                                    <div className="approach-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                    <h4>Consistent Practice</h4>
                                    <p>Daily DSA practice isn't about interview prep — it's about building pattern recognition.</p>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="approach-card">
                                    <div className="approach-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <path d="M14 2v6h6" />
                                            <path d="M16 13H8" />
                                            <path d="M16 17H8" />
                                            <path d="M10 9H8" />
                                        </svg>
                                    </div>
                                    <h4>Document & Iterate</h4>
                                    <p>I write down what I learn, review what didn't work, and improve the approach next time.</p>
                                </motion.div>

                                <motion.div variants={fadeUpVariants} className="approach-card">
                                    <div className="approach-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    </div>
                                    <h4>Honest About Gaps</h4>
                                    <p>I don't claim expertise I don't have. I say "I don't know yet" and then go learn it.</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <motion.aside 
                        className="about-sidebar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUpVariants}
                    >
                        <div className="about-snapshot">
                            <h3>Snapshot</h3>
                            <dl className="snapshot-list">
                                <div className="snapshot-item">
                                    <dt>Focus</dt>
                                    <dd>Backend Development</dd>
                                </div>
                                <div className="snapshot-item">
                                    <dt>Daily</dt>
                                    <dd>DSA Practice</dd>
                                </div>
                                <div className="snapshot-item">
                                    <dt>Projects</dt>
                                    <dd>3 End-to-End</dd>
                                </div>
                                <div className="snapshot-item">
                                    <dt>Mindset</dt>
                                    <dd>Always Learning</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="about-quote">
                            <blockquote>
                                "The best engineers I know understand the system before they understand the syntax."
                            </blockquote>
                            <cite>— Personal observation</cite>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    )
}

export default About
