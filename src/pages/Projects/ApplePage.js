import React from 'react';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';
import AOS from 'aos';

import screenflow from '../../assets/project/apple/screen-flow.png';
import icloud from '../../assets/project/apple/icloud.png';
import icloudweb from '../../assets/project/apple/icloud-web.png';
import entireflow from '../../assets/project/apple/entireflow.gif';
import famchecklist from '../../assets/project/apple/fam-checklist.gif';
import checklistvariations from '../../assets/project/apple/checklist-variations.png';
import applepark from '../../assets/project/apple/apple-park.jpg';

function ApplePage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="text-pretty">
            <div className="mx-6 md:mx-auto max-w-2xl">
                <Hero projectTitle={props.info.projectTitle} description={props.info.description} imgSrc={props.info.imgSrc} imgAlt={props.info.imgAlt} role={props.info.role} timeline={props.info.timeline} />

                <p className="text-xl text-gray-500">Context</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">iCloud is Apple's cloud storage service.</p>
                <p className="text-xl text-gray-900">
                    iCloud is designed to help users securely store and sync their photos, notes, messages, and more across devices such as iPhones, iPads, and Macs.
                </p>
                <img className="my-4 scale-[0.8]" src={icloud} />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Legacy Contact empowers people to control what happens to their data after they pass away.</p>
                <p className="text-xl text-gray-900 mb-4">
                    Apple users can designate trusted or loved ones as legacy contacts. These legacy contacts may be able to access memorable photos and videos, important files, notes, etc.
                </p>
            </div>
            <img className="px-4 my-4" src={screenflow} />

            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-xl text-gray-900">
                    After an Apple user passes away, their Legacy Contacts can request to view their data through the web, iOS, or macOS.
                </p>
                <img className="my-4" src={icloudweb} />

                <p className="text-xl text-gray-500 mt-16">Enhancement</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">I worked on an enhancement for Legacy Contact that spans the end-to-end flow.</p>
                <p className="text-xl text-gray-900">
                    To ensure a meangingful experience for all users, I accounted for different scenarios and edge cases.
                </p>
                <img className="my-4" src={entireflow} />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I reviewed my work with directors and VPs of design and engineering who supported implementing my feature in the future.</p>
                <p className="text-xl text-gray-900 mb-4">
                    I collaborated with senior designers, UX writers, project managers, and engineers across teams and created detailed design specifications for iOS, macOS, and web for handoff to engineering.
                </p>

                <p className="text-xl text-gray-900 bg-gray-200 p-4">I can’t share details about my enhancement until launch, but <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">email me</a> for more about my experience.</p>

                <p className="text-xl text-gray-500 mt-16">Discovery</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Beyond my main enhancement, I also improved discovery of Legacy Contact via Family Checklist.</p>
                <p className="text-xl text-gray-900">
                    Family Sharing lets people share subscriptions, iCloud storage, device locations, and more with family.
                </p>
                <p className="text-xl text-gray-900 mb-4">
                    I designed the “Add a Legacy Contact” suggestion in the Family Checklist, which is a great entry point for people who want to add their family members as legacy contacts.
                </p>
                <img className="sm:max-w-xs mx-auto rounded-[13%/10%] mt-4 mb-8" src={famchecklist} />

                <p className="text-xl text-gray-900 bg-gray-200 p-4">This improvement launched in September 2023 and is now the <strong>primary driver behind adoption!</strong> 🥳</p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Relationships can change. Review legacy contacts from the Family Checklist and keep them updated.</p>
                <p className="text-xl text-gray-900 mb-4">
                    Depending on if you have set up a legacy contact before, you will either see a suggestion to add a legacy contact or review your existing ones.
                </p>
                <img className="sm:max-w-xl mx-auto mt-4 mb-8" src={checklistvariations} />

                <p className="text-xl text-gray-500 mt-16">Learnings</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Step back and consider the larger product and ecosystem.</p>
                <p className="text-xl text-gray-900">
                    Understanding how my feature relates to all of Apple’s products and services is important when designing an end-to-end experience that fits in the Apple ecosystem.
                </p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Simplicity and effectiveness is key.</p>
                <p className="text-xl text-gray-900">
                    Simplify to what is necessary and think about how many decisions users need to make. However, it’s ok to have a longer flow if it means clearer understanding for the user. The powerful nature of Legacy Contact should inform how easy it is for users to take certain actions.
                </p>

                <img className="my-12" src={applepark} />
            </div>
        </FadeIn>
    );
}

export default ApplePage;