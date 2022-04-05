import React from 'react';
import Content from '../../components/Content.js';
import Hero from '../../components/Hero.js';
import Row from 'react-bootstrap/Row';
import FadeIn from 'react-fade-in';

import stat107finalproject from '../../assets/project/stat107final/stat107finalproject.png';

function StatFinalPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />
            <Row className="project-info" width={width} style={{ paddingBottom: "0em", marginBottom: "1em" }}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />
            </Row>

            <Content width={width}>
                <body>
                    <img src={stat107finalproject} alt="Project PDF" className="project-img" />
                </body>
            </Content>
        </FadeIn>
    );
}

export default StatFinalPage;