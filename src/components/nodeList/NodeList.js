import React, { Component } from 'react';
import NodeCard from '../nodeCard/NodeCard';
import './nodeList.scss';

class NodeList extends Component {
    render() {
        const {
            list
        } = this.props;

        const isListNotEmpty = list && list.length > 0;

        return (
            <div id="nodeList">
                {isListNotEmpty && list.map((node) => (
                    <NodeCard
                        className="nodeListElement"
                        key={node.id}
                        id={node.id}
                        title={node.title}
                        photoUrl={node.photoURL}
                        animalType={node.animalType}
                        status={node.status}
                        color={node.petColor}
                    />
                ))}
            </div>
        );
    }
}

export default NodeList;
