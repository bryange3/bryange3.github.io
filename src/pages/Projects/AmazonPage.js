import React from 'react';
import Hero from '../../components/Hero.js';
import FadeIn from 'react-fade-in';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import shopperproblem from '../../assets/project/amazon/shopperproblem.png';
import merchantproblem from '../../assets/project/amazon/merchantproblem.png';
import solution from '../../assets/project/amazon/solution.png';
import bareminerals from '../../assets/project/amazon/bareminerals.png';
import dollarshave from '../../assets/project/amazon/dollarshave.png';
import team from '../../assets/project/amazon/nycteam.jpg';

function AmazonPage(props) {
    AOS.init();
    window.scrollTo(0, 0);
    return (
        <FadeIn className="text-pretty">
            <div className="mx-6 md:mx-auto max-w-2xl">
                <Hero
                    projectTitle={props.info.projectTitle}
                    description={props.info.description}
                    coverType={props.info.coverType}  // Make sure this is passed correctly
                    coverSrc={props.info.coverSrc}    // Make sure this is passed correctly
                    imgAlt={props.info.imgAlt}
                    role={props.info.role}
                    timeline={props.info.timeline}
                />

                <p className="text-xl text-gray-500">Context</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Buy with Prime gives shoppers fast, free delivery and easy returns on eligible products sold on direct-to-consumer websites, outside of Amazon.com.</p>
                <p className="text-xl text-gray-900">
                    Merchants get to pick and choose which products to offer through Buy with Prime. For those products, Amazon takes care of the payment, processing, storage, delivery, and returns.
                </p>
            </div>
            <img className="px-2 sm:px-0 mb-4 max-w-6xl w-full mx-auto" src={dollarshave} />

            <div className="mx-6 md:mx-auto max-w-2xl">
                <p className="text-xl text-gray-500 mt-16">Problem</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Shoppers struggle to discover and understand how to shop Buy with Prime products.</p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        Can’t identify eligible products when browsing catalogs
                    </li>
                    <li>
                        Shoppers only discover Buy with Prime when they stumble upon an eligible product’s detail page
                    </li>
                    <li>
                        Confusion about whether they would be taken to Amazon.com for checkout
                    </li>
                </ul>
                <img className="my-4 sm:max-w-xl sm:mx-auto" src={shopperproblem} />

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-12">Merchants can’t effectively educate shoppers about Buy with Prime.</p>
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        Manually added static Buy with Prime circle badge to eligible products leads to inaccuracies if the item goes out of stock or is taken off of Buy with Prime by the merchant
                    </li>
                    <li>
                        Inefficiency creating custom Buy with Prime elements
                    </li>
                </ul>
                <img className="my-4 sm:max-w-xl sm:mx-auto" src={merchantproblem} />

                <p className="text-xl text-gray-900">
                    These problems were discovered through the team’s regular unmoderated user tests and my conversations with branding.
                </p>


                <p className="text-xl text-gray-500 mt-16">Solution</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Discovery elements that educate shoppers earlier, offered to merchants through Shopify.</p>
                <img className="my-4" src={solution} />
                <ul className="text-xl text-gray-900 list-disc list-outside ml-3 space-y-1.5">
                    <li>
                        <strong>Educational banner</strong> merchants can add to home and catalog pages so shoppers learn about Buy with Prime earlier in the journey
                    </li>
                    <li>
                        <strong>Buy with Prime indicator</strong> automatically displayed on eligible products so shoppers can identify what products they can receive fast, free delivery on
                    </li>
                </ul>

                <p className="text-xl text-gray-900 bg-gray-200 mt-4 p-4 rounded-md">
                    My work <strong>launched on Shopify this year</strong> and will soon be available on Salesforce Commerce Cloud! 🚀
                    <br /><br />
                    To learn more about my explorations, research studies, and implementation considerations, please <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">email me</a>.
                </p>
            </div>

            <img className="px-2 sm:px-0 mt-12 mb-4 max-w-6xl w-full mx-auto" src={bareminerals} />

            <div className="mx-6 md:mx-auto max-w-2xl">
                <p className="text-xl text-gray-900">
                    Check out my live banner and indicator elements on <a href="https://www.bareminerals.com/collections/buy-with-prime" target="_blank" rel="noopener noreferrer" alt="bareMinerals">bareMinerals</a> and <a href="https://www.amazon.com/b?node=78686046011" target="_blank" rel="noopener noreferrer" alt="bareMinerals">other merchant storefronts</a>.
                </p>


                <p className="text-xl text-gray-500 mt-16">Learnings</p>
                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Think about the big picture.</p>
                <p className="text-xl text-gray-900">
                    Even though my focus was to educate shoppers, I kept merchants in mind as well. Merchants need to be willing to add my solution to their sites in the first place!
                </p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Collaborate with cross-functional partners early.</p>
                <p className="text-xl text-gray-900">
                    I collaborated with many different stakeholders. Initiating early conversations helped me understand what design collaboration looks like at Amazon and on my team, identify brand constraints, and learn about future product vision.
                </p>

                <p className="text-3xl font-semibold text-gray-900 font-serif mt-8">Prioritize feedback by reflecting back on the shopper problems.</p>
                <p className="text-xl text-gray-900">
                    Sometimes, I receive differing feedback from different stakeholders. I learned to make decisions and drive my project forward by refocusing on the main problems shoppers face.
                </p>

                <img className="my-12 rounded-md" src={team} />

                <p className="text-xl text-gray-900 bg-gray-200 p-4 rounded-md">
                    Thank you to my team and partners for all the wonderful feedback, collaboration opportunities, and support — especially my manager, Kim, and my mentor, Sana!
                </p>

                <p className="text-xl text-left mt-16">
                    <Link to="/south-side-weekly">← Previous project</Link>
                </p>
            </div>
        </FadeIn >
    );
}

export default AmazonPage;