import React from 'react';
import AOS from 'aos';
import Hero from '../components/Hero';
import Content from '../components/Content';
import FadeIn from 'react-fade-in';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                
                <p className="paragraph">
                    <p className="section">
                        Education
                    </p>

                    <ul>
                        <li>University of Illinois at Urbana-Champaign</li>
                        <ul>
                            <li>B.S. Statistics and Computer Science, Expected May 2024</li>
                        </ul>
                        <li>Texas Academy of Math and Science</li>
                        <ul>
                            <li>High School Diploma, Computer Science Track</li>
                        </ul>
                    </ul>
                </p>

                <p className="paragraph">
                    <p className="section">
                        Work Experience
                    </p>

                    <ul>
                        <li>Incoming UX Design Intern @ Cargill (Spring 2022)</li>
                        <li>Product Designer @ Hack4Impact (Fall 2021)</li>
                        <li>Software Engineering Intern @ State Farm (Fall 2021)</li>
                        <li>Product Designer @ Connect Tutors (Summer - Fall 2021)</li>
                        <li>UX Design Intern @ Cargill (Summer 2021)</li>
                        <li>Design Intern @ Trill Project (Spring 2021)</li>
                        <li>Data Science Discovery Course Assistant @ UIUC (Spring 2021)</li>
                    </ul>
                </p>

                <p className="paragraph">
                    <p className="section">
                        Extracurriculars
                    </p>

                    <ul>
                        <li>National Board Operations & Design Member @ Hack4Impact</li>
                        <li>Orientation Leader @ UIUC</li>
                        <li>Design Vision Sprint Participant @ The Trevor Project</li>
                        <li>Executive @ TAMS Sexuality and Gender Alliance</li>
                    </ul>
                </p>

                <p className="paragraph">
                    <p className="section">
                        Honors
                    </p>

                    <ul>
                        <li>1st Place @ HackDuke Ideate Designathon</li>
                        <li>Winner @ UChicago Francis & Rose Yuen East Asia Hackathon</li>
                        <li>Capital One Software Engineering Summit</li>
                        <li>Executive @ TAMS Sexuality and Gender Alliance</li>
                    </ul>
                </p>
            </Content>
        </FadeIn >
    );
}

export default ResumePage;