import React, { useState } from 'react';
import Grid from '../components/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
// import { merge, fadeInRight, fadeInDown } from 'react-animations';
// import styled, { keyframes } from 'styled-components';
import Sticky from 'react-sticky-el';

import bottomimage from '../assets/other/bottomimage.png';
import topcursor from '../assets/other/topcursor.png';

// Animation code derived from: https://www.npmjs.com/package/react-animations
// const myAnimation = keyframes`${merge(fadeInDown, fadeInRight)}`;
// const Animation = styled.div`
//   animation: 1.5s ${myAnimation};
// `;

function HomePage(props) {
    const [filter, setFilter] = useState("all");

    const width = 9;
    const portfolio = props.projects;

    let filteredItems = portfolio.filter(item => item.category.includes(filter));

    return (
        <FadeIn delay={300} className="background">
            <Container fluid={true}>
                <div>
                    <Row className="justify-content-center">
                        <Col md={width} sm={12}>
                            <div className="home-top">
                                <div className="home-images">
                                    <a href="https://www.bryange.com/about" id="circleme" rel="noreferrer"><img src={bottomimage} className="home-image" alt="Home Profile Pic" /></a>
                                    <section id="cursor">
                                        <a href="https://www.bryange.com/about" rel="noreferrer"><img src={topcursor} className="home-image-cursor top-image" alt="Figma Cursor" /></a>
                                    </section>
                                </div>

                                {props.title && <h3 className="display-6 home-title">I'm a digital product designer and developer with a love for baking and social good.</h3>}

                                <div className="home-positions center">
                                    <h3 className="home-role">🎨 Currently, I'm designing for nonprofits and building design culture at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact UIUC</a>.</h3>
                                    {/* <h3 className="home-role">🍎 This summer, I will be a Product Design Intern at <a className="link-underline" href="https://apple.com/" target="_blank" rel="noreferrer">Apple</a>.</h3> */}
                                </div>
                            </div>

                            <Col>
                                <Row>
                                    <Col md={width - 7} className="filter-section">
                                        <Sticky>
                                            <p className="filter-title">Filter Projects</p>
                                            <div>
                                                <h3 className={`filter ${filter === 'all' ? 'active' : ''}`} active={filter === 'all'} onClick={() => setFilter('all')}>All</h3>
                                                <h3 className={`filter ${filter === 'design' ? 'active' : ''}`} active={filter === 'design'} onClick={() => setFilter('design')}>Design</h3>
                                                <h3 className={`filter ${filter === 'code' ? 'active' : ''}`} active={filter === 'code'} onClick={() => setFilter('code')}>Code</h3>
                                                <h3 className={`filter ${filter === 'ds' ? 'active' : ''}`} active={filter === 'ds'} onClick={() => setFilter('ds')}>Data</h3>
                                                <h3 className={`filter ${filter === 'work' ? 'active' : ''}`} active={filter === 'work'} onClick={() => setFilter('work')}>For Work</h3>
                                            </div>
                                        </Sticky>
                                    </Col>

                                    <Col className="projects">
                                        <Grid projects={filteredItems} />
                                    </Col>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Container>
        </FadeIn >
    );
}

export default HomePage;