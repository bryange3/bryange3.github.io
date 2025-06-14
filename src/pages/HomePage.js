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
            <div className="mt-24 md:mt-36 mb-16 text-pretty">
                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Hey, I'm Bryan!</p>
                <p className="text-lg text-gray-900">
                    Software designer at <a href="https://amplify.com/" target="_blank" rel="noopener noreferrer" alt="Amplify Education">Amplify Education</a>, empowering K-12 teachers and students. Previously at <a href="https://apple.com" target="_blank" rel="noopener noreferrer" alt="Apple">Apple</a> and <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" alt="Amazon">Amazon</a>.
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-x-8 text-lg mt-4">
                    <div>
                        <Link to="/about">About me →</Link>
                    </div>
                    <div>
                        <Link to="/experiments">Experiments →</Link>
                    </div>
                </div>
            </div>

            <Grid projects={props.projects} />
        </FadeIn >
    );
}

export default HomePage;