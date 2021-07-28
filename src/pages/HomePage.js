import React from 'react';
import Grid from '../components/Grid';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import { merge, fadeInRight, fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';

// import homeimage from '../assets/HomeImage.png';
import bottomimage from '../assets/bottomimage.png';
import topcursor from '../assets/topcursor.png';

// Animation code derived from: https://www.npmjs.com/package/react-animations
const myAnimation = keyframes`${merge(fadeInDown, fadeInRight)}`;
const Animation = styled.div`
  animation: 1s ${myAnimation};
`;

function HomePage(props) {
    const width = 9;
    window.scrollTo(0, 0);
    return (
        <FadeIn delay={300} className="background">
            {/* <Jumbotron className="bg-transparent jumbotron-fluid hero"> */}
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={width - 4} sm={12}>
                        <div class="home-images">
                            <a href="https://www.bryange.com/about" rel="noreferrer"><img src={bottomimage} className="home-image" alt="Home Profile Pic" /></a>
                            <a href="https://www.bryange.com/about" rel="noreferrer"><Animation><img src={topcursor} className="home-image-cursor top-image" alt="Figma Cursor" /></Animation></a>
                        </div>
                        {/* {props.animated && <h2 className="display-4"><Animation>{props.animated}</Animation></h2>} */}
                        {props.title && <h2 className="display-5 font-weight-bolder home-title">{props.title}</h2>}
                        {/* {props.subTitle && <h2 className="display-5 font-weight-normal">{props.subTitle}</h2>} */}
                        <div className="home-positions">
                            <h3 className="font-weight-normal role">UX/UI Design Intern at <a className="link-underline" href="https://www.cargill.com/" target="_blank" rel="noreferrer">Cargill</a></h3>

                            <h3 className="font-weight-normal role">Product Designer at <a className="link-underline" href="https://www.connecttutors.org/" target="_blank" rel="noreferrer">Connect Tutors</a> through <a className="link-underline" href="https://www.developforgood.org/" target="_blank" rel="noreferrer">Develop For Good</a></h3>

                            <h3 className="font-weight-normal role">National Board Operations & Design Member at <a className="link-underline" href="https://hack4impact.org/" target="_blank" rel="noreferrer">Hack4Impact</a></h3>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* </Jumbotron> */}

            <Grid projects={props.projects} />
        </FadeIn >
    );
}

export default HomePage;