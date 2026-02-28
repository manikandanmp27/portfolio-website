import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const stats = [
        { value: '9.17', label: 'Current GPA' },
        { value: '2', label: 'Academic Projects' },
        { value: '15+', label: 'LeetCode Problems' },
        { value: '5+', label: 'Tech Stacks Learned' },
    ];

    return (
        <section id="about" className="section about-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">About Me</h2>

                <div className="about-grid">
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="about-image glass">
                            <div className="image-placeholder">
                                <i className="fas fa-user-astronaut"></i>
                            </div>
                        </div>
                        <div className="experience-badge glass-card">
                            <span className="text-gradient font-bold heading-font">CS</span>
                            <span className="text-sm">Student</span>
                        </div>
                    </div>

                    <div className="about-content animate-on-scroll delay-1">
                        <h3 className="about-subtitle">
                            Learning & <span className="text-gradient">Building</span> for the Web
                        </h3>
                        <p className="about-text">
                            I'm a dedicated Computer Science student with a passion for software development, data structures, and modern web technologies. My academic journey is focused on mastering the fundamentals of computer engineering while actively applying those concepts to real-world projects.
                        </p>
                        <p className="about-text">
                            Whether I'm solving algorithmic challenges, building full-stack web applications, or collaborating on open-source projects, I love the process of learning and turning complex problems into elegant solutions.
                        </p>

                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card glass-card">
                                    <h4 className="stat-value text-gradient">{stat.value}</h4>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
