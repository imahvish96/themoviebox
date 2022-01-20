import React from 'react'

const Loader = () => {
    return (
        <div class="container">
            {[...Array[5].keys()].map(() => (
                <div className="dot"></div>
            ))}
        </div>
    )
}

export default Loader
