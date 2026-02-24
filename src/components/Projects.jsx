import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } 
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const projects = [
    {
        id: 'aura',
        title: 'Aura',
        subtitle: 'Generative AI Platform for Interview Preparation',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M12 2a10 10 0 0 1 10 10" />
                <circle cx="12" cy="12" r="6" />
            </svg>
        ),
        problem: 'Traditional interview prep is fragmented — students practice alone without structured feedback, while companies and TPOs lack visibility into candidate readiness.',
        architecture: {
            description: 'Three-tier architecture with role-based access control',
            flow: 'React Frontend → FastAPI/Supabase Edge Functions → PostgreSQL + AI APIs',
            layers: [
                { name: 'Presentation', detail: 'React with protected routes per role (Student/Company/TPO)' },
                { name: 'Business Logic', detail: 'Supabase Edge Functions handling auth, sessions, AI calls' },
                { name: 'Data Layer', detail: 'PostgreSQL with RLS policies, separate tables per entity' }
            ]
        },
        decisions: [
            'Chose Supabase over custom auth to ship faster while maintaining security',
            'Used edge functions for AI calls to keep API keys server-side',
            'Implemented row-level security instead of application-level checks'
        ],
        tradeoffs: 'Supabase simplifies auth but limits custom session handling. Accepted this tradeoff for faster iteration at this stage.',
        features: [
            'AI-generated interview questions with context awareness',
            'Role-based dashboards for students, companies, TPOs',
            'Session tracking and progress analytics',
            'Secure API key management via edge functions'
        ],
        tech: ['Supabase', 'PostgreSQL', 'Generative AI', 'React', 'Edge Functions'],
        learnings: 'Learned how role-based systems require thinking about data access at the database level, not just the UI. RLS policies forced me to design cleaner data boundaries.',
        futureScope: 'Add real-time mock interview sessions with WebRTC, implement more granular analytics per topic area.'
    },
    {
        id: 'petguard',
        title: 'PetGuard',
        subtitle: 'Smart Pet Fitness Belt & Companion App',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
        problem: 'Pet owners often miss early health signals because they lack continuous, objective activity data. Existing solutions are either too complex or disconnected from actionable insights.',
        architecture: {
            description: 'IoT data pipeline with real-time processing',
            flow: 'Hardware Sensor → Backend API → Database → Client App',
            layers: [
                { name: 'Device Layer', detail: 'Conceptual fitness belt sending periodic activity payloads' },
                { name: 'Ingestion', detail: 'REST API endpoints receiving and validating sensor data' },
                { name: 'Storage & Analytics', detail: 'Supabase with time-series queries for trend analysis' }
            ]
        },
        decisions: [
            'Designed API-first to decouple hardware development from app development',
            'Used polling over WebSockets for MVP simplicity',
            'Normalized activity data into standardized units before storage'
        ],
        tradeoffs: 'Polling introduces latency vs. real-time push. Acceptable for activity tracking where second-level precision isn\'t critical.',
        features: [
            'Activity data ingestion from hardware sensors',
            'Historical trend visualization',
            'Threshold-based health alerts',
            'Multi-pet support per user account'
        ],
        tech: ['Supabase', 'React', 'REST APIs', 'Data Visualization', 'IoT Concepts'],
        learnings: 'Practiced designing systems where the backend must be robust enough to handle unreliable client data. Learned to validate and normalize at ingestion.',
        futureScope: 'Migrate to WebSocket for real-time updates, add ML-based anomaly detection for health alerts.'
    },
    {
        id: 'gyansetu',
        title: 'GyanSetu',
        subtitle: 'Exploring Cultural Roots & Knowledge',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
        ),
        problem: 'Cultural and religious knowledge is often scattered across unreliable sources, making it difficult for learners to find authentic, respectful content in one place.',
        architecture: {
            description: 'Content-driven MERN stack with structured taxonomy',
            flow: 'React Frontend → Express API → MongoDB (content store)',
            layers: [
                { name: 'Frontend', detail: 'React with category-based navigation and search' },
                { name: 'API Layer', detail: 'Express.js with RESTful endpoints for content CRUD' },
                { name: 'Database', detail: 'MongoDB with documents structured by culture, category, and content type' }
            ]
        },
        decisions: [
            'Used MongoDB for flexible schema — content types vary significantly across cultures',
            'Implemented content tagging system for cross-cultural discovery',
            'Separated content creation from content display APIs'
        ],
        tradeoffs: 'MongoDB flexibility means less enforced structure — mitigated by validation at API layer. Trade-off for faster content iteration.',
        features: [
            'Culture-wise content exploration (Hindu, Muslim, Sikh, Christian, Jain)',
            'Book and article discovery with categorization',
            'Search with filters by culture and content type',
            'Respectful, neutral presentation of all traditions'
        ],
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Cloud Deployment'],
        learnings: 'Learned how content structure directly impacts user experience. Poor taxonomy = poor discoverability. Also practiced cultural sensitivity in technical decisions.',
        futureScope: 'Add user-contributed content with moderation, implement recommendation engine based on reading history.'
    }
]

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <motion.div
                    className="section-header projects-dashboard-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUpVariants}
                >
                    <div className="header-text-group">
                        <h2 className="section-title">Projects Console</h2>
                        <p className="section-subtitle">
                            Select a system below to view architectural breakdowns and details
                        </p>
                    </div>
                </motion.div>

                <div className="projects-dashboard">
                    {/* LEFT PANEL: Project List */}
                    <motion.aside 
                        className="projects-sidebar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeUpVariants}
                    >
                        <div className="projects-menu">
                            {projects.map((project, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button 
                                        key={project.id} 
                                        className={`project-menu-item ${isActive ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        <div className="menu-item-icon" data-project={project.id}>
                                            {project.icon}
                                        </div>
                                        <div className="menu-item-text">
                                            <span className="menu-item-id">SYS.0{index + 1}</span>
                                            <span className="menu-item-title">{project.title}</span>
                                        </div>
                                        {isActive && (
                                            <motion.div 
                                                className="menu-item-indicator" 
                                                layoutId="activeIndicator" 
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.aside>

                    {/* RIGHT PANEL: Project Details */}
                    <div className="projects-content-area">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                className="project-detail-view"
                                data-project={activeProject.id}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.div variants={itemVariants} className="detail-header">
                                    <h3 className="detail-title">{activeProject.title}</h3>
                                    <p className="detail-subtitle">{activeProject.subtitle}</p>
                                    <div className="detail-tech-stack">
                                        {activeProject.tech.map((tech, i) => (
                                            <span className="tech-badge" key={i}>{tech}</span>
                                        ))}
                                    </div>
                                </motion.div>

                                <div className="detail-grid">
                                    {/* Left Column in Detail Pane */}
                                    <div className="detail-col-main">
                                        <motion.div variants={itemVariants} className="detail-section">
                                            <h4 className="detail-section-title">The Problem</h4>
                                            <p className="detail-text">{activeProject.problem}</p>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="detail-section">
                                            <h4 className="detail-section-title">Architecture Flow</h4>
                                            <div className="architecture-flow-box">
                                                <code>{activeProject.architecture.flow}</code>
                                            </div>
                                            <div className="architecture-layers-list">
                                                {activeProject.architecture.layers.map((layer, i) => (
                                                    <div className="layer-row" key={i}>
                                                        <strong>{layer.name}</strong>
                                                        <span>{layer.detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="detail-section">
                                            <h4 className="detail-section-title">Key Decisions</h4>
                                            <ul className="detail-list">
                                                {activeProject.decisions.map((decision, i) => (
                                                    <li key={i}>{decision}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    {/* Right Column in Detail Pane */}
                                    <div className="detail-col-side">
                                        <motion.div variants={itemVariants} className="detail-section detail-highlight">
                                            <h4 className="detail-section-title text-warn">Trade-offs</h4>
                                            <p className="detail-text">{activeProject.tradeoffs}</p>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="detail-section">
                                            <h4 className="detail-section-title">Core Features</h4>
                                            <ul className="detail-list feature-list">
                                                {activeProject.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="detail-section detail-learning">
                                            <h4 className="detail-section-title">What I Learned</h4>
                                            <p className="detail-text">{activeProject.learnings}</p>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="detail-section detail-future">
                                            <h4 className="detail-section-title">Next Steps</h4>
                                            <p className="detail-text">{activeProject.futureScope}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
