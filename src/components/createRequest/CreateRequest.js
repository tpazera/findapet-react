import React from 'react';
import { Link } from 'react-router-dom';
import './CreateRequest.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

library.add(faHandPointer);
const CreateRequest = () =>{
  
        return (
            <div id="createrequest">
            
                <Link to="/stworz-zgloszenie">
                    <FontAwesomeIcon icon="faHandPointer" />
                    <p><b>Stwórz zgłoszenie</b></p>
                </Link>
            </div>
        );
    
}

export default CreateRequest;