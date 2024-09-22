import React from 'react';
import FadeIn from 'react-fade-in';

function Footer() {
    return (
        <FadeIn delay={200}>
            <div className="sticky-footer max-w-2xl mx-6 md:mx-auto mb-10 md:mb-20">
                <hr className="border-gray-300 rounded my-16"></hr>
                <p className="grid sm:grid-cols-2">
                    <div className="text-2xl font-semibold font-serif ">
                        Thanks for taking a scroll! &nbsp; &nbsp;
                    </div>
                    <div className="text-lg font-sans font-normal sm:text-right">
                        <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">Email ↗</a>
                        &nbsp; &nbsp;
                        <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">Resume ↗</a>
                        &nbsp; &nbsp;
                        <a href="https://www.linkedin.com/in/bryange/" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="LinkedIn">LinkedIn ↗</a>
                    </div>
                </p>

                <div className="text-md text-gray-500 mt-0">
                    Made with React, Tailwind CSS, and <span className='brat'>BRAT</span> playing in the background.
                </div>
            </div>
        </FadeIn>
    )
}

export default Footer;