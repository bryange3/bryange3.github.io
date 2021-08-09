import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConnectTutorsPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <Row>
                        <Col sm>
                            <b>Role</b>
                            <br />UX Design
                            <br />UI Design
                            <br />User Research
                            <br />Client Presentation
                        </Col>
                        <Col sm>
                            <b>Timeline</b>
                            <br />
                            July 2021 - Present
                        </Col>
                        <Col sm>
                            <b>Team Members</b>
                            <br />2 Design + Developers
                            <br />3 Designers
                            <br />1 Project Manager
                        </Col>
                        <Col sm>
                            <b>Design Tools</b>
                            <br />Figma
                            <br />FigJam
                            <br />Notion
                        </Col>
                    </Row>

                    <br />
                    This project was done through Develop For Good, an organization that connects student volunteers to nonprofit projects.

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Goal
                        </p>

                        <h3 className="subsection">
                            Redesign the Connect Tutors website to improve tutor and student registration experience and increase sign-ups.
                        </h3>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Summary
                        </p>

                        As a product designer on the Connect Tutors website redesign project, I am working with other designers, my project manager, and the Connect Tutors nonprofit team to determine what key areas we want to focus on in the website redesign.

                        <p className="paragraph">
                            So far, I have enjoyed learning about Connect Tutors' current processes for registration, tutor training, and gaining tutees. I've also learned a lot through collaborating with other designers on discovery techniques such as user interviews, empathy mapping, and paper prototyping.
                        </p>

                        <p className="paragraph">
                            To learn more about this ongoing project, please contact me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a>.
                        </p>
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default ConnectTutorsPage;