import React from 'react'

import "./website.css"
import Web from './images/Website.png'
const Website = (props) => {
    console.log(props)
    return(
        <div className="container">
            <img  className="center-image " src={Web} alt="..." />
        </div>
    )
}

export default Website;