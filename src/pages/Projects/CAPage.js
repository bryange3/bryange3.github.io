import React from 'react';
import Content from '../../components/Content.js';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';

import stat107cascreenshot from '../../assets/project/stat107ca/stat107cascreenshot.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CAPage(props) {
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
                        <br />Course Assistant
                    </Col>
                    <Col sm>
                        <b>Responsibilities</b>
                        <br />Lead Python discussion labs
                        <br />Hold weekly office hours
                        <br />Proctor exams
                    </Col>
                    <Col sm>
                        <b>Timeline</b>
                        <br />
                        Spring 2021 Semester
                    </Col>
                </Row>
            </Row>

            <Content width={width}>
                <body>
                    <p className="paragraph">
                        <p className="section">
                            Summary
                        </p>
                        After taking STAT 107: Data Science Discovery in the fall semester of my freshman year, I became a course assistant for the course in the spring. I enjoyed helping answer conceptual statistics questions, walk through the steps for solving problems, and pulling up examples from Python labs for students who came with homework and exam practice questions during my weekly office hours. I also got the opportunity to lead Python lab discussion sections twice a week and proctor exams throughout the semester.
                    </p>

                    <img src={stat107cascreenshot} alt="Screenshot" className="project-img" />
                </body>
            </Content>
        </FadeIn>
    );
}

export default CAPage;