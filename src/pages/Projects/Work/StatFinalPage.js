import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';
import FadeIn from 'react-fade-in';

import stat107finalproject from '../../../assets/project/stat107final/stat107finalproject.png';

function StatFinalPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <FadeIn>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <hr class="rounded med-text" />
                    
                    <img src={stat107finalproject} alt="Project PDF" className="project-img" />
                </body>
            </Content>
        </FadeIn>
    );
}

export default StatFinalPage;