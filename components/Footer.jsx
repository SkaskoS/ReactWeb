export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <p>© {new Date().getFullYear()} Stephen Skasko</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/stephen-skasko/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/SkaskoS" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:stephenskaskoo@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                </div>
            </div>
        </footer>
    );
}