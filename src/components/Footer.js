import React from 'react';

function Footer() {
    return(
        <footer className="sticky-footer my-gray">
            <ul>
                <li><a href="mailto:bryanjg2@illinois.edu" target="_blank" rel="noreferrer" className="default" alt="Email"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                <li><a href="https://linkedin.com/in/bryange" target="_blank" rel="noreferrer" className="default" alt="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/bryange3" target="_blank" rel="noreferrer" className="default" alt="GitHub"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://instagram.com/bryangephoto" target="_blank" rel="noreferrer" className="default" alt="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/omgebryan" target="_blank" rel="noreferrer" className="default" alt="Twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="https://open.spotify.com/user/omgebryan?si=AzsYGAQnQmS8m6Jlg-cUMw" target="_blank" rel="noreferrer" className="default" alt="Spotify"><i class="fab fa-spotify" aria-hidden="true"></i></a></li>
            </ul>
            This site was designed and coded with ❤️ using React.
            <br />© Bryan Ge 2021
        </footer>
    )
}

export default Footer;