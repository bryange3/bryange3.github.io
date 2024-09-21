import React from 'react';
import { Link } from 'react-router-dom';

// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Hero(props) {
    return (
        <div className="md:mx-auto max-w-2xl">
            <div className="mt-12 sm:mt-20 mb-20">
                <p className="text-xl mt-4 mb-8">
                    <Link to="/">← Back home</Link>
                </p>

                {props.projectTitle && <p className="text-5xl font-semibold text-gray-900 font-serif mb-4">{props.projectTitle}</p>}
                {props.description && <p className="text-xl text-gray-900 mb-4">{props.description}</p>}
                <div className="sm:grid sm:grid-cols-2 gap-x-4">
                    <div>
                        <p className="text-xl text-gray-500 mb-0">Role</p>
                        <p className="text-xl text-gray-900">{props.role}</p>
                    </div>
                    <div>
                        <p className="text-xl text-gray-500 mb-0">Timeline</p>
                        <p className="text-xl text-gray-900">{props.timeline}</p>
                    </div>
                </div>
                <img className="my-4" src={props.imgSrc} alt={props.imgAlt} />
            </div>
        </div>
    );
}

export default Hero;