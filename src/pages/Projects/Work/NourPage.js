import React from 'react';

import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

import accessibilityiterations from '../../../assets/project/nour/AccessibilityIterations.png';
import accessibilitypreferences from '../../../assets/project/nour/AccessibilityPreferences.png';
import loginiterations from '../../../assets/project/nour/LoginIterations.png';
import onboarding from '../../../assets/project/nour/Onboarding.png';
import roomdiscovery from '../../../assets/project/nour/RoomDiscovery.png';
import roomdiscoveryvariations from '../../../assets/project/nour/RoomDiscoveryVariations.png';
import stats from '../../../assets/project/nour/stats.png';
import team from '../../../assets/project/nour/team.png';
import searchmethods from '../../../assets/project/nour/SearchMethods.png';


function NourPage(props) {
    window.scrollTo(0, 0);
    const width = 6;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <p>
                        <b>Role</b>: {props.info.roles}
                        <br />
                        <b>Timeline</b>: {props.info.timeline}
                        <br />
                        <b>Team Members</b>: {props.info.teamMembers}
                        <br />
                        <b>Design Tools</b>: Figma
                        <br />
                        <br />
                        Our project received the following prizes for the 2021 HackDuke Ideate Designathon:
                        <ul>
                            <li>
                                1st Place for Huawei Innovation Awards
                            </li>
                            <li>
                                1st Place for Caring House Challenge
                            </li>
                        </ul>
                    </p>

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Challenge
                        </p>

                        <h3 className="subsection">
                            Create your own design solution to aid the Caring House mission of providing comfortable, supportive, and affordable housing to Duke Cancer Institute adult outpatients and their caregivers.
                        </h3>
                        Your problem space can be anything related to Caring House or similar fields like cancer patients, medical support communities, etc.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Identified Problem
                        </p>

                        <h3 className="subsection">
                            Patients in elder homes feel isolated and socially out of touch.
                        </h3>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Solution
                        </p>

                        <h3 className="subsection">
                            Nour is a mobile video call platform that brings the elderly together based on their interests.
                        </h3>
                    </p>

                    <hr class="rounded" />

                    <p className="section">
                        Key Features
                    </p>

                    <p className="paragraph impact-statement">
                        👉 Designing all the visual elements to be as accessible as possible was our top priority. I chose to use large text, contrasting colors, and labels that our target audience would be able to easily understand. I also brought this approach to the various user experiences throughout the app as detailed below.
                    </p>

                    <p className="paragraph">
                        <h3 className="subsection">
                            Simple and Efficient Onboarding
                        </h3>

                        Typical login processes involve:
                        <ul>
                            <li>
                                Memorizing login information
                            </li>
                            <li>
                                Typing out email + password
                            </li>

                        </ul>
                        I chose to use a profile code scanning system. <mark>Our users will not need to remember their login details and will only need to point their smartphone camera at their profile code</mark> provided by their caregivers.

                        <img src={onboarding} alt="Simple and Efficient Onboarding" className="project-img" />
                    </p>

                    <p className="paragraph">
                        <h3 className="subsection">
                            Accessibility Preferences
                        </h3>

                        When designing our "Clubhouse for Elders", <mark>we focused on accessibility and understandability</mark>. Since our target audience is seniors and our goal is to connect those within various medical support communities, making Nour easy-to-use and intuitive was our largest challenge. I chose to design <mark>accessibility preferences for those with visual and hearing difficulties</mark>, making our platform more inclusive than other competitors.

                        <img src={accessibilitypreferences} alt="Accessibility Preferences" className="project-img" />
                    </p>

                    <p className="paragraph">
                        <h3 className="subsection">
                            Video / Voice Call Room Discovery
                        </h3>

                        Users can discover and preview rooms one at a time. While browsing the various rooms, the <mark>audio from inside the room is played aloud so users can decide whether or not they want to hop in and join the conversation</mark>.

                        <img src={roomdiscovery} alt="Call Room Discovery" className="project-img-smaller center" />
                    </p>

                    <p className="paragraph">
                        <h3 className="subsection">
                            Type & Voice Search Methods
                        </h3>

                        I also decided to implement voice search alongside the traditional type search method for those who may find it easier to speak what type of video call room they would like to join.

                        <img src={searchmethods} alt="Search Methods" className="project-img-small center" />
                    </p>

                    <hr class="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Research
                        </p>

                        <h3 className="subsection">
                            I called local home care facilities and read online sources when defining our problem space.
                        </h3>

                        <img src={stats} alt="Research Statistics" className="project-img-medium center" />

                        Based on our research, we decided to <mark>tackle the lack of social interaction that many home care patients face</mark>. Ideating a solution for this problem was challenging and took lots of brainstorming. We had seen the rise of Clubhouse and have personally used and enjoyed using the platform to meet others, so we decided to make a version for elders that specifically focused on accessibility.
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            Iteration
                        </p>

                        <h3 className="subsection">
                            After our first iteration of wireframes, I Zoom called my parents, shared my screen, and gave them remote control to walk through our prototype.
                        </h3>

                        Since we only had 24 hours for this challenge, <mark>my parents served as the closest in age group and generation to our target audience</mark>. I let my parents click away at our prototype and discovered certain areas of confusion. From this, I iterated and produced more understandable screens:

                        <h3 className="subsubsection">
                            1. Improved communication of profile code scan
                        </h3>

                        My dad mentioned his confusion with what to do at the "login / profile code scanning" screen. I realized that I needed to make a <mark>clear indicator of the profile code being scanned</mark>.

                        <img src={loginiterations} alt="Login Iterations" className="project-img" />

                        <h3 className="subsubsection">
                            2. Clarity of accessibility preferences
                        </h3>

                        Devan and I compared the two variants of the accessibility preferences progression and chose the accessibility preferences progression on the right of the image below. Although more screens causes a longer progression and setup process, it provides <mark>more clarity on what the preferences (VoiceOver and closed captioning) mean</mark>. By separating the preferences into multiple screens, there is <mark>much less clutter on the interface</mark>, leading to <mark>easier comprehension of the visual components</mark>.

                        <img src={accessibilityiterations} alt="Accessibility Preference Iterations" className="project-img" />

                        <h3 className="subsubsection">
                            3. Less overwhelming room discovery
                        </h3>

                        I chose to have our users <mark>browse through rooms one at a time so that the interface would be less overwhelming</mark> to view and navigate. By giving a user one room to preview at a time, they would also be able to <mark>listen in on what discussions are taking place before deciding to enter the room</mark> or not.

                        <p className="paragraph">
                            By having the <mark>"next" and "previous" room buttons below the room card, they can be easier labeled and tapped</mark>. The larger and clearly labeled buttons underneath the room card also <mark>allow the room card to display more text if the room topic text is longer</mark>.
                        </p>

                        <img src={roomdiscoveryvariations} alt="Room Discovery Variations" className="project-img" />
                    </p>

                    <hr className="rounded" />

                    <p className="paragraph">
                        <p className="section">
                            Next Steps
                        </p>

                        Our next steps for Nour involve <mark>testing our app on patients of elderly homes</mark>. I plan on conducting <mark>usability tests to learn how our target audience navigates the app</mark>. I will also work with the home care facilities to conduct <mark>user interviews to learn more about our users' pain points with the app</mark> and any wants that are not being fulfilled by Nour.

                        <p className="paragraph">
                            We also hope to create a <mark>backend system that allows workers at different care centers to communicate and set up timely events</mark> (games, shows, etc.). Implementing games such as Bingo or Trivia within the app and expanding to an iPad app is also something we hope to reach in the future. With all these feature updates, accessibility will be our largest priority. Designing entertainment features that are easy to understand and navigate is the largest but most necessary challenge.
                        </p>
                    </p>

                    <p className="paragraph">
                        <p className="section">
                            What I Learned
                        </p>

                        <h3 className="subsection">
                            Accessible design is challenging but necessary.
                        </h3>

                        This was the first time that I was given a design prompt where I knew almost nothing about the target audience. Building an app for people who are naturally unfamiliar with technology proved difficult. However, through online research and Medium articles, I gained some knowledge on accessible design.

                        <p className="paragraph">
                            I certainly have a lot more to learn regarding designing for all and designing inclusively, but I'm glad that this designathon gave me an introduction to it. Thank you to all the mentors who provided me with their input during the ideation process and to my team for being amazing!
                        </p>
                    </p>

                    <img src={team} alt="Team" className="project-img" />

                    <br />

                    <p className="paragraph">
                        Check out our <a href="https://www.figma.com/file/o2siBMfCFww1ksk5Xz7ZE5/HackDuke-Ideate-2021-Nour?node-id=0%3A1" target="_blank" rel="noreferrer" className="link-underline">Figma document</a> and play around with the prototype below!
                    </p>

                    <iframe stitle="IOT Playground Prototype" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fo2siBMfCFww1ksk5Xz7ZE5%2FHackDuke-Ideate-2021-Nour%3Fnode-id%3D1%253A3%26viewport%3D258%252C261%252C0.10952381789684296%26scaling%3Dscale-down%26page-id%3D0%253A1" allowfullscreen></iframe>
                </body>
            </Content>
        </div>
    );
}

export default NourPage;