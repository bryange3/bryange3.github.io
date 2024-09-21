import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../components/CardInfo.js';

function Card(props) {
    return (
        <Link className="project-card" to={props.item.path}>
            <div className="hover:opacity-70">
                <div className="mb-4">
                    {props.item.coverType === 'image' ? (
                        <img src={props.item.coverSrc} alt={props.item.imgAlt} />
                    ) : props.item.coverType === 'video' ? (
                        <video autoPlay muted loop>
                            <source src={props.item.coverSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <p>Unsupported media type</p>
                    )}
                </div>

                <div className="mb-16">
                    <CardInfo projectTitle={props.item.projectTitle} description={props.item.description} roles={props.item.roles} path={props.item.path} type={props.item.type} />
                </div>
            </div>
        </Link>
    );
}

export default Card;