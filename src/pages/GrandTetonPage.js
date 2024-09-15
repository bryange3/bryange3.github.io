import { Link } from 'react-router-dom';

import React from 'react';
import FadeIn from 'react-fade-in';

function GrandTetonPage(props) {
    return (
        <FadeIn className="mx-6 md:mx-auto max-w-2xl">
            <div className="mt-12 sm:mt-20 mb-20">
                <p className="text-xl mt-4 mb-8 text-gray-500">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Grand Teton Summer</p>

                <p className="text-xl text-gray-900">This summer solidified how much I love nature, witnessing the alpenglow on the mountains, and taking long exposure shots of the stars.</p>

                <p className="text-xl text-gray-500 mt-16">More soon.</p>
            </div>
        </FadeIn >
    );
}

export default GrandTetonPage;