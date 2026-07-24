import React from 'react'
import './ButtonThree.css'

const ButtonThree = ({ label }) => {
    return (
        <button className="hero-btn hero-btn-dark">
            <span className="btn-play">▶</span>
            {label}
        </button>
    )
}

export default ButtonThree