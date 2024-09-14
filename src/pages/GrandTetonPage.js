import { Link } from 'react-router-dom';

import React from 'react';
import FadeIn from 'react-fade-in';

function GrandTetonPage(props) {
    window.scrollTo(0, 0);
    return (
        <FadeIn className="max-w-2xl mx-auto">
            <div className="mt-20 mb-20">
                <p className="text-xl mt-4 mb-8 text-gray-500">
                    <Link to="/">← Back home</Link> &nbsp;/&nbsp; <Link to="/about">about me</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Grand Teton Summer</p>

                <p className="text-xl text-gray-900">This summer solidified how much I love nature, witnessing the alpenglow on the mountains, and taking long exposure shots of the stars. Crazy how you can do that on a phone now!</p>
            </div>
        </FadeIn >
    );
}

export default GrandTetonPage;