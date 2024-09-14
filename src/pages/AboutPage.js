import React from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import about from '../assets/other/about.jpeg';
import pizza from '../assets/other/pizza.gif';
import skincare from '../assets/other/skincare.png';
import denzel from '../assets/other/denzel.jpg';
import applepie from '../assets/other/applepie.png';
import connie from '../assets/other/connie.png';

function AboutPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="max-w-2xl mx-auto">
            <div className="mt-20 mb-20">
                <p className="text-xl mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">About Me</p>
                <img
                    class="mb-4"
                    src={about}
                    alt="Bryan smiling with the Tetons and String Lake behind him"
                />

                <p className="text-xl text-gray-900">I'm Bryan Ge (he/him), a designer who loves solving complex problems involving deep systems thinking, visual craft, and storytelling. I've led and shipped projects at large tech companies including Apple and Amazon, small startups and businesses, and nonprofits. Check out my <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">resume ↗</a>.</p>
                <p className="text-xl text-gray-900">Currently, I'm playing around with frontend (ReactJS and Tailwind CSS for this site) and embarking on a <Link to="/about/grandteton">side quest at Grand Teton National Park →</Link>.</p>

                <br/>

                <p className="text-xl text-gray-900 bg-gray-200 p-4">Shoutout to my design moms and biggest supporters — Carmen, Takara, Kim, Sana! Their mentorship has been incredibly impactful and I’m extremely appreciative.</p>
            </div>
        </FadeIn >
    );
}

export default AboutPage;