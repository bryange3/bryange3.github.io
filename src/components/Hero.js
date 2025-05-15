import React from 'react';
import { Link } from 'react-router-dom';

function Hero(props) {
    return (
        <div className="md:mx-auto max-w-2xl">
            <div className="mt-12 sm:mt-20 mb-20">
                <p className="text-lg mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                {props.projectTitle && <p className="text-5xl font-semibold text-gray-900 font-serif mb-4">{props.projectTitle}</p>}
                {props.description && <p className="text-lg text-gray-900 mb-4">{props.description}</p>}
                <div className="sm:grid sm:grid-cols-2 gap-x-4">
                    <div>
                        <p className="text-lg text-gray-500 mb-0">Role</p>
                        <p className="text-lg text-gray-900">{props.role}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-500 mb-0">Timeline</p>
                        <p className="text-lg text-gray-900">{props.timeline}</p>
                    </div>
                </div>

                {props.coverType === 'image' ? (
                    <img className="my-4 rounded-md" src={props.coverSrc} alt={props.imgAlt} />
                ) : props.coverType === 'video' ? (
                    <video className="my-4 rounded-md" autoPlay muted loop playsInline>
                        <source src={props.coverSrc} type="video/mp4" />
                    </video>
                ) : (
                    <p>Unsupported media type</p>
                )}
            </div>
        </div>
    );
}

export default Hero;