import React, { Component } from "react";
import './pageContent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
  } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTimes);

class PageContent extends Component {

    constructor(props) {
        super(props);
    }

    toggleView() {
        var x = document.getElementById("pageContent");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    render() {
      return (
        <>
          <div id="pageContent">
            <div id="closeContent" onClick={this.toggleView}>
                <FontAwesomeIcon icon="times" />
            </div>
            {this.props.children}
            </div>
        </>
      );
    }
  }
  

export default PageContent;
