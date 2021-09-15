import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'

import CardInfo from '../components/CardInfo.js';

// Animation code derived from https://codesandbox.io/embed/rj998k4vmm
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(props) {
    const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 400, friction: 20 } }));

    return (
        <Link className="d-inline-block project-card" to={props.item.path} style={{ textDecoration: 'none', color: 'black'}}>
            <div>
                <animated.img
                    id="image"
                    class="project-card-image"
                    // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    // onMouseMove={() => set({ xys: [0, 0, 1.04] })}
                    // onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: springProps.xys.interpolate(trans) }}
                    src={props.item.imgSrc}
                    alt={props.item.imgSrc}
                />
            </div>
            <CardInfo projectTitle={props.item.projectTitle} subTitle={props.item.description} roles={props.item.roles} path={props.item.path} type={props.item.type}/>
        </Link>
    );
}

export default Card;