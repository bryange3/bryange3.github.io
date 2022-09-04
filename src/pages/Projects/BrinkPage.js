import React from 'react';
import Content from '../../components/Content.js';
import Hero from '../../components/Hero.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';

// team photo
import teamdtown from '../../assets/project/brink/team.jpg';
import teamdevnight from '../../assets/project/brink/brinkdevnight.jpg';

function BrinkPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />

            <Row className="project-info mobile-padding" width={width}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />

                <Row>
                    <Col sm>
                        <b>Role</b>
                        <br />Product Designer
                    </Col>
                    <Col sm>
                        <b>Timeline</b>
                        <br />
                        January - May 2022
                    </Col>
                    <Col sm>
                        <b>Skills</b>
                        <br />Product Thinking
                        <br />Interaction Design
                        <br />Visual Design
                        <br />User Research
                    </Col>
                    <Col sm>
                        <b>Team</b>
                        <br />2 Technical Leads
                        <br />2 Product Designers
                        <br />3 Software Developers
                    </Col>
                    <Col sm>
                        <b>Tools</b>
                        <br />Figma
                        <br />FigJam
                        <br />Notion
                        <br />Slack
                    </Col>
                </Row>
            </Row>

            <Content width={width}>
                <body>
                    <div className="med-text">
                        <p className="paragraph">
                            <p className="section">
                                Summary
                            </p>
                            <a href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer" className="link-underline">Hack4Impact</a> is a student organization at UIUC that works with nonprofits to build software for social good. This past spring semester, I worked in a team with <a href="https://brinkapp.co/" target="_blank" rel="noopener noreferrer" className="link-underline">Brink</a>, an election voting guide nonprofit. We built an accessible web app that serves as an election guide; the main features we provided voters include the voting checklist, ballot, and FAQ.
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Problem
                            </p>

                            <h3 className="subsection">
                                People with disabilities do not have the same access to voting information as people without disabilities.
                            </h3>
                            According to the Election Assistance Commission, voters with disabilities were nearly twice as likely as nondisabled voters to experience problems when voting. Election webpages where voters can apply to receive mail ballots often do not accommodate tools used by people who are blind, have low vision, or cannot use keyboards or a mouse…
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Solution
                            </p>

                            <h3 className="subsection">
                                A responsive web app that serves as an election guide for all voters in the US.
                            </h3>

                            This app reduces friction for users to use their voting checklist and learn about ballot candidates. There's an emphasis on making sure everything is accessible for those with vision, hearing, and motor disabilities.
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Iterations
                            </p>

                            <h3 className="subsection">
                                This is the FigJam document I used to explore different directions and document design decisions.
                            </h3>

                            I conducted design explorations, noted feedback, and documented product/design decisions. I was able to iterate based on conversations with Jocelyn (my co-designer!), feedback from my technical leads and developers, and weekly org-wide design critiques. We were also able to gain insights from regular check-in calls with the <a href="https://accessibleit.disability.illinois.edu/" target="_blank" rel="noopener noreferrer" className="link-underline">UIUC Accessibility Information Technology Group</a> where I learned so much about accessible web design. I'm incredibly grateful to the web accessibility experts for providing their feedback and important considerations on our designs.
                        </p>

                        <iframe title="Brink Brainstorm and Iterations" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FboFLPDpPSwjdUg36m8QPs6%2FBrink-Brainstorm%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

                        <p className="paragraph">
                            Check out our Figma file where Jocelyn and I handed off designs to developers, made design QA notes, and established a design system.
                        </p>

                        <iframe title="Brink Figma Designs" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F6aJ3cfu2Yq5dxUQcNDkm6Y%2FBrink-Designs%3Fnode-id%3D34%253A2" allowfullscreen></iframe>

                        <p className="paragraph">
                            <hr className="rounded" />

                            <Row>
                                <Col>
                                    <img src={teamdtown} alt="Brink Team in Downtown Champaign" className="project-img center" />
                                </Col>
                                <Col>
                                    <img src={teamdevnight} alt="Brink Team eating pizza at dev night" className="project-img center" />
                                </Col>
                            </Row>

                            <h3 className="subsection">
                                Big shoutout to my team for being incredible designers, developers, and leads!
                            </h3>

                            <p className="paragraph">
                                <Row>
                                    <Col>
                                        <ul>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amit-m-sawhney/">Amit Sawhney</a>, Technical Lead</li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayan-mallik/">Ayan Mallik</a>, Technical Lead</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joosxu/">Jocelyn Xu</a>, Product Designer</li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/suewee/">Sue Wee</a>, Software Developer</li>
                                            <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ericccccc/">Eric Liu</a>, Software Developer</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </p>
                        </p>
                    </div>
                </body>
            </Content>
        </FadeIn >
    );
}

export default BrinkPage;