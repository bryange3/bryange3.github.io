import React from 'react';
import Content from '../../../components/Content.js';
import FadeIn from 'react-fade-in';
import Hero from '../../../components/Hero.js';

import timeline from '../../../assets/project/cargill/Timeline.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CargillPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />

            <Row className="project-info" width={width}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />
                <Row>
                    <Col sm>
                        <b>Role</b>
                        <br />User Experience Designer
                    </Col>
                    <Col sm>
                        <b>Skills</b>
                        <br />User Research
                        <br />Interaction Design
                        <br />Interface Design
                        <br />Client Presentation
                        <br />Stakeholder Interview
                    </Col>
                    <Col sm>
                        <b>Timeline</b>
                        <br />
                        11 weeks
                    </Col>
                    <Col sm>
                        <b>Team</b>
                        <br />1 UX Design Intern
                        <br />3 SWE Interns
                        <br />1 Product Coach
                        <br />1 Technical Coach
                    </Col>
                    <Col sm>
                        <b>Tools</b>
                        <br />Figma
                        <br />FigJam
                        <br />Trello
                        <br />Microsoft Teams
                    </Col>
                </Row>
            </Row>

            <Content width={width}>
                <body>
                    <p className="section">
                        Summary
                    </p>
                    As the <b>sole designer</b> in my project team at Cargill, I lead our product's discovery, user research, wireframing, and prototyping efforts. The internship has provided me the opportunity to directly interact with clients through discovery and shadowing sessions, demos, and feedback calls. These meetings  helped me identify our problem space as well as what the client values.
                    <p className="paragraph">
                        I am unable to publicly go in depth about my work due to <b>NDA restrictions</b>, so please contact me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> if you want to learn more!
                    </p>

                    <br />

                    <p className="impact-statement">
                        💻 Our client has been using the dashboard since August 2021! In fact, this semester it's continuing development to support greater analytics features.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Process
                        </p>

                        <img src={timeline} alt="Timeline" className="project-img" />
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Reflections
                        </p>

                        <h3 className="subsection">
                            I've learned how to collaborate and communicate within a cross-functional team.
                        </h3>
                        This included daily standup, clarifications regarding designs, creating a style sheet, and utilizing Material UI and React components for easy handoff and quick developer prototyping.

                        <h3 className="subsection">
                            Being open-minded and maintaining a culture where all team members are involved increases communication and efficiency.
                        </h3>

                        <p className="paragraph">
                            I ran a mini design sprint with the developers in my team to view our product and problem space from a variety of angles. Collectively writing out how-might-we statements and noticing the similarities and differences in them helped us discover edge cases and potential features for our dashboard that could greatly benefit our target users.
                        </p>
                    </p>
                </body>
            </Content>
        </FadeIn>
    );
}

export default CargillPage;