import React from 'react';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';
import AOS from 'aos';

import context from '../../assets/project/ssw/context.png';
import platforms from '../../assets/project/ssw/platforms.png';
import problem_claimpitch from '../../assets/project/ssw/problem-claimpitch.gif';
import solution from '../../assets/project/ssw/solution.gif';

import findstories from '../../assets/project/ssw/findstories.png';
import pitchideas from '../../assets/project/ssw/pitchideas.png';
import email from '../../assets/project/ssw/email.png';
import assigncontributors from '../../assets/project/ssw/assigncontributors.png';
import reviewpitch from '../../assets/project/ssw/reviewpitch.png';

import flow from '../../assets/project/ssw/flow.png';
import shadowing from '../../assets/project/ssw/shadowing.png';
import requeststoryiterations from '../../assets/project/ssw/requeststoryiterations.png';
import individualrequests from '../../assets/project/ssw/individualrequests.png';
import reviewstories from '../../assets/project/ssw/reviewstories.png';
import storydetails from '../../assets/project/ssw/storydetails.gif';


function SSWPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <div className="mx-6 md:mx-auto max-w-2xl">
                <Hero projectTitle={props.info.projectTitle} description={props.info.description} imgSrc={props.info.imgSrc} imgAlt={props.info.imgAlt} role={props.info.role} timeline={props.info.timeline} />

                <p className="text-xl text-gray-500">Overview</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">
                    I designed a dashboard to help South Side Weekly effectively manage news stories and collaboration.
                </p>
                <p className="text-xl text-gray-900">
                    This project was conducted at <a href="https://uiuc.hack4impact.org" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Hack4Impact">Hack4Impact</a>, a student organization at UIUC that builds software for nonprofits. I collaborated with 8 students, including a product manager, a technical lead, and software developers, to build the dashboard.
                </p>

                <p className="text-xl text-gray-900 bg-gray-200 p-4">We shipped the dashboard in February 2022 to 250+ admin and contributors at South Side Weekly! After usage, the managing director even stated he believed our dashboard could be scaled for use at other newspaper nonprofits. 😎</p>


                <p className="text-xl text-gray-500 mt-16">Context</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Every published story involves collaboration between contributors and admin.</p>
                <p className="text-xl text-gray-900">
                    Contributors volunteer on stories and admin manage them and their work. They are divided into teams based on their skills such as writing, editing, photography, fact-checking, and visual art.
                </p>

                <img className="my-4" src={context} />


                <p className="text-xl text-gray-500 mt-16">Problem</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Managing stories across many platforms is challenging and inefficient for the admin and contributors at South Side Weekly.</p>
                <p className="text-xl text-gray-900">
                    Admin review contributors’ pitches and assign contributors to stories. Contributors request to work on stories, pitch new story ideas, and track their work. All of this happens across Slack, AirTable, forms, and email — leading to workflow inefficiencies for admin and contributors.
                </p>

                <img className="my-4" src={platforms} />

                <p className="text-xl text-gray-900 my-4">
                    For example, contributors view available stories in an AirTable and submit requests to work on them in a separate form. In fact, the existing process of contributors joining stories varies too: some join through Slack message and others join through email.
                </p>

                <img className="my-4" src={problem_claimpitch} />


                <p className="text-xl text-gray-500 mt-16">Solution</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">A dashboard that centralizes collaboration between contributors and admin and supports them in their goals.</p>
                <p className="text-xl text-gray-900">
                    Contributors discover and request to work on stories, pitch their own story ideas, and collaborate with others to cover stories. Admin review pitches, assign contributors to stories, and ensure issues are published on time.
                </p>
            </div>
            <img className="px-20 my-4 mx-auto" src={solution} />


            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-xl text-gray-500 mt-16">Goals</p>

                <div className="sm:grid sm:grid-cols-2 gap-x-4">
                    <div>
                        <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Contributors</p>
                        <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                            <li>
                                Work on stories that interest them
                            </li>
                            <li>
                                Grow their specific skillsets
                            </li>
                            <li>
                                Gain newspaper industry experience
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Admin</p>
                        <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                            <li>
                                Assign contributors to stories of good fit
                            </li>
                            <li>
                                Increase contributor retention
                            </li>
                            <li>
                                Maintain high readership
                            </li>
                        </ul>
                    </div>
                </div>







                <p className="text-xl text-gray-500 mt-16">Main Features</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Contributors</p>

                <p className="text-xl text-gray-900 font-medium mt-4">
                    Find stories to work on that match your interests and skills.
                </p>
                <img className="mt-2" src={findstories} />

                <p className="text-xl text-gray-900 font-medium mt-4">
                    Pitch story ideas for tens of thousands to read.
                </p>
                <img className="mt-2" src={pitchideas} />

                <p className="text-xl text-gray-900 font-medium mt-4">
                    Receive automated emails so you know if your pitch or request to work on a story has been approved.
                </p>
                <img className="mt-2" src={email} />


                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Admin</p>

                <p className="text-xl text-gray-900 font-medium mt-4">
                    Assign contributors to stories.
                </p>
                <img className="mt-2" src={assigncontributors} alt="" />

                <p className="text-xl text-gray-900 font-medium mt-4">
                    Review pitches that contributors submit.
                </p>
                <img className="mt-2" src={reviewpitch} alt="Screen admin sees when reviewing a pitch, includes pitch information, creator, ability to choose how many contributors of each team are needed" />


                <p className="text-xl text-gray-500 mt-16">Research</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Questions for Contributors</p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        What do you hope to gain from your time at South Side Weekly?
                    </li>
                    <li>
                        What is your end-to-end process from finding stories to work on to publication?
                    </li>
                </ul>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Questions for Admin</p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        How do you assign contributors to stories?
                    </li>
                    <li>
                        How do you review a contributor’s request to work on a story?
                    </li>
                    <li>
                        How do you review a pitch?
                    </li>
                </ul>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">
                    Stories come to life through a series of steps, from pitch to publication.
                </p>
            </div>

            <img className="px-4 my-4" src={flow} alt="Flowchart showing how stories go from submitted pitch to publication, includes request and approval steps and collaboration" />

            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">To understand how admin review pitches contributors submit, I sat in on their meeting.</p>
                <p className="text-xl text-gray-900">
                    Admin spent around 5 minutes reading the pitch, understanding the submitter's background by switching to the directory tab to find and open the submitter's profile and LinkedIn, and discussing.
                </p>

                <img className="my-4" src={shadowing} alt="Screenshot of Zoom call where Bryan shadows SSW admin team making approval decisions regarding submitted pitches, AirTable of pitches" />

                <p className="text-xl text-gray-500 mt-16">Insights</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Contributors are looking for an opportunity to gain real world experience and improve their skills.</p>
                <p className="text-xl text-gray-900 mb-4">
                    How can we make it easy for contributors to find stories that match their interests and skills?
                </p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Different teams handle contributor assignment differently.</p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        Some teams, such as fact-checking, have admin assign stories to contributors.
                    </li>
                    <li>
                        Other teams have contributors request stories themselves and admin approve or decline. For example, writers need to be interested in the story they're writing about to create quality articles.
                    </li>
                </ul>


                <p className="text-xl text-gray-500 mt-16">Exploration</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">After finding a story, how can a contributor get started?</p>
                <p className="text-xl text-gray-900 mb-4">
                    Here’s the story details modal that contributors see while browsing through available stories to work on. I reduced the information presented down to the essentials. Contributors easily see what a story is about, decide whether it's something interesting they'd like to work on, and choose the team(s) they'd like to contribute to.
                </p>
            </div>

            <img className="px-4 my-8" src={requeststoryiterations} alt="Iterations for modal that contributors see when viewing available stories to work on" />

            <div className="mx-6 md:mx-auto max-w-2xl">
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-14">How do admin review pitches contributors submit?</p>
                <p className="text-xl text-gray-900">
                    Shadowing admin as they reviewed pitches gave me insight into key factors for approval decisions, which I translated to the new dashboard.
                </p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5 mb-4">
                    <li>
                        Link to the pitch creator’s profile to learn more about their background
                    </li>
                    <li>
                        Link to the Google Doc for more pitch details
                    </li>
                    <li>
                        Table format is familiar to admin who previously used AirTable
                    </li>
                </ul>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">How do admin review contributors’ requests to work on stories? How do they assign contributors?</p>
                <p className="text-xl text-gray-900 font-semibold mt-4">
                    Option 1 - Individual requests
                </p>
                <p className="text-xl text-gray-900">
                    Each request to work on a story a contributor makes is shown in a list and admin work through the requests one-by-one.
                </p>
                <img className="my-2" src={individualrequests} />


                <p className="text-xl text-green-600 font-semibold mt-8">
                    Option 2 - Stories that need contributors ✅
                </p>
                <p className="text-xl text-gray-900">
                    Admin see a list of stories that still need contributors to join and can click into each story's detail page to categorically see all the writers, editors, photographers, etc. assigned. They can also make assignments here.
                </p>
                <img className="my-2" src={reviewstories} />
                <p className="text-xl text-gray-900 mt-4">
                    I moved forward with this approach because:
                </p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5 mb-4">
                    <li>
                        Admin are given the context to make informed assignment decisions (team setup, contributor background and expertise)
                    </li>
                    <li>
                        Supports <em>both</em> methods of contributor assignment — contributors requesting and admin approving, admin adding contributors to stories
                    </li>
                </ul>

                <p className="text-xl text-gray-900 font-semibold mt-10">
                    How can we help admin better understand who’s working on the story?
                </p>
                <p className="text-xl text-gray-900">
                    Grouping contributors into teams gives admin a clearer visualization of who is working on the story, which helps admin decide who else to assign.
                </p>
            </div>
            <img className="px-20 my-4 mx-auto" src={storydetails} />
            <div className="mx-6 md:mx-auto max-w-2xl">
                <p className="text-xl text-gray-900 font-semibold mt-10">
                    I disagreed with engineering's proposal to split up the view of contributors by team into separate tabs.
                </p>
                <p className="text-xl text-gray-900">
                    My tech lead explained that auto-save functionality for all fields on this screen would be too costly to implement, which is why he suggested separate tabs. His proposal means admin would lack the team overview and context they need to make assignment decisions.
                </p>
                <p className="text-xl text-gray-900 font-semibold mt-4">
                    I proposed laying out story details into 2 sections: what the story is about on the left and contributor/team assignment on the right.
                </p>
                <p className="text-xl text-gray-900">
                    From my tech lead's proposal, I realized that we did not need every property to have auto-save. We compromised with this 2-section option which maintains the context necessary for admin, while also being more feasible to implement.
                </p>
            </div>
        </FadeIn>
    );
}

export default SSWPage;