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
                    class="mt-12"
                    src={about}
                    alt="Bryan smiling with the Tetons and String Lake behind him"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I'm Bryan Ge, he/him.</p>
                <p className="text-xl text-gray-900">
                    I am a designer who loves solving meaningful and complex problems involving deep systems thinking, visual craft, and storytelling. I've led and shipped projects at large tech companies including Apple and Amazon, small startups, and nonprofits.
                </p>
                <p className="text-xl text-gray-900 mb-4">
                    At <a href="https://uiuc.hack4impact.org" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Hack4Impact">Hack4Impact UIUC</a>, I led initiatives to improve design culture through team-pair design critique, industry designer feedback, online resources, and recruitment. Check out my <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">resume</a>.
                </p>

                <p className="text-xl text-gray-900 bg-gray-200 p-4">Shoutout to my design moms and biggest supporters — Carmen, Takara, Kim, Sana! Their mentorship has been incredibly impactful and I’m extremely appreciative.</p>



                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Currently, I am exploring prototyping and realizing my ideas through code.</p>
                <p className="text-xl text-gray-900">
                    I'm creating components in React and discovering the ease in building visually compelling layouts with Tailwind CSS (for this website). Also curious about interaction patterns and logic-based design prototyping tools.
                </p>

                <img
                    class="mt-16 mb-12"
                    src={schwabacher}
                    alt="Schwabacher Landing sunrise at Grand Teton National Park"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I'm also on a side quest, spending my summer at Grand Teton National Park.</p>
                <p className="text-xl text-gray-900">
                    It's been a personal dream come true getting to live on a mountain, go on hikes to alpine lakes, and witness unreal sunrises and sunsets.
                </p>
                <Link className="text-xl mt-4" to="/grand-teton">Check out my favorite memories →</Link>
            </div>
        </FadeIn >
    );

    // View photos and more <Link to="/grand-teton">here</Link>.
}

export default AboutPage;