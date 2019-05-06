import React from 'react';
import './nodeCard.scss';
import { Link } from 'react-router-dom';

const NodeCard = ({
    id,
    photoUrl,
    title,
    animalType,
    status,
    color,
    className = '',
}) => {
    const handleAddAction = () => {
        // if (addAction) {
        //     addAction(id);
        // }
    };

    let styles = {
        backgroundImage: 'url(' + photoUrl[0] + ')'
    }

    return (
        <div className={className}>
            <div className="nodeCard">
                <Link to={`/n/${id}`}>
                    <div className="nodeImageContainer" style={styles}>
                    
                    </div>
                </Link>
                
                <div className="nodeContent">
                    <span>
                        <Link to={`/n/${id}`} className="ProductCard__Title">
                            {title}
                        </Link>
                        
                        <br />{animalType}
                        <br />{status}
                        <br />{color}
                    </span>
                    

                </div>
            </div>
        </div>
    );
};

export default NodeCard;
