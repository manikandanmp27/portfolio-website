import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section contact-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">Get In <span className="text-gradient">Touch</span></h2>

                <div className="contact-container">
                    <div className="contact-info animate-on-scroll">
                        <h3 className="contact-subtitle">Let's talk about your project</h3>
                        <p className="contact-desc">
                            Feel free to reach out for collaborations or just a friendly hello.
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method glass-card">
                                <div className="method-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Email</h4>
                                    <a href="mailto:manikandanmperikamana@gmail.com">manikandanmperikamana@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-method glass-card">
                                <div className="method-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Location</h4>
                                    <p>Bangalore, India</p>
                                </div>
                            </div>

                            <div className="contact-method glass-card">
                                <div className="method-icon">
                                    <i className="fas fa-share-nodes"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Social Profiles</h4>
                                    <div className="social-links">
                                        <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                                        <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="social-link"><i className="fab fa-dribbble"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-card animate-on-scroll delay-1">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Hello!"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    placeholder="How can I help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <i className="fas fa-paper-plane ml-2"></i>}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="form-message success mt-4">
                                    <i className="fas fa-check-circle mr-2"></i>
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
