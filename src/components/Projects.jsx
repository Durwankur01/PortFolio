import './Projects.css'

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
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        Each project taught me something about building systems — not just shipping features
                    </p>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <article className="project-card-expanded" key={project.id} data-project={project.id}>
                            <div className="project-card-header">
                                <div className="project-number">0{index + 1}</div>
                                <div className="project-icon-large">{project.icon}</div>
                                <div className="project-title-block">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            <div className="project-card-content">
                                <div className="project-main">
                                    {/* Problem */}
                                    <div className="project-section">
                                        <h4 className="project-section-title">
                                            <span className="section-icon">◆</span>
                                            The Problem
                                        </h4>
                                        <p>{project.problem}</p>
                                    </div>

                                    {/* Architecture */}
                                    <div className="project-section">
                                        <h4 className="project-section-title">
                                            <span className="section-icon">◆</span>
                                            Architecture
                                        </h4>
                                        <p className="architecture-summary">{project.architecture.description}</p>
                                        <div className="architecture-flow">
                                            <code>{project.architecture.flow}</code>
                                        </div>
                                        <div className="architecture-layers">
                                            {project.architecture.layers.map((layer, i) => (
                                                <div className="architecture-layer" key={i}>
                                                    <span className="layer-name">{layer.name}</span>
                                                    <span className="layer-detail">{layer.detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Decisions */}
                                    <div className="project-section">
                                        <h4 className="project-section-title">
                                            <span className="section-icon">◆</span>
                                            Key Decisions
                                        </h4>
                                        <ul className="decisions-list">
                                            {project.decisions.map((decision, i) => (
                                                <li key={i}>{decision}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Trade-offs */}
                                    <div className="project-section tradeoffs-section">
                                        <h4 className="project-section-title">
                                            <span className="section-icon tradeoff-icon">⚖</span>
                                            Trade-offs
                                        </h4>
                                        <p>{project.tradeoffs}</p>
                                    </div>
                                </div>

                                <div className="project-sidebar">
                                    {/* Features */}
                                    <div className="project-section">
                                        <h4 className="project-section-title">Features</h4>
                                        <div className="project-features">
                                            {project.features.map((feature, i) => (
                                                <div className="project-feature" key={i}>
                                                    <span className="project-feature-dot"></span>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="project-section">
                                        <h4 className="project-section-title">Tech Stack</h4>
                                        <div className="project-tech">
                                            {project.tech.map((tech, i) => (
                                                <span className="project-tech-tag" key={i}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Learnings */}
                                    <div className="project-learnings">
                                        <h4 className="project-learnings-title">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                                            </svg>
                                            What I Learned
                                        </h4>
                                        <p>{project.learnings}</p>
                                    </div>

                                    {/* Future Scope */}
                                    <div className="project-future">
                                        <h4 className="project-future-title">Next Steps</h4>
                                        <p>{project.futureScope}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
