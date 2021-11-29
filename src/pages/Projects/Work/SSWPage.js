import React from 'react';
import Content from '../../../components/Content.js';
import ProjectTitle from '../../../components/ProjectTitle.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import problemplatforms from '../../../assets/project/h4i/problem-platform-logos.png';
import problem_claimpitch from '../../../assets/project/h4i/problem-claimpitch.gif';
import claimpitch from '../../../assets/project/h4i/claim-pitch.png';
import approvedeclinepitch from '../../../assets/project/h4i/approve-decline-pitch.png';
import pitchdocstructure from '../../../assets/project/h4i/pitch-doc-structure.png';
import pitchtabstructure from '../../../assets/project/h4i/pitch-tab-structure.png';
import adminpitchespending from '../../../assets/project/h4i/admin-pitches-pending-approval.png';
import organization from '../../../assets/project/h4i/learnings-organization.png';

function SSWPage(props) {
    window.scrollTo(0, 0);
    const width = 10;
    return (
        <FadeIn>
            <ProjectTitle info={props.info} width={width - 3} />
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
                                <br />Product Thinking
                                <br />User Experience
                                <br />Interface Design
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
                                For example, writers view available stories and submit requests to join them in two separate areas (AirTable table and AirTable form).
                            </h3>
                        </p>
                    </div>

                    <div>
                        <img src={problem_claimpitch} alt="Problem Claim Pitch" className="project-img center" />
                    </div>

                    <div className="med-text">
                        <h3 className="subsection">
                            In fact, the current process of contributors joining pitches varies. Some join via Slack messages and others join via email.
                        </h3>

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
                        </p>
                    </div>

                    <div>
                        <img src={claimpitch} alt="Claim Pitch" className="project-img center" />
                    </div>

                    <div className="med-text">
                        <p>
                            <h3 className="subsection">
                                When contributors claim a pitch from the pitch doc, admin can review the request and approve or decline it.
                            </h3>

                            <img src={approvedeclinepitch} alt="Review Pitch" className="project-img-medium center" />

                            <p className="image-caption-center">
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

                            <img src={pitchtabstructure} alt="Pitch Doc Tab Structure" className="project-img center" />

                            <br />

                            Here's what the pitch doc tabs look like on the full contributor pitch doc.
                            <img src={claimpitch} alt="Contributor Pitch Doc" className="project-img center" />


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

                            I took insights from this session and applied to my design for the "Pitches Pending Approval" tab of the admin pitch doc. This section showcases pitches contributors have submitted and admin are able to approve or decline them from here.

                            <img src={adminpitchespending} alt="Admin Pitches Pending Approval" className="project-img center" />
                        </p>

                        <hr class="rounded" />

                        <p className="paragraph">
                            <p className="section">
                                Iterations
                            </p>

                            <h3 className="subsection">
                                This is the FigJam document I use to explore different designs and iterate upon feedback from my PM and Hack4Impact design critiques.
                            </h3>

                            <iframe title="South Side Weekly Iterations" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2B5wNbo5IhnmMsCab1oOxM%2FResearch%252C-Ideation%252C-Exploration%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                        </p>

                        <hr className="rounded" />

                        {/* <p className="paragraph">
                            <p className="section">
                                Next Steps
                            </p>

                            <h3 className="subsection">
                                If we continued this project, we would conduct usability testing and user interviews with elderly home patients.
                            </h3>

                            Our next steps for Nour involve <mark>testing our app on patients of elderly homes</mark>. I plan on conducting <mark>usability tests to learn how our target audience navigates the app</mark>. I will also work with the home care facilities to conduct <mark>user interviews to learn more about our users' pain points with the app</mark> and any wants that are not being fulfilled by Nour.

                            <p className="paragraph">
                                We also hope to create a <mark>backend system that allows workers at different care centers to communicate and set up timely events</mark> (games, shows, etc.). Implementing games such as Bingo or Trivia within the app and expanding to an iPad app is also something we hope to reach in the future. With all these feature updates, accessibility will be our largest priority. Designing entertainment features that are easy to understand and navigate is the largest but most necessary challenge.
                            </p>
                        </p> */}

                        <p className="paragraph">
                            <p className="section">
                                Learnings
                            </p>

                            <h3 className="subsection">
                                Communication is key in a large cross-functional team.
                            </h3>

                            I learned how to hand off designs to developers. This involved adding notes and wireframes that take into account different states and edge cases as well as highlighting which flows and features are complete and ready for implementation versus ones that are still in progress. I also learned how to communicate my designs and decisions to my product manager, clients, and other designers during design critiques.

                            <h3 className="subsection">
                                I learned how to keep all my tasks, thoughts, research, and feedback organized in Notion and Figma.
                            </h3>
                        </p>
                    </div>

                    <img src={organization} alt="Figma and Notion Organization" className="project-img center" />

                    <div className="med-text">
                        <hr class="rounded" />

                        <p className="paragraph">
                            Checkout my Figma document where I built my wireframes, components, design system, and guide for developers.
                        </p>

                        <iframe title="South Side Weekly Figma File" className="full-width" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMHRVK2dRznJ3mSogT57dM5%2F%255BFa21%255D-SSW-Bryan's-Designs%3Fnode-id%3D598%253A45494" allowfullscreen></iframe>
                    </div>
                </body>
            </Content>
        </FadeIn >
    );
}

export default SSWPage;