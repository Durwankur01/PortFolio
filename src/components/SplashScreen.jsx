import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Disable scrolling while splash screen is active
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        document.body.style.overflow = '';
                        onFinish();
                    }, 500); // Slight delay after hitting 100%
                    return 100;
                }
                // Randomize increment to feel more like a real loading process (5 to 15)
                return prev + Math.floor(Math.random() * 10) + 5;
            });
        }, 150);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = '';
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            <motion.div 
                className="splash-screen"
                initial={{ opacity: 1 }}
                exit={{ 
                    opacity: 0, 
                    y: -50, 
                    filter: "blur(10px)", 
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                }}
            >
                <div className="splash-content">
                    <motion.div 
                        className="splash-logo"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="logo-icon-splash">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                            </svg>
                        </div>
                        <div className="logo-text-splash">
                            Backend<span>.Dev</span>
                        </div>
                    </motion.div>
                    
                    <div className="splash-loader">
                        <div className="loader-bar-container">
                            <motion.div 
                                className="loader-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "easeOut", duration: 0.2 }}
                            />
                        </div>
                        <div className="loader-details">
                            <span className="loader-status">INITIALIZING SYSTEMS</span>
                            <span className="loader-percentage">{progress}%</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default SplashScreen;
