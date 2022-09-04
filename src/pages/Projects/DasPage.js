import React from 'react';
import Content from '../../components/Content.js';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';

import dasscreenshot from '../../assets/project/das/dasscreenshot.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DasPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />

            <Row className="project-info mobile-padding" width={width}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />

                <Row>
                    <Col sm>
                        <b>Role</b>
                        <br />Web Development
                        <br />Interface Design
                        <br />Content Creation
                    </Col>
                    <Col sm>
                        <b>Team</b>
                        <br />4 Web Developers
                    </Col>
                    <Col sm>
                        <b>Tech Stack</b>
                        <br />HTML/CSS
                        <br />JavaScript
                    </Col>
                </Row>
            </Row>

            <Content width={width}>
                <body>
                    <p className="paragraph">
                        During the fall semester of our last year of high school, some friends and I decided to create Daily Awareness Society (DAS). It started out as a small club where we and other students would get together at club meetings to discuss current events. DAS grew to become a website and community where we would post new articles every Sunday.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Problem
                        </p>
                        <h3 className="subsection">
                            Young adults may often feel like they are trapped inside a small bubble within their local communities.
                        </h3>
                        They may not feel as well connected with issues and events happening in the rest of the country or world. This includes a wide variety of topics including health, modern films, injustice, ethics, and more.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Solution
                        </p>

                        <h3 className="subsection">
                            Daily Awareness Society aims to tackle this feeling of isolation through coverage of current events through the form of a published article every week on the <a href="https://dascopy.glitch.me/" target="_blank" rel="noopener noreferrer" className="link-underline">https://dascopy.glitch.me/</a> website.
                        </h3>
                        Articles range in topics such as STEM, entertainment, and lifestyle. Through promotion on social media platforms, we hope to spread awareness on key topics to other young adults.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            My Work
                        </p>
                        I wrote articles on topics including self-care, productivity, and current events and published them using HTML. I also utilized CSS for aspects of the user interface including the article view, spacing between elements, and responsivity for mobile and desktop screens. Through weekly posts and social media promotion, dailyawarenesssociety.com has accumulated <mark>656 users, 10,748 page views, and 1421 sessions over the course of 5 months</mark>.
                    </p>

                    <p className="paragraph">
                        Check out our website at <a href="https://dascopy.glitch.me/" target="_blank" rel="noopener noreferrer" className="link-underline">https://dascopy.glitch.me/</a>!
                    </p>

                    <a href="https://dascopy.glitch.me/" target="_blank" rel="noopener noreferrer"><img src={dasscreenshot} alt="DAS Website Screenshot" className="project-img-medium center" /></a>

                </body>
            </Content>
        </FadeIn>
    );
}

export default DasPage;