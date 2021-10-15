import React from 'react';
import AOS from 'aos';
import Hero from '../components/Hero';
import Content from '../components/Content';
import FadeIn from 'react-fade-in';

function ResumePage(props) {
    AOS.init();
    const width = 6;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width} />
            <Content width={width}>
                <p className="paragraph impact-statement">
                    📄 I'm currently seeking a summer 2022 internship! Connect with me through <a className="link-underline" href="mailto:bryange3@gmail.com">email</a> and download a PDF of my <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noreferrer" className="link-underline">resume</a>.
                </p>
            </Content>
        </FadeIn >
    );
}

export default ResumePage;