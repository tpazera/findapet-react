import React from 'react';
import AppName from "../appName/AppName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import "./logo.scss";
library.add(faCat);

const Logo = () => {
    return (
        <div id="logo">
            <FontAwesomeIcon icon="cat" />
            <AppName />
        </div>
        
    );
}

export default Logo;