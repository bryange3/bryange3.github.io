import React from 'react';
import AOS from 'aos';
import aboutpic from '../assets/aboutprofpic.jpg';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import FadeIn from 'react-fade-in';

function AboutPage(props) {
    AOS.init();
    const width = 8;
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <Hero title={props.title} width={width - 2} />
            <Container fluid={true} class="full-width">
                <div class="content">
                    <div class="left" data-aos="fade-right">
                        <img
                            class="profile-image"
                            alt="Profile"
                            src={aboutpic}
                        />
                    </div>
                    <div class="right">
                        <p className="about-subtitle">
                            Hi there! I'm Bryan Ge and my pronouns are he/him.
                        </p>

                        <p>
                            I’m a rising sophomore at the University of Illinois at Urbana-Champaign majoring in CS + Statistics and minoring in Business and Informatics.
                        </p>

                        <p className="about-subtitle">
                            What am I up to right now?
                        </p>

                        <p>
                            Currently, I am a UX/UI Design Intern at Cargill working on an internal dashboard tool to hold culinary innovation ideas. I'm also a Product Designer at Connect Tutors (via Develop For Good) working on improving the tutor and student registration experience.
                        </p>

                        <p className="about-subtitle">
                            Outside of work, I enjoy...
                        </p>

                        <p>
                            🎞️ watching thrillers with friends
                            <br />💄 getting glam and going on photoshoots
                            <br />👨‍🍳 baking blueberry crumble and cranberry brie tarts
                            <br />🐶 spending time with my sister and her corgi (Denzel Corgiton)
                        </p>

                        <p>
                            I'm always down to chat! Email me at <a className="link-underline" href="mailto:bryange3@gmail.com">bryange3@gmail.com</a> and connect with me on <a className="link-underline" href="https://linkedin.com/in/bryange">LinkedIn</a>.
                        </p>
                    </div>
                </div>
                <Content width={width - 2}>
                    <hr class="rounded" />
                    <p className="about-subtitle">
                        Shoutout to my friends, mentors, and design moms!
                    </p>
                    <p>
                        I've received a ton of support from my friends and members of the design community. Their guidance and mentorship has been incredibly impactful and I am beyond appreciative of them. Thank you. 🥰
                        <p className="paragraph">
                            <ul>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/takarasatone/">Takara Satone</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.amandahe.com/">Amanda He</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://athenatang.com/">Athena Tang</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://riyajain.me/">Riya Jain</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://katesliang.com/">Kate Liang</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://conniexu.com/">Connie Xu</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rachelyqian/">Rachel Qian</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ayushis3/">Ayushi Singh</a></li>
                                <li><a className="link-underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meichen-ge-9a980441/">Meichen Ge</a> (best sister!)</li>
                            </ul>
                        </p>
                    </p>
                </Content>
            </Container>
        </FadeIn>
    );
}

export default AboutPage;