import React from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import about from '../assets/other/about.jpeg';
import schwabacher from '../assets/other/schwabacher.jpeg';

function AboutPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="mx-6 md:mx-auto max-w-2xl">
            <div className="mt-12 sm:mt-20 mb-20 text-pretty">
                <p className="text-xl mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">About Me</p>
                <img
                    class="mt-12 rounded-md"
                    src={about}
                    alt="Bryan smiling with the Tetons and String Lake behind him"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I'm Bryan Ge, he/him.</p>
                <p className="text-xl text-gray-900">
                    I am a designer who loves solving meaningful and complex problems involving deep systems thinking, visual craft, and storytelling. I've led and shipped projects at large tech companies, small startups, and nonprofits. Currently, I'm exploring prototyping and realizing my ideas through code.
                </p>

                <div className="mt-16 text-xl text-gray-900 text-pretty bg-gray-200 p-8 rounded-md">
                    <p className="text-2xl font-semibold font-serif mb-2">Work</p>
                    <hr className="rounded my-3 border-gray-300"></hr>
                    <div className="text-lg grid grid-rows-2 gap-y-2">
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://www.nice-handwriting.com/" target="_blank" rel="noopener noreferrer">Nice Handwriting</a></div>
                            <div className="text-gray-600 text-right">2024</div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a></div>
                            <div className="text-gray-600 text-right">2023</div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://apple.com" target="_blank" rel="noopener noreferrer">Apple</a></div>
                            <div className="text-gray-600 text-right">2022</div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://cargill.com" target="_blank" rel="noopener noreferrer">Cargill</a></div>
                            <div className="text-gray-600 text-right">2022</div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://www.statefarm.com/" target="_blank" rel="noopener noreferrer">State Farm</a></div>
                            <div className="text-gray-600 text-right">2021</div>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <div><a href="https://cargill.com" target="_blank" rel="noopener noreferrer">Cargill</a></div>
                            <div className="text-gray-600 text-right">2021</div>
                        </div>
                    </div>

                    <p className="text-2xl font-semibold font-serif mt-12 mb-2">Projects</p>
                    <hr className="rounded my-3 border-gray-300"></hr>
                    <div className="text-lg grid grid-rows-2 gap-y-2">
                        <div className="grid grid-cols-2">
                            <div><a href="https://notionuiuc.com/" target="_blank" rel="noopener noreferrer">Notion</a></div>
                            <div className="text-gray-600 text-right">2022-2023</div>
                        </div>
                        <div className="grid grid-cols-2  ">
                            <div><a href="https://uiuc.hack4impact.org/" target="_blank" rel="noopener noreferrer">Hack4Impact</a></div>
                            <div className="text-gray-600 text-right">2021-2022</div>
                        </div>
                        <div className="grid grid-cols-2  ">
                            <div><a href="https://www.developforgood.org/" target="_blank" rel="noopener noreferrer">Develop For Good</a></div>
                            <div className="text-gray-600 text-right">2021</div>
                        </div>
                        <div className="grid grid-cols-2  ">
                            <div><a href="https://trill-project.webflow.io/" target="_blank" rel="noopener noreferrer">Trill Project</a></div>
                            <div className="text-gray-600 text-right">2021</div>
                        </div>
                    </div>

                    <div className="text-lg mt-8">
                        View my resume <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">here</a>.
                    </div>
                </div>

                {/* <p className="text-xl text-gray-900 bg-gray-200 p-4 my-4 rounded-md">Shoutout to my design moms and biggest supporters — Carmen, Takara, Kim, Sana! Their mentorship has been incredibly impactful and I’m extremely appreciative.</p>

                <img
                    class="mt-16 mb-12 rounded-md"
                    src={schwabacher}
                    alt="Schwabacher Landing sunrise at Grand Teton National Park"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I'm also on a side quest, spending my summer at Grand Teton National Park.</p>
                <p className="text-xl text-gray-900">
                    It's been a personal dream come true getting to live on a mountain, go on hikes to alpine lakes, and witness unreal sunrises and sunsets.
                </p>
                <Link className="text-xl mt-4" to="/grand-teton">Check out my favorite memories →</Link> */}
            </div>
        </FadeIn >
    );

    // View photos and more <Link to="/grand-teton">here</Link>.
}

export default AboutPage;