import React from 'react';
import './Card.css';

function Card(props){
    const {value,type} = props;

    let newValue = formatValue(value);
    let typeFigure = formatType(type);

    return (
        <div className="card-small">
            <div className="card-value">
                {newValue}
            </div>
            <div className="card-type">
                {typeFigure}
            </div>
        </div>
    );
}

function formatType(type){
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
    return typeFigure;
}

function formatValue(value){
    let newValue ;
    if(value < 10){
        newValue =parseInt(value,10) + 1;
    }else{
        switch (value){
            case 10:
                newValue = "J"
                break;
            case 11:
                newValue = "Q"
                break;
            case 12:
                newValue = "K"
                break;
            default:
                newValue = value;
        }
    }
    return newValue;

}

export default Card;