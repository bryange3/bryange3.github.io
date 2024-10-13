import React from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import ExperimentCard from '../components/ExperimentCard.js';

import ringeranimation from '../assets/other/experiments/swiftui/ringeranimation.mp4';
import accelerometercard from '../assets/other/experiments/swiftui/accelerometercard.mp4';
import timezonemsg from '../assets/other/experiments/figma/timezonemsg.png';

function ExperimentsPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="mx-6 md:mx-auto max-w-2xl">
            <div className="mt-12 sm:mt-20 mb-20">
                <p className="text-xl mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 font-serif mb-4">Experiments</p>
                <p className="text-xl text-gray-900 mb-14">Interactions, ideas, and fleeting thoughts.</p>

                <div className="sm:grid sm:grid-cols-2 gap-x-10">
                    <FadeIn delay={300}>
                        <ExperimentCard title={"iPhone Dynamic Island ringer animation"} type={'video'} src={ringeranimation} alt="Dynamic island animating between ring and silent on click" tools={['SwiftUI']} />

                        <ExperimentCard title={"Do you really want to \"Notify Anyway\"? They could be sleeping."} type={'image'} src={timezonemsg} alt="iPhone" tools={['Figma']} description={"When texting someone who shares their location with you, you'll also see the local time when they have \"Do Not Disturb\" on."} />
                    </FadeIn>
                    <FadeIn delay={300}>
                        <ExperimentCard title={"Interactive card using iPhone accelerometer"} type={'video'} src={accelerometercard} alt="Card and its shadow dynamically rotating based on iPhone accelerometer" tools={['SwiftUI']} description={"As you move your phone, the card and shadow dynamically rotate. This is a remix of @philipcdavis's fidget card tutorial."} />
                    </FadeIn>
                </div>
            </div>
        </FadeIn >
    );
}

export default ExperimentsPage;