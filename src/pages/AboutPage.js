import React from 'react';
import AOS from 'aos';
import aboutpic from '../assets/other/aboutprofpic.jpg';

import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import FadeIn from 'react-fade-in';

function AboutPage(props) {
    AOS.init();
    const width = 9;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Container fluid={true} class="full-width">
                <body>
                    <Content width={width - 2}>
                        <img
                            class="profile-image center"
                            alt="Profile"
                            src={aboutpic}
                        />

                        <p className="about-subtitle">
                            👋 Hi there! I'm Bryan Ge (he/him).
                        </p>
                        <p>
                            I’m a sophomore at the University of Illinois at Urbana-Champaign studying Information Sciences, concentrating in Human Computer Interaction and User Experience, graduating May 2023.
                        </p>

                        <p className="about-subtitle">
                            🚙 How did I get into product design?
                        </p>
                        <p>
                            I've always been intrigued by technology and how it affects our lives. Throughout high school and college, I've sought opportunities to learn about computer science. In this journey, I became exposed to the world of product where I learned about other product roles and the world of user experience / product design. Since my first design project at a student organization my freshman year, I've been hooked in the process of research, understanding users, and prototyping!
                        </p>


                        <p className="about-subtitle">
                            🖋 What am I up to?
                        </p>

                        <p>
                            Currently, I am involved in Hack4Impact at the national and UIUC level. I'm a product designer for a Chicago news nonprofit, South Side Weekly, and a committee member of the design and operations functions of National Hack4Impact. I'm working on growing the design community and culture at Hack4Impact.

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

                        <p>
                            I'm always down to chat! Email me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> and connect with me on <a className="link-underline" href="https://linkedin.com/in/bryange">LinkedIn</a>.
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Work Experience
                            </p>

                            <ul>
                                <li>Incoming UX Design Intern @ Cargill (Spring 2022)</li>
                                <li>Product Designer @ Hack4Impact (Fall 2021)</li>
                                <li>Software Engineering Intern @ State Farm (Fall 2021)</li>
                                <li>UX Design Intern @ Cargill (Summer 2021)</li>
                                <li>Data Science Discovery Course Assistant @ UIUC (Spring 2021)</li>
                            </ul>
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Extracurriculars
                            </p>

                            <ul>
                                <li>National Board Design Committee Member @ Hack4Impact</li>
                                <li>Orientation Leader @ UIUC</li>
                                <li>Design Vision Sprint Participant @ The Trevor Project</li>
                                <li>UI Designer @ Design Innovation (Fall 2020)</li>
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
                                <ul>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.amandahe.com/">Amanda He</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://athenatang.com/">Athena Tang</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://riyajain.me/">Riya Jain</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://katesliang.com/">Kate Liang</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://conniexu.com/">Connie Xu</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rachelyqian/">Rachel Qian</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayushis3/">Ayushi Singh</a></li>
                                    <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meichen-ge-9a980441/">Meichen Ge</a> (best sister!)</li>
                                </ul>
                            </p>
                        </p>
                    </Content>
                </body>
            </Container>
        </FadeIn >
    );
}

export default AboutPage;