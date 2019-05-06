import React, { Component } from 'react';
import './notificationHeader.scss';


class NotificationHeader extends Component {
    render() {

        const styles = {
            fontSize: this.props.fontSize,
            color: this.props.color,
        }

        return (
            <div style={styles} id="notifHeader0" className="notifHeader">
                {this.props.text}
            </div>
        );
    }
}

export default NotificationHeader;