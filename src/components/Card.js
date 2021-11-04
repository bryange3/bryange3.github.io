import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../components/CardInfo.js';

function Card(props) {
    return (
        <Link className="project-card" to={props.item.path}>
            <div>
                <img
                    id="image"
                    class="project-card-image"
                    src={props.item.imgSrc}
                    alt={props.item.imgSrc}
                />
            </div>
            <div>
                <CardInfo projectTitle={props.item.projectTitle} subTitle={props.item.description} roles={props.item.roles} path={props.item.path} type={props.item.type} />
            </div>
        </Link>
    );
}

export default Card;