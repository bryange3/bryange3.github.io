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
                        👋 Hi there! I'm Bryan Ge (he/him).
                    </p>
                    <p>
                        I’m a sophomore at the University of Illinois at Urbana-Champaign graduating in May 2023. I'm studying Information Sciences, concentrating in Human Computer Interaction and User Experience, and minoring in Computer Science.
                    </p>

                    <p className="about-subtitle">
                        🚙 How did I get into UX and product design?
                    </p>
                    <p>
                        I've always been intrigued by technological innovations and how they affect our lives. In high school and college, I sought opportunities to get into tech through computer science. From there, I learned about the different roles in product and the UX field. Since my first design project, I've been hooked in the creative process of research, understanding users, and constant iteration.
                    </p>


                    <p className="about-subtitle">
                        🖋 What am I up to?
                    </p>

                    <p>
                        I'm currently designing at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a> and <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a>. At Hack4Impact, I'm also working on design initiatives such as having 2 designers per project team and creating a bootcamp to foster greater design culture and education!
                    </p>

                    {/* <p>
                        I'm currently designing at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a> and <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a>. This summer, I will be interning at <a className="link-underline" href="https://www.capitalone.com/" target="_blank" rel="noreferrer">Capital One</a> as a product designer through the Design Development Program.
                    </p> */}
                </Col>
            </Row>
            <Row className="project-info">
                <p className="about-experiences">
                    <p className="paragraph">

                        <p className="about-subtitle">
                            ✏️ Experience
                        </p>

                        {/* <div className="about-experience">
                            <strong>Incoming Product Design Intern at <a className="link-underline" href="https://www.capitalone.com/" target="_blank" rel="noreferrer">Capital One</a></strong> / Summer 2022
                        </div> */}

                        <div className="about-experience">
                            <strong>Product Designer at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a></strong> / Fall 2021, Spring 2022
                        </div>

                        <div className="about-experience">
                            <strong>UX Design Intern at <a className="link-underline" href="https://cargill.com/" target="_blank" rel="noreferrer">Cargill</a></strong> / Summer 2021, Spring 2022
                        </div>

                        <div className="about-experience">
                            <strong>Software Engineer Intern at <a className="link-underline" href="https://statefarm.com/" target="_blank" rel="noreferrer">State Farm</a></strong> / Fall 2021
                        </div>

                        <div className="about-experience">
                            <strong>Design Intern at <a className="link-underline" href="https://www.trillproject.com/" target="_blank" rel="noreferrer">Trill Project</a></strong> / Spring 2021
                        </div>

                        <div className="about-experience">
                            <strong>Course Assistant for <a className="link-underline" href="https://stat107.hknguyen.org/" target="_blank" rel="noreferrer">Data Science Discovery</a></strong> / Spring 2021
                        </div>
                    </p>

                    <br />

                    <p className="paragraph">
                        <p className="about-subtitle">
                            😇 Honors
                        </p>

                        <div className="about-experience">
                            <strong>Facebook</strong> EMEA Design Summit 2021
                        </div>

                        <div className="about-experience">
                            <strong>HackDuke</strong> Ideate Designathon 1st Place Winner
                        </div>

                        <div className="about-experience">
                            <strong>UChicago</strong> Francis & Rose Yuen East Asia Hackathon Winner
                        </div>

                        <div className="about-experience">
                            <strong>Capital One</strong> Software Engineering Summit
                        </div>
                    </p>
                </p>
            </Row>
            <Row className="about-top">
                <Col>
                    <p className="about-subtitle">
                        Shoutout to my friends, mentors, and design moms!
                    </p>
                    <p>
                        I've received a ton of support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am beyond appreciative of them. Thank you. 🥰
                        <p className="paragraph">
                            <Row>
                                <Col>
                                    <ul>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.jacobrokaw.com/">Jake Brokaw</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.amandahe.com/">Amanda He</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.chaeeunpark.com/">Chaeeun Park</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://riyajain.me/">Riya Jain</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://athenatang.com/">Athena Tang</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://chloechan.me/">Chloe Chan</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riyv">Riya Gupta</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katesliang/">Kate Liang</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://conniexu.com/">Connie Xu</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rachelyqian/">Rachel Qian</a></li>
                                        <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meichen-ge-9a980441/">Meichen Ge</a> (best sister!)</li>
                                    </ul>
                                </Col>
                            </Row>
                        </p>
                    </p>
                </Col>
            </Row>
        </FadeIn >
    );
}

export default AboutPage;