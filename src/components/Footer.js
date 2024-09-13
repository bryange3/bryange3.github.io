import React from 'react';

function Footer() {
    return (
        <div className="sticky-footer max-w-2xl mx-auto mb-36">
            <hr className="rounded mb-10"></hr>
            <p className="text-xl font-bold">Thanks for taking a scroll, let's chat!</p>
            <p className="text-lg font-medium">
                <a href="mailto:bryange3@gmail.com" target="_blank" rel="noopener noreferrer" alt="Email">Email ↗</a>
                <br/>
                <a href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="Resume">Resume ↗</a>
                <br/>
                <a href="https://www.linkedin.com/in/bryange/" target="_blank" rel="noopener noreferrer" className='secondary-link' alt="LinkedIn">LinkedIn ↗</a>
            </p>
        </div>
    )
}

export default Footer;