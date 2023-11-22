import React from 'react';
import "./FullMap.css";

const MarkerCard = ({ data }: any) => {
    return (
        `<div className="data">
            <div className="icon">
              
            </div>
            <div className="details">
                <div className="price">${data.desci}</div>
                <div className="address">${data.m_id}</div>
                <div className="features">
                    <div>
                        <i aria-hidden="true" className="fa fa-bed fa-lg bed" title="bedroom"></i>
                        <span className="fa-sr-only">Status</span>
                        <span>${data.Status}</span>
                    </div>
                    <div>
                        <i aria-hidden="true" className="fa fa-bath fa-lg bath" title="bathroom"></i>
                        <span className="fa-sr-only">Priority</span>
                        <span>${data.Priority}</span>
                    </div>
                    <div>
                        <i aria-hidden="true" className="fa fa-ruler fa-lg size" title="size"></i>
                        <span className="fa-sr-only">vote_score</span>
                        <span>${data.vote_score} ft<sup>2</sup></span>
                    </div>
                </div>
            </div>
        </div>`
    );
};

export default MarkerCard;