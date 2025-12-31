import './Learning.css'

const learningItems = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
            </svg>
        ),
        title: 'Daily DSA Practice',
        description: 'Solving problems consistently to build strong algorithmic thinking'
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: 'C++ Fundamentals Project',
        description: 'Building a project to solidify core C++ concepts and memory management'
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: 'FastAPI Backend System',
        description: 'Developing a complete backend using FastAPI with proper architecture'
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        title: 'Backend Design Concepts',
        description: 'Learning patterns like clean architecture, SOLID principles, and API design'
    }
]

function Learning() {
    return (
        <section className="learning section" id="learning">
            <div className="container">
                <div className="learning-content">
                    <div className="learning-text">
                        <h2>What I'm Currently Working On</h2>
                        <p>
                            I believe in continuous improvement. Here's what I'm focused on right now
                            to become a better engineer.
                        </p>

                        <div className="learning-items">
                            {learningItems.map((item, index) => (
                                <div className="learning-item" key={index}>
                                    <div className="learning-item-icon">{item.icon}</div>
                                    <div className="learning-item-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="learning-visual">
                        <div className="learning-card">
                            <p className="learning-quote">
                                "The best engineers I know aren't the ones who know everything —
                                they're the ones who <span>never stop learning</span> and aren't afraid
                                to say 'I don't know, but I'll figure it out.'"
                            </p>
                            <div className="learning-author">
                                <div className="learning-author-avatar">D</div>
                                <div className="learning-author-info">
                                    <h5>My Philosophy</h5>
                                    <p>Growth over perfection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learning
