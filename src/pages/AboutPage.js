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
                <p className="text-lg mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">About Me</p>
                
                <img
                    class="mt-12 rounded-md"
                    src={about}
                    alt="Bryan smiling with the Tetons and String Lake behind him"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I'm Bryan Ge, he/him.</p>
                <p className="text-lg text-gray-900">
                    I am a designer who loves solving problems through systems thinking, visual craft, storytelling, and collaboration. Currently based in Seattle, WA.
                </p>

                <p className="text-lg text-gray-900">
                Recently at Amplify Education, I built activity assignment enhancements and account migration notifications. Previously, I've led and shipped projects at companies such as Apple, Amazon, and Cargill.
                </p>

                <p className="text-lg text-gray-900">
                    Please <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer">email me</a> for my resume.
                </p>

                {/* View my resume <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">here</a>. */}

                <p className="text-lg text-gray-900 bg-gray-200 p-4 my-4 rounded-md">Shoutout to my design moms and biggest supporters — Carmen, Marcel, Takara, Kim, Sana, Lianna! I'm extremely appreciative of their mentorship and support.</p>

                <img
                    class="mt-16 mb-12 rounded-md"
                    src={schwabacher}
                    alt="Schwabacher Landing sunrise at Grand Teton National Park"
                />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Last summer, I completed a side quest and spent my summer at Grand Teton National Park.</p>
                <p className="text-lg text-gray-900">
                    It was a personal dream come true getting to live on a mountain, hike to alpine lakes, and witness unreal sunrises and sunsets.
                </p>
                <Link className="text-lg mt-4" to="/grand-teton">Check out some pics →</Link>
            </div>
        </FadeIn >
    );

    // View photos and more <Link to="/grand-teton">here</Link>.
}

export default AboutPage;