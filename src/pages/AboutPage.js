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
                        😇 Hi there! I'm Bryan Ge (he/him).
                    </h1>
                    <p>
                        I’m an undergraduate student at the University of Illinois at Urbana-Champaign studying Information Sciences and graduating December 2023.
                    </p>

                    <h1 className="about-subtitle">
                        🎨 How did I get into design?
                    </h1>
                    <p>
                        Since middle school, I've been intrigued by the latest innovations in technology. In college, I discovered the different roles in product and found myself loving design. Since my first project, I've been hooked in the process of understanding users, exploring different design options, and constantly iterating.
                    </p>


                    <h1 className="about-subtitle">
                        👨🏻‍💻 What am I up to?
                    </h1>
                    <p>
                        I’m currently interning at <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.particlehealth.com/">Particle Health</a>, designing the future of healthcare data exchange. I'm also working with <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://riyag.me/">Riya</a> (my bestie) on <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/notionuiuc/">Notion UIUC</a>. We're organizing events and socials for the community of Notion lovers on campus. This past summer, I designed at <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.apple.com/">Apple</a> as a Product Design Intern on the iCloud Human Interface Team.
                    </p>

                    <h1 className="about-subtitle">
                        📣 Shoutout to my friends and design moms!
                    </h1>
                    <p>
                        I've received so much support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am extremely appreciative. Thank you <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara</a> for believing in me from the very start of my design career and Carmen for lots of great design feedback and support!
                    </p>
                </Col>
            </Row>
            <Row className="about-experiences mobile-padding">
                <Col md={6} sm={13}>
                    <p className="about-experience-section">
                        Current
                    </p>
                    <div className="about-experience">
                        Product Design Intern at <a className="link-underline" href="https://www.particlehealth.com/" target="_blank" rel="noopener noreferrer">Particle Health</a>
                    </div>

                    <p className="about-experience-section">
                        Past
                    </p>
                    <div className="about-experience">
                        Product Design Intern at <a className="link-underline" href="https://apple.com/" target="_blank" rel="noopener noreferrer">Apple</a>
                    </div>
                    <div className="about-experience">
                        UX Design Intern at <a className="link-underline" href="https://cargill.com/" target="_blank" rel="noopener noreferrer">Cargill</a>
                    </div>
                    <div className="about-experience">
                        Software Engineer Intern at <a className="link-underline" href="https://statefarm.com/" target="_blank" rel="noopener noreferrer">State Farm</a>
                    </div>
                </Col>
                <Col md={6}>
                    <p className="about-experience-section">
                        Projects
                    </p>
                    <div className="about-experience">
                        Campus Leader for <a className="link-underline" href="https://notion.so/" target="_blank" rel="noopener noreferrer">Notion</a>
                    </div>
                    <div className="about-experience">
                        Product Designer at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact UIUC</a>
                    </div>
                    <div className="about-experience">
                        Product Designer at <a className="link-underline" href="https://developforgood.org/" target="_blank" rel="noopener noreferrer">Develop For Good</a>
                    </div>
                </Col>
            </Row>


            <Row className="about-section mobile-padding">
                <h1 className="about-subtitle">
                    🍵 Here's some more about me!
                </h1>
                <p>
                    Outside of school and work, I enjoy baking pumpkin bread, buying candles, and searching for the best sunset views. Recently, I finished watching Ozark (one of the best shows I've watched) and I'm also trying to learn how to cook more than just pasta.
                </p>
            </Row>

            <Row className="about-section mobile-padding">
                <Col sm={4}>
                    <img src={pizza} alt="My friend Riya excited to eat pizza from Jupiter's" className="basic-img" />
                    <p className="image-caption">I love eating pizza with Riya at Jupiter's!</p>
                    <img src={skincare} alt="Skincare products on countertop of bathroom" className="basic-img" />
                    <p className="image-caption">Here's my favorite skincare products from over the years.</p>
                </Col>
                <Col sm={4}>
                    <iframe src="https://open.spotify.com/embed/playlist/6rpjNttNdMXVTU9gBbnOjS?utm_source=generator" style={{ borderRadius: "5px" }} width="100%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p className="image-caption">This is the playlist I blast while driving!</p>
                    <img src={denzel} alt="Denzel" className="basic-img" />
                    <p className="image-caption">I hope to have at least 2 corgis when I'm older, but for now here's a picture of my sister's corgi Denzel.</p>
                </Col>
                <Col sm={4}>
                    <img src={applepie} alt="Apple pie with apple design on top" className="basic-img" />
                    <p className="image-caption">My sister and I baked this apple pie for Christmas!</p>
                    <img src={connie} alt="Connie and I wearing sunglasses, taking a selfie from a high angle" className="basic-img" />
                    <p className="image-caption">I enjoy going on photoshoots with my friend Connie. Here's a pic from San Diego!</p>
                </Col>
            </Row>

        </FadeIn >
    );
}

export default AboutPage;