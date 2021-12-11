import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';
import FadeIn from 'react-fade-in';

function StatFinalPage(props) {
    window.scrollTo(0, 0);
    const width = 8;
    return (
        <FadeIn>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <hr class="rounded" />
                    <iframe
                        title="STAT 107 Final Project Jupyter Notebook"
                        className="full-width"
                        src="src/assets/project/stat107final/STAT107FinalProject.pdf"
                        frameborder="0"
                    ></iframe>
                </body>
            </Content>
        </FadeIn>
    );
}

export default StatFinalPage;