import React, { Component } from 'react';
import './comment.scss';


class Comment extends Component {
    render() {

        const styles0 = {
            color: this.props.whocolor,
            fontSize: this.props.fontSizeWho,
        }

        const styles1 = {
            color: this.props.color,
            fontSize: this.props.fontSizeText,
        }

        return (
            <div id="comment0" className="comment1">
                <div id="who0" className="who" style={styles0}>
                    {this.props.who + ":    "}
                </div>
                <div id="commenttext0" className="commenttext" style={styles1}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default Comment;