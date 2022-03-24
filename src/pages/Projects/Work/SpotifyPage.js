import React from 'react';
import Content from '../../../components/Content.js';
import Hero from '../../../components/Hero.js';
import FadeIn from 'react-fade-in';

import ctw from '../../../assets/project/spotify/ctw.png';
import ssw from '../../../assets/project/spotify/ssw.jpg';
import experiences from '../../../assets/project/spotify/experiences-playlist.gif';
import topskills from '../../../assets/project/spotify/top-skills-wrapped.png';
import values from '../../../assets/project/spotify/values.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SpotifyPage(props) {
    window.scrollTo(0, 0);
    const width = 7;
    return (
        <FadeIn>
            <img src={props.info.cover} alt={props.info.title} className="cover-image center" />
            <Row className="project-info" width={width} style={{ paddingBottom: "0em", marginBottom: "1em" }}>
                <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />
            </Row>

            <Content width={width}>
                <body>
                    <p className="impact-statement">
                        👉 Update: I've accepted an offer from Apple to be a Product Design Intern for this upcoming summer. However, if Spotify offers off-season product design internships I would love to apply and be considered. Thank you!
                    </p>

                    <p className="paragraph">
                        <p className="spotify-section my-blue">
                            😇 As a brief introduction...
                        </p>

                        <hr class="rounded-close" />

                        I'm Bryan Ge:
                        <br />
                        <ul>
                            <li>sophomore studying at the University of Illinois at Urbana-Champaign</li>
                            <li>graduating May 2023</li>
                            <li>majoring in Information Sciences (concentrating in HCI & UX)</li>
                            <li>minoring in Computer Science</li>
                            <li>based in Dallas, TX & Champaign, IL</li>
                        </ul>
                    </p>

                    I've known I wanted to work in the tech space ever since elementary school. I would craft mini laptops by drawing the keyboard and screen on folded cardstock and pretend I had the latest iPhone using the packaging of my parents' iPhones.

                    <img src={ctw} alt="Catch the woahs" className="project-img" />

                    For 11th and 12th grade of high school, I decided to attend the Texas Academy of Math and Science at the University of North Texas (early college dual credit high school program) to pursue computer science and ultimately a career in technology. After high school, I began my college studies at the University of Illinois at Urbana-Champaign as a Statistics & Computer Science major.

                    <img src={ssw} alt="SSW" className="project-img-small center" />

                    At the start of college, I learned about the world of product and the various roles within product teams. I started experimenting with UI design and joined a design project through a student organization called Design Innovation. Since then, I've fell in love with the UX and product design field. I've pursued pursued student organization projects, designathons, hackathons, and internships to continue to gain experience in the field and grow in my skills.

                    <p className="paragraph">
                        I decided to transfer into Information Sciences because it better aligns with my career goals and what I want from my college education. With that being said, having years of computer science education and experiences has proved incredibly beneficial for interfacing with developers and understanding technical constraints when designing.
                    </p>

                    <p className="paragraph">
                        <p className="spotify-section my-blue">
                            📎 Moving on to my experiences and skills!
                        </p>

                        <hr class="rounded-close" />

                        <Row>
                            <Col><img src={experiences} alt="Experiences Playlist" className="project-img" /></Col>
                            <Col><img src={topskills} alt="Top Skills Wrapped" className="project-img" /></Col>
                        </Row>
                    </p>

                    <p className="paragraph">
                        <p className="spotify-section my-blue">
                            🎺 Why Spotify?
                        </p>

                        <hr class="rounded-close" />

                        <p className="spotify-subsection">
                            1. Success for a Spotify intern is measured by their growth
                        </p>
                        <p className="paragraph">
                            I appreciate Spotify's emphasis on success being measured in a human way: how much an intern has grown. I also believe it is important to focus on learning and seeking different ways to grow.
                        </p>

                        <p className="spotify-subsection">
                            2. There's a clear culture of community at Spotify where you can be friends with the people on your team
                        </p>
                        <p className="paragraph">
                            From my past experiences, designathons, hackathons, and group projects, I've seen the positive impact that fostering a tight-knit culture and creating strong friendships with the people you work with can have. Work no longer feels like work and finishing the project is both rewarding and fun.
                        </p>

                        <p className="spotify-subsection">
                            3. Interns are free to reach out to others to chat or ask questions
                        </p>
                        <p className="paragraph">
                            Being able to learn and grow from designers who've been in industry and have an abundance of experience and knowledge to share under their belt is something I strongly value. Currently as a student, I've sought to learn and grow my skills by seeking feedback from industry professionals on my work and presentation of my work.
                        </p>

                        <p className="spotify-subsection">
                            💯 How I reflect Spotify's core values...
                        </p>

                        <img src={values} alt="Values" className="project-img" />
                    </p>


                    Check out my work at <a className="link-underline" href="https://bryange.com">bryange.com</a>!
                </body>
            </Content>
        </FadeIn>
    );
}

export default SpotifyPage;