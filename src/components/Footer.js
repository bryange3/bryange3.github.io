import React from 'react';
import FadeIn from 'react-fade-in';

function Footer() {
    return (
        <FadeIn delay={200}>
            <div className="sticky-footer max-w-2xl mx-6 md:mx-auto mb-10 md:mb-20">
                <hr className="border-gray-300 rounded my-12"></hr>
                <p className="grid sm:grid-cols-[1fr_auto] sm:gap-x-12 md:gap-x-28">
                    <p className="text-xl text-gray-500 mt-0">
                        Thanks for scrolling! I made this site with React, Tailwind CSS, and <span className='brat'>BRAT</span> playing in the background.
                    </p>
                    <p className="text-md font-sans font-normal sm:text-right">
                        <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer">Email ↗</a>
                        <br/>
                        {/* <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link'>Resume ↗</a>
                        <br/> */}
                        <a href="https://www.linkedin.com/in/bryange/" target="_blank" rel="noopener noreferrer" className='secondary-link'>LinkedIn ↗</a>
                    </p>
                </p>
            </div>
        </FadeIn>
    )
}

export default Footer;