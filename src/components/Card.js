import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../components/CardInfo.js';

function Card(props) {
    return (
        <Link className="project-card" to={props.item.path}>
            <div className="hover:opacity-70">
                <img
                    id="image"
                    class="mb-4"
                    src={props.item.imgSrc}
                    alt={props.item.imgSrc}
                />
                <div className="mb-16">
                    <CardInfo projectTitle={props.item.projectTitle} description={props.item.description} roles={props.item.roles} path={props.item.path} type={props.item.type} />
                </div>
            </div>
        </Link>
    );
}

export default Card;