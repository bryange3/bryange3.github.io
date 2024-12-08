import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../components/CardInfo.js';

function Card(props) {
    return (
        <Link className="hover:opacity-100 hover:-translate-y-3 duration-300 ease-in-out" to={props.item.path}>
            <div className="hover:-translate-y-3 duration-300 ease-in-out">
                <div className="bg-transparent mb-4">
                    {props.item.coverType === 'image' ? (
                        <img className="rounded-md" src={props.item.coverSrc} alt={props.item.imgAlt} />
                    ) : props.item.coverType === 'video' ? (
                        <video className="rounded-md" alt={props.item.imgAlt} autoPlay muted loop playsInline>
                            <source src={props.item.coverSrc} type="video/mp4" />
                        </video>
                    ) : (
                        <p>Unsupported media type</p>
                    )}
                </div>

                <div className="mb-16">
                    <CardInfo projectTitle={props.item.projectTitle} year={props.item.year} description={props.item.description} roles={props.item.roles} path={props.item.path} type={props.item.type} />
                </div>
            </div>
        </Link>
    );
}

export default Card;