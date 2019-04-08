import React from 'react';
import './pageContent.scss';

const PageContent = (props) => (
    <div id="pageContent">
        {props.children}
    </div>
);

export default PageContent;
