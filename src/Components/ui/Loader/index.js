import React from 'react';
import './style.css'

const Loader = () => {
    return (
        <div className="container">
            {[...Array[5].keys()].map(() => (
                <div className="dot"></div>
            ))}
        </div>
    )
}

export default Loader
