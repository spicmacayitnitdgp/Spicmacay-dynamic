import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css'
class Header extends Component {
  
   
    render() {
        return (
  
<nav className="navbar navbar-light navbar-expand-lg navbar-template">
       <ul className="navbar-nav flex-row">
            <li className="nav-item" id="face" style={{marginRight:"10px"}}><a className="nav-link px-4"  href="https://www.facebook.com/spicmacaynitd/"><span className="fa fa-facebook"></span></a></li>
            <li className="nav-item" id="insta" style={{marginRight:"10px"}}><a className="nav-link px-4" href="https://www.instagram.com/spic.macay_nitd"><span className="fa fa-instagram"></span></a></li>
            <li className="nav-item" id="utube" style={{marginRight:"10px"}}><a className="nav-link px-4" href="https://www.youtube.com/channel/UCJP84NlZI4fTP20cHPLo7Lw/featured"><span className="fa fa-youtube"></span></a></li>
            <li className="nav-item" id="din" style={{marginRight:"10px"}}><a className="nav-link px-4" href="#"><span className="fa fa-linkedin"></span></a></li>
        </ul>
    <div className="d-flex flex-row order-2 order-lg-3">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="collapse navbar-collapse order-3 order-lg-2" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to='/' style={{fontSize:"20px",fontFamily:"Aeonik"}}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/g' style={{fontSize:"20px",fontFamily:"Aeonik"}}>Gallery</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/o' style={{fontSize:"20px",fontFamily:"Aeonik"}}>Team</Link></li>     
        </ul>
    </div>
</nav>          
        );
    }
}

export default Header;
