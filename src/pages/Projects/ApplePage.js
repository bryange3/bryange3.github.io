import React from 'react';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import screenflow from '../../assets/project/apple/screen-flow.png';
import icloud from '../../assets/project/apple/icloud.png';
import icloudweb from '../../assets/project/apple/icloud-web.png';
import entireflow from '../../assets/project/apple/entireflow.mp4';
import famchecklist from '../../assets/project/apple/famchecklist.mp4';
import checklistvariations from '../../assets/project/apple/checklist-variations.png';
import applepark from '../../assets/project/apple/apple-park.jpg';

function ApplePage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="text-pretty">
            <div className="mx-6 md:mx-auto max-w-2xl">
                <Hero projectTitle={props.info.projectTitle} description={props.info.description} coverType={props.info.coverType} coverSrc={props.info.coverSrc} imgAlt={props.info.imgAlt} role={props.info.role} timeline={props.info.timeline} />

                <p className="text-lg text-gray-500">Context</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">iCloud is Apple's cloud storage service.</p>
                <p className="text-lg text-gray-900">
                    iCloud is designed to help users securely store and sync their photos, notes, messages, and more across devices such as iPhones, iPads, and Macs.
                </p>
                <img className="my-4 sm:scale-[0.8]" src={icloud} alt="iCloud graphic illustrating how photos, notes, files, messages, and more are all synced through the cloud service" />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Legacy Contact empowers people to control what happens to their data after they pass away.</p>
                <p className="text-lg text-gray-900 mb-4">
                    Apple users can designate trusted or loved ones as legacy contacts. These legacy contacts may be able to access memorable photos and videos, important files, notes, etc.
                </p>
            </div>
            <img className="px-4 my-4 max-w-[90rem] w-full mx-auto" src={screenflow} alt="Legacy Contact creation flow on iPhone" />

            <div className="mx-6 md:mx-auto max-w-2xl mt-12">
                <p className="text-lg text-gray-900">
                    After an Apple user passes away, their legacy contacts can request to view their data through the web, iOS, or macOS.
                </p>
                <img className="my-4" src={icloudweb} alt="Accessing deceased Apple user's data via iCloud web (as a legacy contact)" />

                <p className="text-lg text-gray-500 mt-16">Enhancement</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">I worked on an enhancement for Legacy Contact that spans the end-to-end flow.</p>
                <p className="text-lg text-gray-900">
                    To ensure a meangingful experience for all users, I accounted for different scenarios and edge cases.
                </p>
                <video className="my-4 rounded-md" autoPlay muted loop playsInline>
                    <source src={entireflow} type="video/mp4" alt="Different possible flows for legacy contact creation and management, highlighting potential edge cases that could result"/>
                </video>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">I reviewed my work with directors and VPs of design and engineering who supported implementing my feature in the future.</p>
                <p className="text-lg text-gray-900 mb-4">
                    I collaborated with senior designers, UX writers, project managers, and engineers across teams and created detailed design specifications for iOS, macOS, and web for handoff to engineering.
                </p>

                <p className="text-lg text-gray-900 bg-gray-200 p-4 rounded-md">I can’t share details about my enhancement until launch, but <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">email me</a> for more about my experience.</p>

                <p className="text-lg text-gray-500 mt-16">Discovery</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Beyond my main enhancement, I also improved discovery of Legacy Contact via Family Checklist.</p>
                <p className="text-lg text-gray-900">
                    Family Sharing lets people share subscriptions, iCloud storage, device locations, and more with family.
                </p>
                <p className="text-lg text-gray-900 mb-4">
                    I designed the “Add a Legacy Contact” suggestion in the Family Checklist, a great entry point for people who want to pass down their data to family members.
                </p>

                <video className="max-w-xs mx-auto rounded-[15%/9%] mt-4 mb-8" autoPlay muted loop playsInline>
                    <source src={famchecklist} type="video/mp4" alt="iPhone user navigating through the settings app to set up a legacy contact from the Family Checklist in Family Sharing"/>
                </video>

                <p className="text-lg text-gray-900 bg-gray-200 p-4 rounded-md">This improvement launched in September 2023 and is now the <strong>primary driver behind adoption!</strong> 🥳</p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Relationships can change. Review legacy contacts from the Family Checklist and keep them updated.</p>
                <p className="text-lg text-gray-900 mb-4">
                    Depending on if you have set up a legacy contact before, you will either see a suggestion to add a legacy contact or review your existing ones.
                </p>
                <img className="w-full max-w-2xl mx-auto mt-4 mb-8" src={checklistvariations} alt="Variations for the legacy contact tile in Family Checklist based on if you have a legacy contact set up: Add a Legacy Contact or Legacy Contacts Added"/>

                <p className="text-lg text-gray-500 mt-16">Learnings</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Step back and consider the larger product and ecosystem.</p>
                <p className="text-lg text-gray-900">
                    Understanding my feature’s place in relation to Legacy Contact, iCloud, Family Sharing, and other Apple products and services is crucial for designing an experience that fits in the Apple ecosystem.
                </p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Balance simplicity and clarity.</p>
                <p className="text-lg text-gray-900">
                    Simplify to what is necessary and think about how many decisions users need to make. However, it’s ok to have a longer flow if it means clearer understanding for the user. The powerful nature of Legacy Contact should inform how easy it is for users to take certain actions.
                </p>

                <img className="my-12 rounded-md" src={applepark} alt="Apple Park green area with rainbow structure taken from inside the building"/>

                <p className="text-lg text-gray-900 bg-gray-200 p-4 rounded-md">
                    Thank you to the iCloud Human Interface team for supporting me and giving me the chance to work on such a meaningful project.

                    <br /><br />

                    A special thanks to Carmen, my manager, for supporting me through thoughtful feedback and encouragement.
                </p>

                <p className="text-lg text-right mt-16">
                    <Link to="/south-side-weekly">Next project →</Link>
                </p>
            </div>
        </FadeIn>
    );
}

export default ApplePage;