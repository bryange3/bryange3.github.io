import React from 'react';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';

import aboutpic from '../assets/other/aboutprofpic.gif';

function AboutPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Row className="about-top">
                <Col className="profile-image" md={4} sm={12}>
                    <img
                        class="profile-image"
                        alt="Profile"
                        src={aboutpic}
                    />
                </Col>
                <Col>
                    <p className="about-subtitle">
                        👋 Hi there! I'm Bryan Ge.
                    </p>
                    <p>
                        My pronouns are he/him and I’m a sophomore at the University of Illinois at Urbana-Champaign. I'm studying Information Sciences and graduating in May 2023.
                    </p>

                    <p className="about-subtitle">
                        🚙 How did I get into UX and product design?
                    </p>
                    <p>
                        I've always been intrigued by technological innovations and how they affect our lives. Through learning computer science, I discovered the different roles in product and landed in design. Since my first project, I've been hooked in the creative process of understanding users and problems and constant iteration.
                    </p>


                    <p className="about-subtitle">
                        🖋 What am I currently up to?
                    </p>

                    <p>
                        I'm currently a Product Designer at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a> and a part-time UX Design Intern at <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a>. At Hack4Impact, I'm also working on design initiatives such as having two designers per project team to foster greater design community and mentorship.
                    </p>

                    <p className="about-subtitle">
                        🥰 Shoutout to my friends, mentors, and design moms!
                    </p>
                    <p>
                        I've received a ton of support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am beyond appreciative of them. Thank you <a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a> and <a className="link-underline" target="_blank" rel="noreferrer" href="https://amandahe.com/">Amanda He</a> for believing in me from the start of my design journey and <a className="link-underline" target="_blank" rel="noreferrer" href="https://www.jacobrokaw.com/">Jake Brokaw</a> for always being open to chat and give me feedback on my work.
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
                            <strong><a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a> — Product Designer</strong>
                        </div>
                        <p>Spring 2022, Fall 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://cargill.com/" target="_blank" rel="noreferrer">Cargill</a> — UX Design Intern</strong>
                        </div>
                        <p>Spring 2022, Summer 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://statefarm.com/" target="_blank" rel="noreferrer">State Farm</a> — Software Engineer Intern</strong>
                        </div>
                        <p>Fall 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://www.trillproject.com/" target="_blank" rel="noreferrer">Trill Project</a> — Design Intern</strong>
                        </div>
                        <p>Spring 2021</p>

                        <div className="about-experience">
                            <strong><a className="link-underline" href="https://stat107.hknguyen.org/" target="_blank" rel="noreferrer">UIUC</a> — Course Assistant, Data Science Discovery</strong>
                        </div>
                        <p>Spring 2021</p>
                    </p>
                </p>
            </Row>
        </FadeIn >
    );
}

export default AboutPage;