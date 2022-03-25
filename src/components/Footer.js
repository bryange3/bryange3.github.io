import React from 'react';

function Footer() {
    return (
        <footer className="sticky-footer">
            <p className="footer-title">Thanks for coming, let's chat!</p>
            <ul>
                <li><a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" className="social" alt="Email">Email</a></li>
                <li><a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="social" alt="Resume">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/bryange/" target="_blank" rel="noopener noreferrer" className="social" alt="LinkedIn">LinkedIn</a></li>
                <li><a href="https://github.com/bryange3" target="_blank" rel="noopener noreferrer" className="social" alt="GitHub">GitHub</a></li>
                <li><a href="https://instagram.com/omgebryan" target="_blank" rel="noopener noreferrer" className="social" alt="Instagram">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;