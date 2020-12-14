import React from 'react';
import './input.css'

export default function Input(props) {
    const { variant = 'name', children, ...rest } = props
    return (
        <div className={`input ${variant}`} {...rest} >
            <label for={variant}>{variant}</label>
            <input type="text" id={variant}name={variant}/>
        </div>
    )
}

