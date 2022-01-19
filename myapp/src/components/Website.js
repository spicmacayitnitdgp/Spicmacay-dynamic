import React from 'react'
import Web from './images/Website.png'
const Website = (props) => {
    console.log(props)
    return(
        <div className="container">
            <img src={Web} className="d-block w-100" alt="..." />
        </div>
    )
}

export default Website;