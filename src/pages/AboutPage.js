import React from 'react';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';

import aboutpic from '../assets/other/aboutprofpic.gif';
import pizza from '../assets/other/pizza.gif';
import skincare from '../assets/other/skincare.png';
import denzel from '../assets/other/denzel.jpg';
import applepie from '../assets/other/applepie.png';
import connie from '../assets/other/connie.png';

function AboutPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Row className="about-top mobile-padding">
                <Col className="profile-image" md={4} sm={13}>
                    <img
                        class="profile-image"
                        alt="Profile"
                        src={aboutpic}
                    />
                </Col>
                <Col>
                    <h1 className="about-subtitle">
                        <span role="img" aria-label="Hand Waving">👋</span> Hi there! I'm Bryan Ge.
                    </h1>
                    <p>
                        My pronouns are he/him and I’m an undergrad student at the University of Illinois at Urbana-Champaign. I'm studying Information Sciences and graduating in December 2023.
                    </p>

                    <h1 className="about-subtitle">
                        🚙 How did I get into design?
                    </h1>
                    <p>
                        Since middle school, I've been intrigued by technology and the latest innovations. In college, I discovered the different roles in product and found myself loving design. Since my first project, I've been hooked in the creative process of understanding users and problems, exploring different directions, and constantly iterating.
                    </p>


                    <h1 className="about-subtitle">
                        🖋 What am I up to?
                    </h1>

                    <p>
                        I recently wrapped up my internship at Apple as a Product Design Intern on the iCloud Human Interface Team. During school, I enjoy designing for nonprofits at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact</a> and working on initiatives to improve design culture.
                    </p>

                    <h1 className="about-subtitle">
                        🥰 Shoutout to my friends and design moms!
                    </h1>
                    <p>
                        I've received support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am extremely appreciative of them. Thank you <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a> and <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://amandahe.com/">Amanda He</a> for believing in me from the start of my design journey and <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.jacobrokaw.com/">Jake Brokaw</a> for constantly supporting me and giving me feedback on my work.
                    </p>
                </Col>
            </Row>
            <Row className="about-experiences mobile-padding">
                <Col md={6} sm={13}>
                    <h1 className="about-subtitle">
                        ✏️ Experience
                    </h1>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://www.particlehealth.com/" target="_blank" rel="noopener noreferrer">Particle Health</a> — Product Design Intern</strong>
                    </div>
                    <p>October 2022 - Present</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://apple.com/" target="_blank" rel="noopener noreferrer">Apple</a> — Product Design Intern, iCloud</strong>
                    </div>
                    <p>May - September 2022</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://cargill.com/" target="_blank" rel="noopener noreferrer">Cargill</a> — UX Design Intern</strong>
                    </div>
                    <p>January - April 2022</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://statefarm.com/" target="_blank" rel="noopener noreferrer">State Farm</a> — Software Engineer Intern</strong>
                    </div>
                    <p>August - December 2021</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://cargill.com/" target="_blank" rel="noopener noreferrer">Cargill</a> — UX Design Intern</strong>
                    </div>
                    <p>May - August 2021</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://stat107.hknguyen.org/" target="_blank" rel="noopener noreferrer">UIUC</a> — Course Assistant</strong>
                    </div>
                    <p>January - May 2021</p>
                </Col>
                <Col md={6}>
                    <h1 className="about-subtitle">
                        📌 Projects
                    </h1>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://www.instagram.com/notionuiuc/" target="_blank" rel="noopener noreferrer">Notion</a> — Campus Leader</strong>
                    </div>
                    <p>September 2022 - Present</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact</a> — Product Designer</strong>
                    </div>
                    <p>September 2021 - September 2022</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://developforgood.org/" target="_blank" rel="noopener noreferrer">Develop For Good</a> — Product Designer</strong>
                    </div>
                    <p>July - October 2021</p>

                    <div className="about-experience">
                        <strong><a className="link-underline" href="https://www.trillproject.com/" target="_blank" rel="noopener noreferrer">Trill Project</a> — Design Intern</strong>
                    </div>
                    <p>February - May 2021</p>
                </Col>
            </Row>


            <Row className="about-section mobile-padding">
                <h1 className="about-subtitle">
                    🍵 Here's some more about me!
                </h1>
                <p>
                    Outside of school and work, I enjoy baking pumpkin bread, buying candles, and searching for the best sunset views. I've also loved trying new restaurants and boba spots around the bay area this past summer.
                </p>
            </Row>

            <Row className="about-section mobile-padding">
                <Col sm={6}>
                    <img src={pizza} alt="My friend Riya excited to eat pizza from Jupiter's" className="basic-img" />
                    <p className="image-caption">I love eating pizza with Riya at Jupiter's. 😋</p>
                    <img src={skincare} alt="Skincare products on countertop of bathroom" className="basic-img" />
                    <p className="image-caption">😇 Here's my favorite skincare products from over the years.</p>
                    <img src={connie} alt="Connie and I wearing sunglasses, taking a selfie from a high angle" className="basic-img" />
                    <p className="image-caption">I enjoy going on photoshoots with my friend Connie. Here's a pic from San Diego! ☀️</p>
                </Col>
                <Col sm={6}>
                    <iframe src="https://open.spotify.com/embed/playlist/6rpjNttNdMXVTU9gBbnOjS?utm_source=generator" style={{ borderRadius: "5px" }} width="100%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p className="image-caption">🎵 This is the playlist I blast while driving!</p>
                    <img src={denzel} alt="Denzel" className="basic-img" />
                    <p className="image-caption">I hope to have at least 2 corgis when I'm older, but for now here's a picture of my sister's corgi Denzel. 🥰</p>
                    <img src={applepie} alt="Apple pie with apple design on top" className="basic-img" />
                    <p className="image-caption">My sister and I baked this apple pie for Christmas! 🍎</p>
                </Col>
            </Row>

        </FadeIn >
    );
}

export default AboutPage;