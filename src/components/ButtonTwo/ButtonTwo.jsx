import React from 'react'
import './ButtonTwo.css'

const ButtonTwo = ({label}) => {
    return (
        <button className="hero-btn hero-btn-outline">
            {label} <span className="hero-arrow">→</span>
        </button>
    )
}

export default ButtonTwo