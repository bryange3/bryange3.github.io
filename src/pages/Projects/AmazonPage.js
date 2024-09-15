import { Link } from 'react-router-dom';

import React from 'react';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';

function AmazonPage(props) {
    return (
        <FadeIn className="mx-6 md:mx-auto max-w-2xl">
            <Hero className="hero" projectTitle={props.info.projectTitle} description={props.info.description} width={props.width} />
            <div className="mt-24 md:mt-36 mb-20">
                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Hey, I'm Bryan!</p>
                <p className="text-xl text-gray-900">Software designer previously working on digital account legacy at <a href="https://apple.com" target="_blank" rel="noopener noreferrer" alt="Apple">Apple</a> and shopping Buy with Prime at <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" alt="Amazon">Amazon</a>.</p>
                <p className="text-xl text-gray-900">Currently exploring frontend technologies and occasionally catching sunrises at Grand Teton. Looking forward to baking pumpkin bread in the fall.</p>
                <p className="text-xl mt-4">
                    <Link to="/about">About me →</Link>
                </p>
            </div>
        </FadeIn >
    );
}

export default AmazonPage;