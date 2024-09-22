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
import galaxy from '../assets/other/tetons/galaxy.jpeg';
import oxbow from '../assets/other/tetons/oxbow.jpeg';
import persephone from '../assets/other/tetons/persephone.jpg';
import schwabacherstart from '../assets/other/tetons/schwabacherstart.png';
import schwabacherend from '../assets/other/tetons/schwabacherend.png';

function GrandTetonPage(props) {
    AOS.init();
    window.scrollTo(0, 0);

    return (
        <FadeIn>
            <div className="mx-6 md:mx-auto max-w-2xl text-pretty mt-12 sm:mt-20">
                <p className="text-xl mt-4 mb-8 text-gray-500">
                    <Link to="/">← Back home</Link>
                </p>

                <p className="text-5xl font-semibold text-gray-900 mb-4 font-serif">Summer in the Tetons</p>
                <p className="text-xl text-gray-900">
                    My summer in the Bay Area in 2022 made me realize how much I love nature, especially since I grew up in Dallas, TX. I spent this summer in Grand Teton National Park and it's been everything! Here are some of my favorite moments.
                </p>
            </div>


            <div className="mx-6 md:mx-auto max-w-2xl mt-16">
                <p className="text-lg text-gray-500 mt-16">7.3.2024</p>
                <div className="grid sm:grid-cols-[1fr_auto] text-xl mt-4">
                    <p className="text-3xl font-semibold text-gray-900 font-serif">
                        Sunset at Togwotee Overlook
                    </p>

                    <p>
                        <a className="text-xl font-sans font-normal" href="https://maps.app.goo.gl/7qat7LMxLCTR5a6u8" target="_blank" rel="noopener noreferrer" alt="Togwotee Overlook location and Google Maps information">
                            Google Maps ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This was one of the most amazing sunsets I've ever seen. The ones after storms are always insanely beautiful!
                </p>
            </div>

            <div className="px-4">
                <img
                    className="lg:hidden my-8 rounded-md"
                    src={crazysunset}
                    alt=""
                />
            </div>

            <div className='px-4 sm:px-8 mx-auto'>
                <ParallaxBanner className="hidden lg:block aspect-[4/3] sm:aspect-[16/8] my-8 rounded-md overflow-hidden">
                    <ParallaxBannerLayer speed={5}>
                        <img
                            className='rounded-md'
                            src={crazysunset}
                            alt=""
                        />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer speed={10}>
                        <img
                            className="mt-[29%] rounded-md"
                            src={mountains}
                            alt=""
                        />
                    </ParallaxBannerLayer>
                    <ParallaxBannerLayer speed={17}>
                        <img
                            className="mt-[41%] rounded-md"
                            src={treeline}
                            alt=""
                        />
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24">
                <p className="text-lg text-gray-500">8.8.2024</p>
                <div className="grid sm:grid-cols-[1fr_auto] text-xl mt-4">
                    <p className="text-3xl font-semibold text-gray-900 font-serif">
                        Morning hike at Delta Lake
                    </p>

                    <p>
                        <a className="text-xl font-sans font-normal" href="https://www.alltrails.com/trail/us/wyoming/delta-lake-via-lupine-meadows-access" target="_blank" rel="noopener noreferrer" alt="Delta Lake AllTrails information">
                            AllTrails ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This is one of the most popular hikes in the park and I can see why! There's quite some elevation gain and a few rock scrambles, but it's worth it for the views of the lake and seeing Grand Teton up close. The turqoise water is stunning, but freezing.
                </p>
            </div>

            <div className="px-4 sm:px-8 mx-auto">
                <img
                    className="my-8 rounded-md"
                    src={deltalake}
                    alt=""
                />
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24 mb-8">
                <p className="text-lg text-gray-500">8.20.2024</p>
                <div className="grid sm:grid-cols-[1fr_auto] text-xl mt-4">
                    <p className="text-3xl font-semibold text-gray-900 font-serif">
                        Sunrise at Schwabacher Landing
                    </p>

                    <p>
                        <a className="text-xl font-sans font-normal" href="https://maps.app.goo.gl/HzRgf2SxNqxnPuUL6" target="_blank" rel="noopener noreferrer" alt="Schwabacher Landing location and Google Maps information">
                            Google Maps ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    It's crazy how much can change in 40 minutes! Glad I didn't leave even though it got cloudy.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8 px-4 sm:px-8 mx-auto">
                <div>
                    <img
                        src={schwabacherstart}
                        alt=""
                        className="rounded-md"
                    />
                </div>
                <div>
                    <img
                        src={schwabacherend}
                        alt=""
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24 mb-8">
                <p className="text-lg text-gray-500">8.2024</p>
                <div className="text-xl mt-4">
                    <p className="text-3xl font-semibold text-gray-900 font-serif flex flex-col justify-end leading-none">
                        Riya's visit to the Tetons
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    During the week my friend Riya visited, we took long-exposure shots of the galaxy above, saw fresh snowfall on the Tetons at Oxbow Bend, and enjoyed the loveliest outdoor brunch at Persephone Bakery in Jackson.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8 px-4 sm:px-8 mx-auto">
                <div>
                    <img
                        src={oxbow}
                        alt=""
                        className="rounded-md"
                    />
                </div>
                <div>
                    <img
                        src={galaxy}
                        alt=""
                        className="rounded-md"
                    />
                </div>
                <div>
                    <img
                        src={persephone}
                        alt=""
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl mt-16 sm:mt-24">
                <p className="text-lg text-gray-500">9.19.2024</p>
                <div className="grid sm:grid-cols-[1fr_auto] text-xl mt-4">
                    <p className="text-3xl font-semibold text-gray-900 font-serif">
                        Sunset hike at Breccia Cliffs
                    </p>

                    <p className="">
                        <a className="text-xl font-sans font-normal" href="https://www.alltrails.com/trail/us/wyoming/breccia-peak" target="_blank" rel="noopener noreferrer" alt="Breccia Peak AllTrails information">
                            AllTrails ↗
                        </a>
                    </p>
                </div>

                <p className="text-xl text-gray-900">
                    This was one of my favorite hikes this summer. The scale of these mountains and the feeling at the summit are hard to put into words. I had hiked this trail a few months earlier, and it was so cool to see how much changed with the fresh snowfall!
                </p>
            </div>

            <div className="px-4 sm:px-8 mx-auto">
                <video id="brecciacliff" className="my-8 rounded-md" autoPlay muted loop playsInline>
                    <source src={brecciacliff} type="video/mp4" />
                </video>
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl my-8">
                <p className="text-xl text-gray-900">
                    There's nothing like chasing the sunset and seeing views all around.
                </p>
            </div>

            <div className="px-4 sm:px-8 mx-auto">
                <video id="brecciasunset" className="my-8 rounded-md" autoPlay muted loop playsInline>
                    <source src={brecciasunset} type="video/mp4" />
                </video>
            </div>

            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-xl text-gray-900 bg-gray-200 p-4 rounded-md">
                    These three months have been everything and I am forever grateful for all the mountains I climbed, alpine lakes I visited, vibrant sunsets I watched, and wildlife I spotted. I'm appreciative of the friends I met who came from all over the world, the Chinese I learned from them, the <span className='text-nowrap'>狼人杀</span> games, and the memories we made together.
                </p>
            </div>
        </FadeIn >
    );
}

export default GrandTetonPage;