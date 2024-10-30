import React from 'react';
import './IdCardStyles.css';


function IdCard(props) {
    return (
        <div className="card">
            <img className="id-card-image" src={props.picture} alt = "profile-pic" />
            <div className="data">
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
            </div>
        </div>
    );
}
export default IdCard;