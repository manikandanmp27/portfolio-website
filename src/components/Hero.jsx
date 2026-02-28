import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const blobRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (blobRef.current) {
                const x = e.clientX - window.innerWidth / 2;
                const y = e.clientY - window.innerHeight / 2;
                blobRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="blob hero-blob" ref={blobRef}></div>

            <div className="container hero-container">
                <div className="hero-content text-center">
                    <p className="hero-subtitle animate-up">Hello, I'm </p>
                    <h1 className="hero-title animate-up delay-1">
                        <span className="text-gradient">Manikandan</span> M P
                    </h1>
                    <p className="hero-description animate-up delay-2">
                        I build stunning, fast, and accessible digital experiences.
                        Transforming ideas into elegant, animated, and user-centric web applications.
                    </p>

                    <div className="hero-cta animate-up delay-3">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="scroll-indicator animate-up delay-4">
                        <a href="#about" aria-label="Scroll down">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
