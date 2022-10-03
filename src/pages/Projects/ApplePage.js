import React from 'react';
import Content from '../../components/Content.js';
import Hero from '../../components/Hero.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';

import legacycontact from '../../assets/project/apple/LegacyContactFlow.png';

function ApplePage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />

            <Row className="project-info mobile-padding" width={width}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} />

                <Row>
                    <Col sm>
                        <b>Role</b>
                        <br />Product Design Intern
                    </Col>
                    <Col sm>
                        <b>Timeline</b>
                        <br />May - September 2022
                        <br />19 weeks
                    </Col>
                    <Col sm>
                        <b>Skills</b>
                        <br />Product Thinking
                        <br />Interaction Design
                        <br />Visual Design
                        <br />Product Research
                        <br />Executive Presentation
                    </Col>
                    <Col sm>
                        <b>Team</b>
                        <br />iCloud Human Interface
                        <br />1 Design Manager
                        <br />8 Designers
                        <br />2 UX Writers
                        <br />2 Producers
                    </Col>
                    <Col sm>
                        <b>Tools</b>
                        <br />Sketch
                        <br />Quip
                        <br />Keynote
                        <br />Slack
                    </Col>
                </Row>
            </Row>

            <Content width={width}>
                <body>
                    <div className="med-text">
                        <p className='section'>
                            Summary
                        </p>

                        I interned on the <a className="link-underline" target="_blank" rel="noreferrer" href="https://www.apple.com/icloud/">iCloud</a> Human Interface Team as a product designer. I collaborated with senior product designers, UX writers, project managers, and engineers to enhance the existing <a className="link-underline" target="_blank" rel="noreferrer" href="https://support.apple.com/en-us/HT212360">Legacy Contact</a> feature for Apple accounts which lets users share account and data access after their death.

                        <img src={legacycontact} alt="Screen flow of setting up Legacy Contact" className="project-img center" />
                        <p className="image-caption">
                            Currently, if you go to your Apple ID account on your iPhone, to Password & Security, and then Legacy Contact, you can add and manage your legacy contacts.
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Learnings
                            </p>

                            <h3 className="subsection">
                                Step back and provide context for stakeholders.
                            </h3>

                            <p className="paragraph">
                                I got to meet with iCloud engineering and other teams and I learned that sharing your reasoning and higher-level vision for decisions is helpful for stakeholders to understand your thought process.
                            </p>

                            <h3 className="subsection">
                                Language greatly impacts the user experience.
                            </h3>

                            <p className="paragraph">
                                I had the opportunity to work with UX writers on the copy for my project. I learned about the purpose and power of voice, and how to use words to guide users through different flows.
                            </p>

                            <h3 className="subsection">
                                Utilize existing components and patterns.
                            </h3>

                            <p className="paragraph">
                                During my internship, I continuously explored iOS and macOS, designing with what already exists so users understand what actions they can take and don’t need to build new mental models.
                            </p>
                        </p>

                        <p className="paragraph">
                            <hr className="rounded" />

                            <h3 className="subsection">
                                Thank you to my team and so many others for giving me so many learning opportunities, especially at design reviews and cross-functional meetings!
                            </h3>

                            <p className="paragraph">
                                <Row>
                                    <Col>
                                        <ul>
                                            <li>Carmen Yu</li>
                                            <li>Hannah Story</li>
                                            <li>Tim Martin</li>
                                            <li>Calvin Ryu</li>
                                            <li>Liv Huntley</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Jen Bush</li>
                                            <li>Marcel Muller</li>
                                            <li>Jun Kurusu</li>
                                            <li>Natalie Kidd</li>
                                            <li>Natalie Calvert</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <ul>
                                            <li>Anthony Parakian</li>
                                            <li>Marcello Lupi</li>
                                            <li>Dana Nir</li>
                                            <li>Meg Frost</li>
                                            <li>Gokul Thirumalai</li>
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

export default ApplePage;