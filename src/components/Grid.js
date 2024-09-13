import React from 'react';
// import Radium from 'radium';
// import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';
// import { fadeIn } from 'react-animations'
import Card from '../components/Card.js';

// const styles = {
//     fadeIn: {
//       animation: 'x 20s',
//       animationName: Radium.keyframes(fadeIn, 'fadeIn')
//     }
// }

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.projects
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                // <Card className="nav-link" to={item.path} item={item} key={item.id} style={styles.fadeIn} />
                // <Fade bottom>
                <Card to={item.path} item={item} key={item.id} />
                // </Fade>
            )
        })
    }


    render() {
        return (
            <FadeIn delay={600}>
                {this.makeItems(this.props.projects)}
            </FadeIn>
        )
    }
}

export default Grid;