import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends Component {
  
   
    render() {
      console.log(this.props.user.userData)
        return (
  
               
               <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                   <a class="navbar-brand" href="#">                                                               </a>

              <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#collapsibleNavbar"  >
                <span className="navbar-toggler-icon" ></span>
              </button>
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/">HOME</Link>
                  </li>
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/o">MEMBERS</Link>
                  </li>
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/virasat">VIRASAT</Link>
                  </li>
                  <li className="nav-item">
                  <Link className ="nav-link" style={{fontFamily:"Times new roman",fontSize:"15px"}} to="/g">GALLERY</Link>
                  </li>
                  </ul>
             </div>  
            </nav>
            
        );
    }
}

const mapStateToProps=(state)=>{
    return{
      user:state.member,
    }
      
}

export default connect(mapStateToProps)(Header);