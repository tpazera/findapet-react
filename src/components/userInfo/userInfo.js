import React from 'react';
import './userInfo.scss';

const userInfo = (props) => (
    <div id="userInfo">
        {props.children}
    </div>
);

export default userInfo;
