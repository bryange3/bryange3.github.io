import React from 'react';

function Footer() {
    return (
        <footer className="sticky-footer">
            <p className="footer-title">Thanks for coming, let's chat!</p>
            <ul>
                <li><a href="mailto:bryange3@gmail.com" target="_blank" rel="noreferrer" className="social" alt="Email">Email</a></li>
                <li><a href="https://bryange.read.cv" target="_blank" rel="noreferrer" className="social" alt="GitHub">CV</a></li>
                <li><a href="https://github.com/bryange3" target="_blank" rel="noreferrer" className="social" alt="GitHub">GitHub</a></li>
                <li><a href="https://instagram.com/omgebryan" target="_blank" rel="noreferrer" className="social" alt="Instagram">Instagram</a></li>
                <li><a href="https://open.spotify.com/user/omgebryan?si=AzsYGAQnQmS8m6Jlg-cUMw" target="_blank" rel="noreferrer" className="social" alt="Spotify">Spotify</a></li>
            </ul>
        </footer>
    )
}

export default Footer;