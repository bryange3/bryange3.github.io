import { Link } from 'react-router-dom';
import AOS from 'aos';

import React from 'react';
import Grid from '../components/Grid';
import FadeIn from 'react-fade-in';

function HomePage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="mx-6 md:mx-auto max-w-2xl">
            <div className="mt-24 md:mt-36 mb-20">
                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Hey, I'm Bryan!</p>
                <p className="text-xl text-gray-900">Software designer previously working on digital account legacy at <a href="https://apple.com" target="_blank" rel="noopener noreferrer" alt="Apple">Apple</a> and shopping Buy with Prime at <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" alt="Amazon">Amazon</a>.</p>
                <p className="text-xl text-gray-900">Currently exploring frontend technologies and occasionally catching sunrises at Grand Teton. Looking forward to baking pumpkin bread in the fall.</p>
                <div className="sm:grid sm:grid-cols-4 text-xl mt-4">
                    <div>
                        <Link to="/about">About me →</Link>
                    </div>
                    {/* <div className="col-span-3">
                        <Link to="/grand-teton">Summer in the Tetons →</Link>
                    </div> */}
                </div>
            </div>
            <Grid projects={props.projects} />
            <p className="text-xl text-gray-500 mt-16">More coming soon!</p>
        </FadeIn >
    );
}

export default HomePage;