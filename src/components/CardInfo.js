import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function CardInfo(props) {
    return (
        <div>
            <p className="text-3xl font-semibold text-gray-900 font-serif mb-2">{props.projectTitle}</p>
            <p className="text-xl font-normal text-gray-900">{props.description}</p>
            <Link to={props.path}></Link>
        </div>
    )
}

export default CardInfo;