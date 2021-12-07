import React from 'react';
import Grid from '../components/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import { merge, fadeInRight, fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import bottomimage from '../assets/other/bottomimage.png';
import topcursor from '../assets/other/topcursor.png';

// Animation code derived from: https://www.npmjs.com/package/react-animations
const myAnimation = keyframes`${merge(fadeInDown, fadeInRight)}`;
const Animation = styled.div`
  animation: 1s ${myAnimation};
`;

function HomePage(props) {
    const width = 8;
    window.scrollTo(0, 0);
    return (
        <FadeIn delay={300} className="background">
            <Container fluid={true}>
                <div>
                    <Row className="justify-content-center">
                        <Col md={width} sm={12}>
                            <div className="home-top">
                                <div className="home-images">
                                    <a href="https://www.bryange.com/about" rel="noreferrer"><img src={bottomimage} className="home-image" alt="Home Profile Pic" /></a>
                                    <a href="https://www.bryange.com/about" rel="noreferrer"><Animation><img src={topcursor} className="home-image-cursor top-image" alt="Figma Cursor" /></Animation></a>
                                </div>

                                {props.title && <h3 className="display-6 home-title">Product designer + developer with a love for baking and social good!</h3>}
                                
                                <div className="home-positions center">
                                    <h3 className="role">Product Designer at <a className="link-underline" href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a></h3>
                                    <h3 className="role">User Experience Design Intern at <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a></h3>
                                    <h3 className="role">Sophomore studying Information Sciences at <a className="link-underline" href="https://illinois.edu/" target="_blank" rel="noreferrer">UIUC</a> graduating Dec 2022</h3>
                                </div>
                            </div>

                            <Grid md={width} sm={12} projects={props.projects} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </FadeIn >
    );
}

export default HomePage;