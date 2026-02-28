import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const sectionRef = useRef(null);

    const skillCategories = [
        {
            title: "Core Coursework",
            icon: "fa-graduation-cap",
            skills: [
                { name: "Data Structures & Algorithms", level: 90 },
                { name: "Object-Oriented Programming", level: 95 },
                { name: "Operating Systems", level: 85 },
                { name: "Database Management Systems", level: 80 },
                { name: "Computer Networks", level: 75 }
            ]
        },
        {
            title: "Languages & Tools",
            icon: "fa-code",
            skills: [
                { name: "C / C++", level: 85 },
                { name: "Java", level: 80 },
                { name: "Python", level: 75 },
                { name: "HTML5 / CSS3 / JS", level: 85 },
                { name: "Git & GitHub", level: 90 }
            ]
        },
        {
            title: "Exploring & Building",
            icon: "fa-rocket",
            skills: [
                { name: "React Starter Projects", level: 75 },
                { name: "Node.js Basics", level: 70 },
                { name: "SQL Practice", level: 80 },
                { name: "UI/UX Fundamentals", level: 65 },
                { name: "Problem Solving (LeetCode)", level: 85 }
            ]
        }
    ];

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

    return (
        <section id="skills" className="section skills-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Expertise & <span className="text-gradient">Skills</span></h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category glass-card animate-on-scroll"
                            style={{ animationDelay: `${0.2 * index}s` }}
                        >
                            <div className="category-header">
                                <div className="category-icon">
                                    <i className={`fas ${category.icon}`}></i>
                                </div>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
