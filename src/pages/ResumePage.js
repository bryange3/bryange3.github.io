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
                    📄 I'm currently seeking 2022 spring + summer internships! Connect with me through <a className="link-underline" href="mailto:bryange3@gmail.com">email</a> and download a PDF of my <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noreferrer" className="link-underline">resume</a>.
                </p>
                <p className="paragraph">
                    <p className="section">
                        Education
                    </p>

                    <h3 className="resume-point">
                        University of Illinois at Urbana-Champaign
                    </h3>
                    <p className="resume-date">Expected May 2024</p>
                    B.S. Statistics and Computer Science
                    <br />Minors in Business and Informatics

                    <h3 className="resume-point">
                        Texas Academy of Math and Science
                    </h3>
                    <p className="resume-date">May 2018 - August 2020</p>
                    Computer Science Track
                    <br />TAMS is an early college high school program offered at the University of North Texas.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Work Experience
                    </p>

                    <h3 className="resume-point">
                        Cargill<span className="resume-company"> — UX/UI Design Intern</span>
                    </h3>
                    <p className="resume-date">May 2021 - Present</p>
                    Collaborating with software engineers to develop a culinary innovation dashboard for a leading quick service restaurant brand.

                    <h3 className="resume-point">
                        Connect Tutors<span className="resume-company"> — Product Designer</span>
                    </h3>
                    <p className="resume-date">July 2021 - Present</p>
                    Redesigning Connect Tutor’s website to serve as a central hub for volunteer tutors, students, school districts, and donors.
                    
                    <h3 className="resume-point">
                        Trill Project<span className="resume-company"> — Design Intern</span>
                    </h3>
                    <p className="resume-date">February 2021 - May 2021</p>
                    Trill is a platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves. Led designs for Mental Wealth Month campaign, as part of Trill’s partnership with Tumblr.

                    <h3 className="resume-point">
                        UIUC<span className="resume-company"> — Course Assistant</span>
                    </h3>
                    <p className="resume-date">January 2021 - May 2021</p>
                    Course Assistant for STAT 107: Data Science Discovery. Led Python lab discussion sections and held office hours to answer students' statistics and programming questions.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Extracurriculars
                    </p>

                    <h3 className="resume-point">
                        Hack4Impact<span className="resume-company"> — National Board Operations & Design Member</span>
                    </h3>
                    <p className="resume-date">April 2021 - Present</p>
                    Hack4Impact is an organization that builds nonprofit software for social good. Currently building project and design resources for 14 chapters across the nation.

                    <h3 className="resume-point">
                        Design Innovation<span className="resume-company"> — UI Designer</span>
                    </h3>
                    <p className="resume-date">September 2020 - December 2020</p>
                    Redesigned website for Professor Matthew Caesar that enables students to code and share Internet of Things Projects.

                    <h3 className="resume-point">
                        Sexuality and Gender Alliance<span className="resume-company"> — Executive</span>
                    </h3>
                    <p className="resume-date">September 2020 - December 2020</p>
                    Passed legislation to add pronouns to nameplates inside the TAMS residence building to improve inclusivity within the student community.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Projects
                    </p>

                    <h3 className="resume-point">
                        Design Buddies<span className="resume-company"> — Product Splash Participant</span>
                    </h3>
                    <p className="resume-date">July 2021 - Present</p>
                    Product Splash is a 5-week immersive program for product designers and product managers to conceptualize and pitch a new product idea.

                    <h3 className="resume-point">
                        The Trevor Project<span className="resume-company"> — Design Vision Sprint Participant</span>
                    </h3>
                    <p className="resume-date">May 2021</p>
                    The Trevor Project is the world’s largest suicide prevention and crisis intervention organization for LGBTQ youth.

                    <h3 className="resume-point">
                        HackDuke <span className="resume-company"> — 1st Place at Ideate Designathon</span>
                    </h3>
                    <p className="resume-date">April 2021</p>
                    Designed a social platform to connect the elderly, focusing on accessibility.

                    <h3 className="resume-point">
                        UChicago <span className="resume-company"> — Winner of Francis & Rose Yuen East Asia Hackathon</span>
                    </h3>
                    <p className="resume-date">December 2020</p>
                    Developed an educational and interactive web app in a team of 4 using HTML, CSS, JavaScript, Python, and Amazon Rekognition API for children to learn about the effects of carbon emissions starting with a new generation.
                </p>

                <hr className="rounded" />

                <p className="paragraph">
                    <p className="section">
                        Skills
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Design
                        </span>
                        <br />Figma, Adobe XD
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Programming
                        </span>
                        <br />Java, C/C++, Python, HTML/CSS, React.js, JavaScript
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Personal Coursework
                        </span>
                        <br />Introduction to User Experience Design (Coursera - Georgia Tech)
                        <br />Designing for Conversation (Amazon Alexa)
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            UIUC Coursework
                        </span>
                        <Row>
                            <Col sm>
                                <ul>
                                    <li>Introduction to Computer Systems (Fall 2021)</li>
                                    <li>Data Structures (C++)</li>
                                    <li>Software Design Studio (Java/C++)</li>
                                    <li>Freshman Honors - Semester Project Course (Python, React.js)</li>
                                </ul>
                            </Col>
                            <Col sm>
                                <ul>
                                    <li>Statistics Programming Methods (Fall 2021)</li>
                                    <li>Statistics & Probability II (Fall 2021)</li>
                                    <li>Statistics & Probability I</li>
                                    <li>Data Science Discovery (Python)</li>
                                </ul>
                            </Col>
                            <Col sm>
                                <ul>
                                    <li>Design for Social Impact (Fall 2021)</li>
                                    <li>Principles of Marketing</li>
                                </ul>
                            </Col>
                        </Row>
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            TAMS (University of North Texas) Coursework
                        </span>
                        <ul>
                            <li>Computing Foundations I - Discrete Structures</li>
                            <li>Computer Science II - Object-Oriented Programming (C++)</li>
                            <li>Computer Science I (C++)</li>
                        </ul>
                    </p>

                    <p className="paragraph">
                        <span className="font-weight-bold">
                            Languages
                        </span>
                        <br />English (Native), Mandarin (Fluent)
                    </p>
                </p>
            </Content>
        </FadeIn >
    );
}

export default ResumePage;