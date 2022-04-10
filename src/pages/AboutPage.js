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
            <Row className="about-top">
                <Col className="profile-image" md={5} sm={13}>
                    <img
                        class="profile-image"
                        alt="Profile"
                        src={aboutpic}
                    />
                </Col>
                <Col>
                    <p className="about-subtitle">
                        <span role="img" aria-label="Hand Waving">👋</span> Hi there! I'm Bryan Ge.
                    </p>
                    <p>
                        My pronouns are he/him and I’m a sophomore at the University of Illinois at Urbana-Champaign. I'm studying Information Sciences and graduating in May 2023.
                    </p>

                    <p className="about-subtitle">
                        🚙 How did I get into design?
                    </p>
                    <p>
                        I've always been intrigued by technological innovations and how they affect our lives. Through learning computer science, I discovered the different roles in product and landed in design. Since my first project, I've been hooked in the creative process of understanding users and problems, exploring different directions, and constantly iterating.
                    </p>


                    <p className="about-subtitle">
                        🖋 What am I currently up to?
                    </p>

                    <p>
                        I'm currently a Product Designer at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact</a> and a part-time UX Design Intern at <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noopener noreferrer">Cargill</a>. At Hack4Impact, I'm also working on initiatives to improve design culture for semesters to come. This includes improving design critique, planning workshops, and creating frameworks for 2-designer project teams.
                    </p>

                    <p className="about-subtitle">
                        🥰 Shoutout to my friends and design moms!
                    </p>
                    <p>
                        I've received a ton of support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am beyond appreciative of them. Thank you <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a> and <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://amandahe.com/">Amanda He</a> for believing in me from the start of my design journey and <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.jacobrokaw.com/">Jake Brokaw</a> for always being open to chat and give me feedback on my work.
                    </p>
                </Col>
            </Row>
            <Row className="project-info">
                <p className="about-experiences">
                    <p className="paragraph">
                        <p className="about-subtitle">
                            ✏️ Experience
                        </p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://apple.com/" target="_blank" rel="noopener noreferrer">Apple</a> — Incoming Product Design Intern</strong>
                        </div>
                        <p>Summer 2022</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://cargill.com/" target="_blank" rel="noopener noreferrer">Cargill</a> — UX Design Intern</strong>
                        </div>
                        <p>Spring 2022, Summer 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://statefarm.com/" target="_blank" rel="noopener noreferrer">State Farm</a> — Software Engineer Intern</strong>
                        </div>
                        <p>Fall 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://stat107.hknguyen.org/" target="_blank" rel="noopener noreferrer">UIUC</a> — Course Assistant, Data Science Discovery</strong>
                        </div>
                        <p>Spring 2021</p>
                    </p>

                    <br />

                    <p className="paragraph">
                        <p className="about-subtitle">
                            📌 Projects
                        </p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact</a> — Product Designer</strong>
                        </div>
                        <p>Spring 2022, Fall 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://illinoislabs.org/" target="_blank" rel="noopener noreferrer">Illinois Labs</a> — Product Designer</strong>
                        </div>
                        <p>Spring 2022</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://www.trillproject.com/" target="_blank" rel="noopener noreferrer">Trill Project</a> — Design Intern</strong>
                        </div>
                        <p>Spring 2021</p>
                    </p>
                </p>
            </Row>
            <Row className="about-section about-subtitle center">
                🍵 Here's some more about me!
            </Row>
            <Row className="about-section">
                <Col sm={4}>
                    <img src={pizza} alt="Experiences Playlist" className="basic-img" />
                    <p className="image-caption">I love eating pizza with Riya at Jupiter's. 😋</p>
                    <img src={skincare} alt="Skincare products on countertop of bathroom" className="basic-img" />
                    <p className="image-caption">😇 Here's my favorite skincare products from over the years.</p>
                </Col>
                <Col sm={4}>
                    <iframe src="https://open.spotify.com/embed/playlist/6rpjNttNdMXVTU9gBbnOjS?utm_source=generator" style={{ borderRadius: "5px" }} width="100%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p className="image-caption">🎵 This is the playlist I blast while driving!</p>
                    <img src={denzel} alt="Denzel" className="basic-img" />
                    <p className="image-caption">I hope to have at least 2 corgis when I'm older, but for now here's a picture of my sister's corgi Denzel. 🥰</p>
                </Col>
                <Col sm={4}>
                    <img src={applepie} alt="Apple pie with apple design on top" className="basic-img" />
                    <p className="image-caption">My sister and I baked this applie pie for Christmas! 🍎</p>
                    <img src={connie} alt="Connie and I taking a selfie" className="basic-img" />
                    <p className="image-caption">I'm enjoy going on photoshoots with my friend Connie. Here's a pic from San Diego! ☀️</p>
                </Col>
            </Row>
        </FadeIn >
    );
}

export default AboutPage;