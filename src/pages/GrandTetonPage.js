import { Link } from 'react-router-dom';
import AOS from 'aos';
import React from 'react';
import FadeIn from 'react-fade-in';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import treeline from '../assets/other/tetons/treeline.png';
import mountains from '../assets/other/tetons/mountains.png';
import crazysunset from '../assets/other/tetons/crazysunset.png';
import brecciacliff from '../assets/other/tetons/brecciacliff.mp4';
import brecciasunset from '../assets/other/tetons/brecciasunset.mp4';
import deltalake from '../assets/other/tetons/deltalake.png';

function GrandTetonPage(props) {
    AOS.init();
    window.scrollTo(0, 0);

    return (
        <FadeIn>
            <div className="mx-6 md:mx-auto max-w-2xl text-pretty mt-12 sm:mt-20">
                <p className="text-xl mt-4 mb-8 text-gray-500">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-4 font-serif">Grand Teton Summer</p>
                <p className="text-xl text-gray-900">
                    My summer in the Bay Area in 2022 made me realize how much I love nature, especially since I grew up in Dallas, TX.
                </p>
                <p className="text-xl text-gray-900">
                    I spent this summer in Grand Teton National Park and it's been everything! I got to hike to alpine lakes, witness the alpenglow on the mountains at sunrise, and even see the northern lights briefly when the moon was covered by clouds. Here are some of my favorite moments:
                </p>
            </div>


            <div className="mx-6 md:mx-auto max-w-2xl mt-16">
                <p className="text-xl text-gray-500 mt-16">7.3.2024</p>
                <div className="flex flex-col sm:flex-row sm:gap-x-6 text-xl mt-8">
                    <p className="text-3xl font-semibold text-gray-900 font-serif flex flex-col justify-end leading-none">
                        Togwotee Overlook
                    </p>

                    <p className="flex flex-col justify-end">
                        <a className="text-xl font-sans font-normal" href="https://maps.app.goo.gl/7qat7LMxLCTR5a6u8" target="_blank" rel="noopener noreferrer" alt="Togwotee Overlook location and Google Maps information">
                            Google Maps ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This was one of the most amazing sunsets I've ever seen. The ones after storms are always insanely beautiful!
                </p>
            </div>

            <img
                className="lg:hidden my-8"
                src={crazysunset}
                alt=""
            />

            <ParallaxBanner className="hidden lg:block aspect-[4/3] sm:aspect-[16/8] my-8">
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
                    />
                </ParallaxBannerLayer>
                <ParallaxBannerLayer speed={20}>
                    <img
                        className="mt-[41%]"
                        src={treeline}
                        alt=""
                    />
                </ParallaxBannerLayer>
            </ParallaxBanner>

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24">
                <p className="text-xl text-gray-500">8.8.2024</p>
                <div className="flex flex-col sm:flex-row sm:gap-x-6 text-xl mt-8">
                    <p className="text-3xl font-semibold text-gray-900 font-serif flex flex-col justify-end leading-none">
                        Delta Lake
                    </p>

                    <p className="flex flex-col justify-end">
                        <a className="text-xl font-sans font-normal" href="https://www.alltrails.com/trail/us/wyoming/delta-lake-via-lupine-meadows-access" target="_blank" rel="noopener noreferrer" alt="Delta Lake AllTrails information">
                            AllTrails ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This is one of the most popular hikes in the park and I can see why! There's quite some elevation gain and a few rock scrambles, but it's worth it for the views of the lake and seeing Grand Teton up close. The turqoise water is stunning, but freezing.
                </p>
            </div>

            <img
                className="my-8"
                src={deltalake}
                alt=""
            />

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24">
                <p className="text-xl text-gray-500">9.19.2024</p>
                <div className="flex flex-col sm:flex-row sm:gap-x-6 text-xl mt-8">
                    <p className="text-3xl font-semibold text-gray-900 font-serif flex flex-col justify-end leading-none">
                        Breccia Cliffs
                    </p>

                    <p className="flex flex-col justify-end">
                        <a className="text-xl font-sans font-normal" href="https://www.alltrails.com/trail/us/wyoming/breccia-peak" target="_blank" rel="noopener noreferrer" alt="Breccia Peak AllTrails information">
                            AllTrails ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This was one of my favorite hikes this summer. The scale of these mountains and the feeling at the summit are hard to put into words. I had hiked this trail a few months earlier, and it was so cool to see how much changed with the fresh snowfall!
                </p>
            </div>

            <video id="brecciacliff" className="my-8" autoPlay muted loop playsInline>
                <source src={brecciacliff} type="video/mp4" />
            </video>

            <div className="mx-6 md:mx-auto max-w-2xl my-8">
                <p className="text-xl text-gray-900">
                    There's nothing like chasing the sunset and seeing views all around.
                </p>
            </div>

            <video id="brecciasunset" className="my-8" autoPlay muted loop playsInline>
                <source src={brecciasunset} type="video/mp4" />
            </video>

            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-xl text-gray-900 bg-gray-200 p-4">
                    These three months have been everything and I am forever grateful for all the mountains I climbed, the vibrant sunsets I watched, and the wildlife I spotted. I'm appreciative of the friends I met who came from all over the world, the Chinese I learned from them, the 狼人杀 games, and the memories we made together.
                </p>
            </div>
        </FadeIn >
    );
}

export default GrandTetonPage;