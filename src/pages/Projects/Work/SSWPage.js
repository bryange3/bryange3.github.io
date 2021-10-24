import React from 'react';

import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import problemplatforms from '../../../assets/project/h4i/problem-platform-logos.png';
import problem_claimpitch from '../../../assets/project/h4i/problem-claimpitch.gif';

import claimpitch from '../../../assets/project/h4i/claim-pitch.png';
import approvedeclinepitch from '../../../assets/project/h4i/approve-decline-pitch.png';

import pitchdocstructure from '../../../assets/project/h4i/pitch-doc-structure.png';


function SSWPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <div>
            <ProjectTitle info={props.info} width={width} />
            <Content width={width}>
                <body>
                    <div className="med-text">
                        <p className="paragraph impact-statement">
                            🚧 This case study and project is still in progress!
                        </p>

                        <Row>
                            <Col sm>
                                <b>Role</b>
                                <br />Product Designer
                            </Col>
                            <Col sm>
                                <b>Skills</b>
                                <br />User Research
                                <br />User Experience
                                <br />User Interface Design
                                <br />Visual Design
                                <br />Usability Testing
                                <br />Content Writing
                            </Col>
                            <Col sm>
                                <b>Timeline</b>
                                <br />
                                September 2021 - Present
                            </Col>
                            <Col sm>
                                <b>Team</b>
                                <br />1 Product Manager
                                <br />1 Technical Lead
                                <br />1 Product Designer
                                <br />6 Software Developers
                            </Col>
                            <Col sm>
                                <b>Tools</b>
                                <br />Figma
                                <br />FigJam
                                <br />Notion
                            </Col>
                        </Row>

                        <br />
                        <a href="https://uiuc.hack4impact.org/" target="_blank" rel="noreferrer" className="link-underline">Hack4Impact</a> is a student organization at UIUC that works with nonprofits to build software for social good. I am apart of a team that is working with <a href="https://southsideweekly.com/" target="_blank" rel="noreferrer" className="link-underline">South Side Weekly</a>, a Chicago news nonprofit, in building a web-based portal for users to manage the submission, approval, and viewing of pitches.

                        <p className="paragraph">
                            This project was taken on by Hack4Impact in the spring semester. I joined the project this fall semester and replaced the original product designer.
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Context
                            </p>

                            South Side Weekly (SSW) is a local news nonprofit based in the South Side of Chicago that supports cultural and civic engagement on the South Side, and develops emerging journalists, writers, and artists. SSW covers politics, the arts, and issues of public interest, as well as oral histories, poetry, fiction, interviews, and artwork from local photographers and illustrators.
                            <ul>
                                <li><strong>Pitch</strong>: a news story</li>
                                <li><strong>Submit a pitch</strong>: user submits a story idea and admin either approve to decline it</li>
                                <li><strong>Claim a pitch</strong>: user submits request to join (work on) an approved story</li>
                                <li><strong>Team</strong>: a category of contributor (ex. photography, editing, writing, visuals, fact-checking)</li>
                                <li><strong>Contributor</strong>: someone who volunteers to work on pitches (writers, editors, photographers, etc.)</li>
                            </ul>
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Problem
                            </p>

                            <h3 className="subsection">
                                South Side Weekly's current pitch management system is decentralized and unorganized. Users join stories, submit pitch ideas, and make approvals across multiple platforms.
                            </h3>

                            <img src={problemplatforms} alt="Problem Platforms" className="project-img-smallish center" />

                            <h3 className="subsection">
                                Currently, writers view available stories and submit requests to join them in two separate areas (AirTable table and AirTable form).
                            </h3>

                            <img src={problem_claimpitch} alt="Problem Claim Pitch" className="project-img center" />
                        </p>

                        <p className="paragraph">
                            <p className="section">
                                Solution
                            </p>

                            <h3 className="subsection">
                                A web portal that centralizes the functionality currently existing across multiple platforms. In the portal, users can claim pitches to work on them, submit their own pitch ideas. Admin and staff approve/decline new pitch ideas and pitch claim requests.
                            </h3>

                            Almost all of SSW’s contributors are volunteers, which makes it imperative to maintain high levels of contributor engagement and retention. The contributor dashboard is intended to accomplish this by enhancing the contributor experience through building a centralized system for onboarding volunteers, submitting pitches, allowing volunteers to pick-up pending assignments, and tracking contributions.
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Key Features
                            </p>

                            <h3 className="subsection">
                                Filters, search, and visual tags associated with interests and teams help contributors find pitches they want to claim.
                            </h3>

                            <img src={claimpitch} alt="Claim Pitch" className="project-img center" />

                            <h3 className="subsection">
                                When contributors claim a pitch from the pitch doc, admin can review the request and approve or decline it.
                            </h3>

                            <img src={approvedeclinepitch} alt="Claim Pitch" className="project-img center" />
                            <p className="image-caption">
                                Note that this modal is a shorter scrollable component in the actual dashboard.
                            </p>

                            <h3 className="subsection">
                                Users can go to the home page to view pitches they've submitted and pitches they've claimed.
                            </h3>

                            <h3 className="subsection">
                                They can go to the pitch doc to find pitches to claim and also browse all active pitches to see what kinds of stories are being worked on.
                            </h3>

                            <img src={pitchdocstructure} alt="Pitch Doc Structure" className="project-img center" />
                            <p className="image-caption">
                                Sections highlighted in blue are sections that I decided were important for the contributor to know.
                            </p>

                            I drew out this diagram to visualize all possible pitch categories and to determine which ones are most important to contributors. With this information, <mark>I changed the structure of the Pitch Doc tabs from the spring semester designs</mark>.

                            <br />

                            <p className="paragraph">
                                <strong>Spring Semester Structure (Before)</strong>
                                <ul>
                                    <li>
                                        "Unclaimed Pitches" (pitches that have open positions)
                                        <ul>
                                            <li>I realized that there is no reason for a photographer to see an unclaimed pitch that doesn't need a photographer. The goal is to have contributors find and join pitches that they're eligible for.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        "Approved Pitches" (all active pitches)
                                        <ul>
                                            <li>The goal of this page is to give contributors a sense of the all the different stories that are currently active and awaiting future publication. Contributors are also allowed to contact staff if they feel extremely passionate about a story that doesn't have an open position for them.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>

                            <p className="paragraph">
                                <strong>Fall Semester Structure (After)</strong>
                                <ul>
                                    <li>
                                        "Claim a Pitch" (pitches that still have open positions that match the contributor's teams)
                                        <ul>
                                            <li>I changed this tab of the pitch doc so that contributors are only seeing pitches that they specifically are eligible to claim. For example, if a pitch needs a photographer and the contributor is a photographer, they are eligible to claim the pitch.</li>
                                            <li>I also changed the copy of this tab to "Claim a Pitch" so it is clear what action the user can take here.</li>
                                        </ul>
                                    </li>

                                    <li>
                                        All Pitches (all active pitches)
                                        <ul>
                                            <li>I changed the copy of this tab to "All Pitches". The original "Approved Pitches" wording could create confusion since the user may think that it's a tab to view their approved submitted pitches.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Research
                            </p>

                            Since I joined this project in its 2nd semester, I read through the user survey and interview takeaways from the previous semester. However, I believed that more user research needed to be done to fully understand the way things currently worked at South Side Weekly.

                            <h3 className="subsection">
                                My PM and I set up a session with the client to understand what information helps admin make their pitch approval decision.
                            </h3>

                            We sat in on a meeting where admins went through an AirTable of users' submitted pitches together and made approval/declining decisions. From this session, we learned that admin tend to spend around 5 minutes per pitch doing the following:

                            <ul>
                                <li>Read the pitch title & description</li>
                                <li>Go to the directory tab to find and open the submitter's profile & LinkedIn</li>
                                <li>Discuss whether or not to approve the pitch idea</li>
                            </ul>

                            Seeing how admin were going through each pitch one by one also presented a question of whether to use cards or a table format to present the submitted pitches.

                            <h3 className="subsection">
                                We are also going to chat with a staff member and a contributor to better understand the current user flows and processes.
                            </h3>

                            In these sessions we plan to:
                            <ol>
                                <li>Learn about the user's background with South Side Weekly.</li>
                                <li>Ask the user to go through the end-to-end process from submitting or claiming a pitch to the publication of the story.</li>
                                <li>Ask the user to share screen and observe them go through the existing platforms to show the process.</li>
                                <li>Conduct usability testing by asking the user to share screen and perform tasks on my interactive Figma prototype.</li>
                            </ol>
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Iterations
                            </p>

                            <h3 className="subsection">
                                This is the FigJam document I use to explore different designs and iterate upon feedback from my PM and Hack4Impact design critiques.
                            </h3>

                            <iframe title="South Side Weekly Iterations" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2B5wNbo5IhnmMsCab1oOxM%2FResearch%252C-Ideation%252C-Exploration%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            Checkout my Figma document where I built my wireframes, components, design system, and guide for developers.
                        </p>

                        <iframe title="South Side Weekly Figma File" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMHRVK2dRznJ3mSogT57dM5%2F%255BFa21%255D-SSW-Bryan's-Designs%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                    </div>
                </body>
            </Content>
        </div>
    );
}

export default SSWPage;