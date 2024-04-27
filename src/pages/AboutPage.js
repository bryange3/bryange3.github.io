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
                        I am a software designer who loves solving complex problems involving deep systems thinking, visual craft, and storytelling. I’m currently interning at Nice Handwriting, a digital design and strategy studio. I recently graduated from UIUC and am looking for my next design opportunity! Previously, I led and shipped projects at Apple, Amazon, Cargill, and multiple nonprofits. Here's my resume.
                    </p>

                    <h1 className="about-subtitle">
                        🎨 How did I get into design?
                    </h1>
                    <p>
                        Since middle school, I've been intrigued by the latest innovations in technology. In college, I discovered the different roles in product and found myself loving design. Since my first project, I've been hooked in the process of understanding users, exploring different design options, and constantly iterating.
                    </p>


                    <h1 className="about-subtitle">
                        👨🏻‍💻 What have I been up to?
                    </h1>
                    <p>
                        On campus, I designed and shipped software for nonprofits at Hack4Impact. I loved building meaningful products and collaborating with talented students and real clients. I also led initiatives to improve design culture across the organization: team-pair design critique, industry designer feedback, online resources, and recruitment.
                    </p>

                    <h1 className="about-subtitle">
                        📣 Shoutout to my friends and design moms!
                    </h1>
                    <p>
                        I've received so much support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am extremely appreciative. Thank you <a className="link-underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara</a> for believing in me from the very start of my design career and Carmen for lots of great design feedback and support!
                    </p>
                </Col>
            </Row>
            


            <Row className="about-section mobile-padding">
                <h1 className="about-subtitle">
                    🍵 Here are some snippets from my life!
                </h1>
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