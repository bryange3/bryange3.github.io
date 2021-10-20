import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';
import grouppic from '../../../assets/project/trill/group.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TrillPage(props) {
    window.scrollTo(0, 0);
    const width = 6;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <Row>
                        <Col sm>
                            <b>Role</b>
                            <br />UI Design
                            <br />Web Design
                            <br />User Research
                        </Col>
                        <Col sm>
                            <b>Timeline</b>
                            <br />
                            {props.info.timeline}
                        </Col>
                        <Col sm>
                            <b>Design Tools</b>
                            <br />Figma
                            <br />Webflow
                            <br />Procreate
                        </Col>
                    </Row>

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Summary
                        </p>
                        As a design intern for Trill Project, I developed features for the mobile app, revamped the Trill Project website, and created graphics for partnerships. My work consisted of ideation, wireframing, and prototyping new mobile app features, as well as conducting user research and developing beta tester relations.
                        <p className="paragraph">
                            I lead the creation of designs used for Mental Wealth Month, a campaign done in collaboration with Tumblr. These designs were displayed on the top of Tumblr's feed and used to promote awareness for mental health and relevant apps.
                        </p>
                        <p className="paragraph">
                            Here is the website I designed in Webflow as part of this campaign:
                        </p>
                    </p>

                    <iframe className="project-img center" width="500" height="500" src="https://www.youtube-nocookie.com/embed/29cF85m_jjE?autoplay=1&mute=1&loop=1&controls=0&modestbranding&playlist=29cF85m_jjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <br />

                    <p className="paragraph">
                        Contact me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> if you want to learn more about this experience!
                    </p>

                    <hr class="rounded" />

                    <img src={grouppic} alt="Trill Project Team" className="captionedImg center" />
                    <p className="image-caption">
                        Here's a group pic from our final meeting! Will definitely miss this team. :,)
                    </p>
                </body>
            </Content>
        </div>
    );
}

export default TrillPage;