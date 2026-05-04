"use client";

import { useState } from "react";
import SnowCanvas from "../components/SnowCanvas";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const res = await fetch("https://stephen-portfolio-api-gyb5ejesfjb3cdhs.canadacentral-01.azurewebsites.net/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSubmitted(true);
            setError("");
        } else {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <main className="page">
            
            <section id="contact" className="section">
                <div className="section-inner">
                    <div className="contact-grid">
                        <div className="contact-left">
                            <p className="section-label">Contact</p>
                            <h2 className="section-title section-title-contact">Get in Touch</h2>
                            <p className="section-text">
                                I’m interested in building end-to-end applications that connect user interfaces, APIs, and data systems. I focus on developing backend-connected features, working with SQL-based data, and improving performance, reliability, and overall system functionality.
                            </p>
                        </div>

                        <div className="contact-right">
                            {error && <p className="error-message">{error}</p>}

                            {submitted ? (
                                <div className="contact-success">
                                    <p>Thank you for you submission! I’ll get back to you as soon as I can.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <input name="name" type="text" placeholder="Name" required />
                                    <input name="email" type="email" placeholder="Email" required />
                                    <textarea name="message" placeholder="Message" required />
                                    <button type="submit" className="btn btn-primary">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}