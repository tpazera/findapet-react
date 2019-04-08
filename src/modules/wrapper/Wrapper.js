import React from 'react';
import './wrapper.scss';

const Wrapper = (props) => (
    <div className="wrapper">
        {props.children}
    </div>
);

export default Wrapper;
