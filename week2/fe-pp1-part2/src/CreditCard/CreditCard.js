import React from 'react';
import visalogo from './images/visa.png';
import mclogo from './images/master.png';
import './styles.css';

export default function CreditCard(props) {
    console.log(props);

    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        
    };


    return(
        <div className="card"  style={cardStyle}>
            <img className="logo" src={logo(props.type)}/>                
            
            <div className="cardnumber">
                <p> {cardNumber(props.number)}</p>
            </div>
            <div className="carddetails">
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <div className="ownercontainer">
                <p className="owner">{props.owner}</p>
            </div>
        </div>
    );
}

const logo = (cardType) => {
    switch (cardType) {
        case 'Visa':
            return visalogo;
        
        case 'Master Card':
            return mclogo;
    }
}

const cardNumber = (cardNumber) => {
    const lastDigits = cardNumber.slice(-4);
    return `**** **** **** ${lastDigits}`
}