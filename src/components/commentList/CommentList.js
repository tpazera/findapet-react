import React, { Component } from 'react';
import './commentList.scss';


class CommentList extends Component {
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
            <div id="commentlist0" className="commentlist1">
                <div id="who0" className="who" style={styles0}>
                    {this.props.who + ":    "}
                </div>
                <div id="commentlisttext0" className="commentlisttext" style={styles1}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default CommentList;