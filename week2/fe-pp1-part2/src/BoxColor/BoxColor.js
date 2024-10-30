import React from 'react';
import './styles.css';

export default function BoxColor(props) {

    function rgbconversion(r, g, b) {
        console.log("lähtee käyntiin" + r + g + b);

        const toHex = (value) => {
            const hex = value.toString(16);
            console.log(hex);
            return hex.length === 1 ? '0' + hex : hex;
        };
        console.log(2 + toHex(r))
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    const boxStyle = {
        backgroundColor: rgbconversion(props.r, props.g, props.b),
    };

    return(
        <div style={boxStyle} className="kontti">
            <p>rgb {props.r},{props.g},{props.b}</p>
            <p>{rgbconversion(props.r, props.g, props.b)}</p>
        </div>

    )
}