import React, { Component } from "react";
import SmallNodeCard from "../smallNodeCard/SmallNodeCard";
import "./smallNodeList.scss";

class SmallNodeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: true
    }
    this.reset = this.reset.bind(this);
  }

  reset() {
    // this.setState( prevState => ({
    //   value: !prevState.value
    // }))
    this.props.handler();
  }

  render() {
    const { list } = this.props;

    const isListNotEmpty = list && list.length > 0;

    return (
      <div id="smallNodeList">
        {isListNotEmpty &&
          list.map(node => (
            <SmallNodeCard
              className="smallNodeListElement"
              key={node.id}
              id={node.id}
              title={node.title}
              photoUrl={node.photoURL}
              animalType={node.animalType}
              status={node.status}
              color={node.petColor}
              resetFunction={this.reset}
              userId={node.userId}
            />
          ))}
      </div>
    );
  }
}

export default SmallNodeList;
