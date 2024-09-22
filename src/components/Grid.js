import React from 'react';
import FadeIn from 'react-fade-in';
import Card from '../components/Card.js';

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
                <Card to={item.path} item={item} key={item.id} />
            )
        })
    }


    render() {
        return (
            <FadeIn delay={300}>
                {this.makeItems(this.props.projects)}
            </FadeIn>
        )
    }
}

export default Grid;