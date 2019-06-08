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
            <Link to={`/n/${id}`} className="ProductCard__Title">
                <div className="nodeCard">
                        <div className="nodeImageContainer" style={styles}>
                        
                        </div>
                    
                    <div className="nodeContent">
                        <div>
                        <p className='titleNode'>{title}</p>
                        <p className='typeNode'>{animalType}</p>
                        <p className='statusNode'>{status}</p>
                        <p className='colorNode'>{color}</p>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NodeCard;
