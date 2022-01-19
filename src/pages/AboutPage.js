import React from 'react';
import AOS from 'aos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import FadeIn from 'react-fade-in';

import aboutpic from '../assets/other/aboutprofpic.jpg';

function AboutPage(props) {
    AOS.init();
    const width = 7;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Container fluid={true} class="full-width">
                <Row className="about-top">
                    <Col className="profile-image">
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
                            I’m a sophomore at the University of Illinois at Urbana-Champaign graduating in December 2022. I'm studying Information Sciences, concentrating in Human Computer Interaction and User Experience, and minoring in Computer Science.
                        </p>

                        <p className="about-subtitle">
                            🚙 How did I get into UX and product design?
                        </p>
                        <p>
                            I've always been intrigued by innovations in technology and how they affects our lives. In high school and college, I've sought opportunities to get into tech by learning computer science. In this journey, I learned about other product roles and the UX field. Since my first design project my freshman year, I've been hooked in the process of product research, understanding users, ideating solutions, and creating prototypes!
                        </p>


                        <p className="about-subtitle">
                            🖋 What am I up to?
                        </p>

                        <p>
                            Currently, I am a product designer at Hack4Impact UIUC, a student organization, collaborating in a team of 9 to build a dashboard for the admin and contributors of a Chicago nonprofit newspaper, South Side Weekly. I'm also pushing design initiatives within Hack4Impact to build and improve design culture and operations.
                        </p>

                        <p className="about-subtitle">
                            👨‍🍳 Outside of work, I enjoy...
                        </p>

                        <ul>
                            <li>watching thrillers with friends</li>
                            <li>getting glam and going on photoshoots</li>
                            <li>baking pumpkin bread in a bundt pan</li>
                            <li>spending time with my sister and her corgi (Denzel Corgiton)</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Content width={width}>
                        <br />
                        <br />

                        <p className="impact-statement">
                            💌 I'm always down to chat! Email me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> and connect with me on <a className="link-underline" href="https://linkedin.com/in/bryange">LinkedIn</a>.
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Work Experience
                            </p>

                            <ul>
                                <li>Product Designer @ Hack4Impact (Spring 2022)</li>
                                <li>UX Design Intern @ Cargill (Spring 2022)</li>
                                <li>Product Designer @ Hack4Impact (Fall 2021)</li>
                                <li>Software Engineering Intern @ State Farm (Fall 2021)</li>
                                <li>Product Designer @ Connect Tutors thru Develop For Good (Summer 2021)</li>
                                <li>UX Design Intern @ Cargill (Summer 2021)</li>
                                <li>Design Intern @ Trill Project (Spring 2021)</li>
                                <li>Course Assistant for Data Science Discovery @ UIUC (Spring 2021)</li>
                                <li>UX Designer @ Design Innovation (Fall 2020)</li>
                            </ul>
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Extracurriculars
                            </p>

                            <ul>
                                <li>National Board Design Committee Member @ Hack4Impact</li>
                                <li>Ambassador @ KraveBeauty</li>
                                <li>Orientation Leader @ UIUC</li>
                                <li>Design Vision Sprint Participant @ The Trevor Project</li>
                                <li>Executive @ TAMS Sexuality and Gender Alliance (Fall 2019 - Spring 2020)</li>
                            </ul>
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Honors
                            </p>

                            <ul>
                                <li>Facebook EMEA Design Summit 2021</li>
                                <li>1st Place @ HackDuke Ideate Designathon</li>
                                <li>Winner @ UChicago Francis & Rose Yuen East Asia Hackathon</li>
                                <li>Capital One Software Engineering Summit</li>
                            </ul>
                        </p>

                        <hr class="rounded" />

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
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.amandahe.com/">Amanda He</a></li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.chaeeunpark.com/">Chaeeun Park</a></li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://riyajain.me/">Riya Jain</a></li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://athenatang.com/">Athena Tang</a></li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
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
                    </Content>
                </Row>
            </Container>
        </FadeIn >
    );
}

export default AboutPage;