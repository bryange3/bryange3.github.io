import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

function CardInfo(props) {
    return (
        <div>
            <div className="grid grid-cols-[1fr_auto] text-lg">
                <p className="text-4xl font-semibold text-gray-900 font-serif">{props.projectTitle}</p>
                <p className="text-lg font-normal text-gray-500 text-right">{props.year}</p>
            </div>
            <p className="text-lg font-normal text-gray-900">{props.description}</p>
            <Link to={props.path}></Link>
        </div>
    )
}

export default CardInfo;