import { Link } from 'react-router-dom';
import AOS from 'aos';
import React from 'react';
import FadeIn from 'react-fade-in';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import treeline from '../assets/other/tetons/treeline.png';
import mountains from '../assets/other/tetons/mountains.png';
import crazysunset from '../assets/other/tetons/crazysunset.png';


function GrandTetonPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn>
            <div className="mx-6 md:mx-auto max-w-2xl text-pretty mt-12 sm:mt-20 mb-10">
                <p className="text-xl mt-4 mb-8 text-gray-500">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-8 font-serif">Grand Teton Summer</p>

                <p className="text-xl text-gray-900">This summer solidified how much I love nature, witnessing the alpenglow on the mountains, and taking long exposure shots of the stars.</p>
            </div>

            <img
                className="lg:hidden"
                src={crazysunset}
                alt=""
            />

            <ParallaxBanner className="hidden lg:block aspect-[4/3] sm:aspect-[16/8]">
                <ParallaxBannerLayer speed={5}>
                    <img
                        src={crazysunset}
                        alt=""
                    />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={14}>
                    <img
                        className="mt-[29%]"
                        src={mountains}
                        alt=""
                    // style={{ width: '100%' }}
                    />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={20}>
                    <img
                        className="mt-[41%]"
                        src={treeline}
                        alt=""
                    // style={{ width: '100%' }}
                    />
                </ParallaxBannerLayer>
            </ParallaxBanner>

            <div className="mx-6 md:mx-auto max-w-2xl text-pretty mt-12 sm:mt-20 mb-10">
                <p className="text-xl text-gray-500">More soon!</p>
            </div>
        </FadeIn >
    );
}

export default GrandTetonPage;