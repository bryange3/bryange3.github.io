import React from 'react';

class ExperimentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: props.tools,
            src: props.src,
            title: props.title,
            alt: props.alt,
            description: props.description,
            type: props.type
        }
    }

    makeItems = (tools) => {
        return tools.map(tool => {
            return (
                <span className="font-mono text-sm text-gray-600 bg-gray-200 p-2 mr-2 rounded-md">
                    {tool}
                </span>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="bg-transparent mb-3">
                    {this.props.type === 'image' ? (
                        <img className="rounded-md" src={this.props.src} alt={this.props.alt} />
                    ) : this.props.type === 'video' ? (
                        <video className="rounded-md" autoPlay muted loop playsInline>
                            <source src={this.props.src} type="video/mp4" alt={this.props.alt} />
                        </video>
                    ) : (
                        <p>Unsupported media type</p>
                    )}
                </div>

                <div className="mb-10">
                    <p className="text-lg font-medium text-gray-900 mb-1">{this.props.title}</p>
                    <p className="text-md font-normal text-gray-900">{this.props.description}</p>
                    <p>{this.makeItems(this.props.tools)}</p>
                </div>
            </div>
        )
    }
}

export default ExperimentCard;