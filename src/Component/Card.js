import React from 'react';
import './Card.css';

function Card(props){
    const {value,type} = props;

    let typeFigure = "";

    switch(type){
        case 0:
            typeFigure = "♠️"
            break;
        case 1:
            typeFigure = "♥️"
            break;
        case 2:
            typeFigure = "♣️"
            break;
        case 3:
            typeFigure = "♦️"
            break;
        default:
            throw new Error("Card's type not right ");
    }

    return (
        <div className="card-small">
            <div className="card-value">
                {value}
            </div>
            <div className="card-type">
                {typeFigure}
            </div>
        </div>
    );
}

export default Card;