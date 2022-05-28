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
// import topcursor from '../assets/other/topcursor.png';

// Animation code derived from: https://www.npmjs.com/package/react-animations
// const myAnimation = keyframes`${merge(fadeInDown, fadeInRight)}`;
// const Animation = styled.div`
//   animation: 1.5s ${myAnimation};
// `;

function HomePage(props) {
    const [filter, setFilter] = useState("all");

    const width = 8;
    const portfolio = props.projects;

    let filteredItems = portfolio.filter(item => item.category.includes(filter));

    return (
        <FadeIn delay={300} className="background">
            <Container fluid={true}>
                <div>
                    <Row className="justify-content-center">
                        <Col md={width} sm={12}>
                            <Row className="home-top">
                                <Col md={width - 5} sm={13}>
                                    <a href="https://www.bryange.com/about" id="circleme" rel="noopener noreferrer"><img src={bottomimage} className="home-image" alt="selfie of me, Bryan, slightly smiling, against a plain white wall" /></a>
                                </Col>
                                <Col home-text>
                                    <h1 className="display-6 home-title">Hey, I'm Bryan! I am a digital product designer with a love for baking and social good.</h1>

                                    <div className="home-positions center">
                                        <h2 className="home-role"><span role='img' aria-label='cloud'>☁️</span> I am interning at <a className="link-underline" href="https://apple.com/" target="_blank" rel="noopener noreferrer">Apple</a> as a Product Designer!</h2>
                                        <h2 className="home-role"><span role='img' aria-label='paint palette'>🎨</span> During school, I enjoy designing for nonprofits at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact UIUC</a>.</h2>
                                        <h2 className="home-role"><span role='img' aria-label='eyes'>👀</span> I'm also seeking a product design or design engineer internship for the fall.</h2>
                                    </div>
                                </Col>
                            </Row>
                            <div >


                                {/* <div className="home-images">
                                    <a href="https://www.bryange.com/about" id="circleme" rel="noopener noreferrer"><img src={bottomimage} className="home-image" alt="Home Profile Pic" /></a>
                                    <section id="cursor">
                                        <a href="https://www.bryange.com/about" rel="noopener noreferrer"><img src={topcursor} className="home-image-cursor top-image" alt="Figma Cursor" aria-label="Hi, I'm Bryan!" /></a>
                                    </section>
                                </div> */}


                            </div>
                            <Col>
                                <Row>
                                    <Col md={width - 5} className="filter-section">
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