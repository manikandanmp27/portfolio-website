import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const Projects = () => {
    const sectionRef = useRef(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Blood Donation Management System',
            category: 'java',
            image: 'fa-droplet',
            description: 'My first project after learning Java basics. A system designed to manage and organize blood donations.',
            tags: ['Java'],
            link: 'https://github.com/manikandanmp27/blood-donation-management-system',
            github: 'https://github.com/manikandanmp27/blood-donation-management-system'
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

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'java', label: 'Java Applications' }
    ];

    return (
        <section id="projects" className="section projects-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">My <span className="text-gradient">Projects</span></h2>

                <div className="filter-container animate-on-scroll delay-1">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${0.1 * (index % 3)}s` }}
                        >
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <i className={`fas ${project.image}`}></i>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.link} className="icon-link" aria-label="Live Demo">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                        <a href={project.github} className="icon-link" aria-label="GitHub Repo">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
