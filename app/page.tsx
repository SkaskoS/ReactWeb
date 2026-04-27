"use client";

import SnowCanvas from "../components/SnowCanvas";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function ContactForm() {

    return (
        <main className="page">
            <section className="hero">
                <SnowCanvas />

                <div className="hero-content">
                    <p className="eyebrow">Junior Web Developer</p>
                    <h1 className="title">Stephen Skasko</h1>
                    <p className="subtitle">
                        Building clean, modern web experiences with thoughtful UI,
                        responsive front-end development, and practical backend problem
                        solving.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact
                        </a>
                    </div>
                </div>
            </section>

            <section id="projects" className="section">
                <div className="section-inner">
                    <p className="section-label">Projects</p>
                    <h2 className="section-title section-title-projects">
                        Current & Past Projects
                    </h2>
                    <p className="section-text">
                        Real-world work focused on forms, UI improvements, database-backed
                        functionality, reporting, and internal web experiences.
                    </p>
                </div>

                <div className="carousel-breakout">
                    <ProjectsCarousel />
                </div>
            </section>

            <section className="section section-alt">
                <div className="section-inner projects-inner">
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">Experience Overview</h2>

                    <div className="experience-block">
                        <h3>Web Development</h3>
                        <div className="pill-row">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Next.js</span>
                            <span>Bootstrap</span>
                            <span>Responsive Design</span>
                            <span>Accessibility</span>
                            <span>UI / UX</span>
                        </div>
                    </div>

                    <div className="experience-block">
                        <h3>Data / Systems</h3>
                        <div className="pill-row">
                            <span>SQL Server</span>
                            <span>SSRS</span>
                            <span>Reporting</span>
                            <span>API Integration</span>
                            <span>Form Workflows</span>
                            <span>Database Design</span>
                            <span>Testing</span>
                            <span>Troubleshooting</span>
                        </div>
                    </div>

                    <div className="experience-block subtle">
                        <h3>Additional Tools</h3>
                        <div className="pill-row">
                            <span>SharePoint</span>
                            <span>Drupal</span>
                            <span>Meditech</span>
                        </div>
                    </div>

                    <div className="experience-accordions">
                        <details className="experience-accordion">
                            <summary>Web Development Work</summary>
                            <p>
                                Built and maintained websites and web-based solutions using HTML, CSS,
                                JavaScript, and Bootstrap, with a focus on responsive, accessible UI.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Reporting & Data Systems</summary>
                            <p>
                                Developed SQL queries and SSRS reports, supported structured data
                                workflows, and worked with reporting automation and secure access.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Intranet / CMS Platforms</summary>
                            <p>
                                Built and maintained internal pages and forms across CMS-driven and
                                intranet platforms including SharePoint and Drupal-based environments.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Troubleshooting & Support</summary>
                            <p>
                                Diagnosed and resolved issues across websites, forms, APIs, SQL
                                systems, IIS, and routing or redirect configurations.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="section-inner">

                    <div className="contact-grid">
                        <div className="contact-left">
                            <p className="section-label">Contact</p>
                            <h2 className="section-title section-title-contact">Get in Touch</h2>
                            <p className="section-text">
                                I’m interested in web development, UI-focused work, backend-connected
                                features, and building better digital experiences.
                            </p>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form">
                                <input name="name" type="text" placeholder="Name" required />
                                <input name="email" type="email" placeholder="Email" required />
                                <textarea name="message" placeholder="Message" required />
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
}
