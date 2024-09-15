import React from 'react';
import FadeIn from 'react-fade-in';

function Footer() {
    return (
        <FadeIn delay={200}>
            <div className="sticky-footer max-w-2xl mx-6 md:mx-auto mb-10 md:mb-36">
                <hr className="rounded mt-16 mb-10"></hr>
                <p className="text-2xl font-semibold font-serif">Thanks for taking a scroll, let's chat!</p>
                <p className="text-lg font-normal">
                    <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">Email ↗</a>
                    &nbsp; &nbsp;
                    <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">Resume ↗</a>
                    &nbsp; &nbsp;
                    <a href="https://www.linkedin.com/in/bryange/" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="LinkedIn">LinkedIn ↗</a>
                </p>
            </div>
        </FadeIn>
    )
}

export default Footer;