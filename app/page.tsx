"use client";

import SnowCanvas from "../components/SnowCanvas";
import ProjectsCarousel from "../components/ProjectsCarousel";


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    console.log("Sending:", data);

    const res = await fetch("https://stephen-portfolio-api-gyb5ejesfjb3cdhs.canadacentral-01.azurewebsites.net/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    console.log("Response:", res.status);

    if (res.ok) {
        alert("Message sent!");
        e.currentTarget.reset();
    } else {
        alert("Message failed.");
    }
};

export default function ContactForm() {

    return (
        <main className="page">
            <section className="hero">
                <SnowCanvas />

                <div className="hero-content">
                    <p className="eyebrow">Web Developer</p>
                    <h1 className="title">Stephen Skasko</h1>
                    <p className="subtitle">
                        I enjoy bringing frontend and backend together to create smooth, reliable, data-driven experiences.
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
                        <h3>Frontend & UI Development</h3>
                        <div className="pill-row">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript (ES6)</span>
                            <span>Bootstrap</span>
                            <span>jQuery</span>
                            <span>Responsive Design</span>
                            <span>Accessibility (ADA)</span>
                            <span>UI / UX</span>
                        </div>
                    </div>

                    <div className="experience-block">
                        <h3>Backend & API Integration</h3>
                        <div className="pill-row">
                            <span>C#</span>
                            <span>ASP.NET Core Web API</span>
                            <span>REST APIs</span>
                            <span>AJAX</span>
                            <span>JSON</span>
                            <span>API Integration</span>
                        </div>
                    </div>

                    <div className="experience-block">
                        <h3>Data & Reporting</h3>
                        <div className="pill-row">
                            <span>SQL Server</span>
                            <span>T-SQL</span>
                            <span>SSRS</span>
                            <span>Data Modeling</span>
                            <span>Query Optimization</span>
                        </div>
                    </div>

                    <div className="experience-block">
                        <h3>Platforms & Tools</h3>
                        <div className="pill-row">
                            <span>Git / GitHub</span>
                            <span>IIS</span>
                            <span>SharePoint</span>
                            <span>Drupal</span>
                            <span>Classic ASP</span>
                            <span>VBScript</span>
                        </div>
                    </div>

                    <div className="experience-accordions">
                        <details className="experience-accordion">
                            <summary>Web Development & UI Engineering</summary>
                            <p>
                                Built and maintained responsive, accessible web interfaces using HTML, CSS,
                                JavaScript, and Bootstrap, with a focus on clean UI, usability, and consistent
                                user experience across devices.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Backend-Connected Features</summary>
                            <p>
                                Developed end-to-end features by connecting frontend forms to backend APIs
                                and SQL Server databases, enabling reliable data capture, processing, and
                                integration with reporting systems.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Data, Reporting & Automation</summary>
                            <p>
                                Designed SQL queries and SSRS reports to support operational workflows,
                                automated data processes, and ensured accurate, secure access to reporting data.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>CMS & Intranet Platforms</summary>
                            <p>
                                Built and maintained internal applications and content across CMS and intranet
                                platforms including SharePoint and Drupal, supporting dynamic content, forms,
                                and organizational workflows.
                            </p>
                        </details>

                        <details className="experience-accordion">
                            <summary>Debugging & Production Support</summary>
                            <p>
                                Diagnosed and resolved issues across frontend, backend APIs, SQL databases,
                                and IIS configurations, ensuring stability of production systems and resolving
                                routing, data flow, and performance problems.
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
                                    I’m interested in building end-to-end applications that connect user interfaces, APIs, and data systems. I focus on developing backend-connected features, working with SQL-based data, and improving performance, reliability, and overall system functionality.                            </p>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form" onSubmit={handleSubmit}>
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
