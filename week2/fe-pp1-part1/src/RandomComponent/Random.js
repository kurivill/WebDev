import React from 'react';

export default function Random(props) {
    return(
       <p>Random value between {props.min} and {props.max} &gt {rng(props.min, props.max)}</p>
    )
}

const rng = (min, max) => {
    const mini = Math.ceil(min);
    const maxi = Math.floor(max);
    return Math.floor(Math.random() * (maxi - mini + 1) + mini);
};