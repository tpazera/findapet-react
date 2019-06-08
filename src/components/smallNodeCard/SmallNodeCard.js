import React from 'react';
import './smallNodeCard.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faTrash, faUnlock } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
  } from "react-bootstrap";
import Axios from 'axios';

library.add(faEye, faTrash, faUnlock);

const SmallNodeCard = ({
    id,
    photoUrl,
    title,
    animalType,
    status,
    color,
    className = '',
    resetFunction,
    userId
}) => {
    const deleteNode = () => {
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Authorization': localStorage.getItem('token')
          }
          const data = {
          }
          
          Axios.delete('https://find-pet-app.herokuapp.com/rest/announcement/' + id, {headers, data})
            .then(response => {
                resetFunction();
            })
            .catch(function(error) {
            });
    };

    const unlockNode = () => { 
        Axios.post('https://find-pet-app.herokuapp.com/rest/announcement/' + id + '/activate', {
        }, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Authorization":localStorage.getItem('token')
            }
        })
        .then((response) => {
            resetFunction();
        })
    };


    let type = animalType;
    let src;
    if(type === "pies") src = "/images/dog.svg";
    else if(type === "kot") src = "/images/cat.svg";
    else if(type === "mysz") src = "/images/mouse.svg";
    else if(type === "papuga") src = "/images/parrot.svg";
    else if(type === "królik") src = "/images/bunny.svg";
    else src= "/images/marker.svg";

    let styles = {
        backgroundImage: 'url(' + src + ')'
    }

    let ifowneroradmin = false;
    if (userId === localStorage.getItem('id')) ifowneroradmin = true;
    if (localStorage.getItem('admin')) ifowneroradmin = true;
    let ifadmin = false;
    if (localStorage.getItem('admin')) ifadmin = true;
    return (
        <div className={className}>
            
                <div className="smallNodeCard">
                    <div className="nodeImageContainer" style={styles}>
                    </div>
                    <div className="nodeTitle">
                        {title}
                    </div>
                    <div className="nodeButtons">
                        <Link to={`/n/${id}`} className="ProductCard__Title">
                            <Button variant="success">
                                <FontAwesomeIcon icon="eye" />
                            </Button>
                        </Link>
                        {ifowneroradmin ? (
                            <Button variant="danger" onClick={deleteNode} >
                                <FontAwesomeIcon icon="trash"/>
                            </Button>
                        ) : (<></>)}
                        {ifadmin ? (
                            <Button variant="info" onClick={unlockNode} >
                                <FontAwesomeIcon icon="unlock"/>
                            </Button>
                        ) : (<></>)}
                        
                    </div>
                </div>
        </div>
    );
};

export default SmallNodeCard;
