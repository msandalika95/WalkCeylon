import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
           <div className = "nav-bar">
            
                <NavLink exact activeClassName = "nav-active" to = "/" style={{ marginRight: 10, color: 'white'}}>Home</NavLink>
                <NavLink activeClassName = "nav-active" to = "/AboutUs" style={{ marginRight: 10, color: 'white'}}>About us</NavLink> 
                <NavLink activeClassName = "nav-active" to = "/ContactUs" style={{ marginRight: 10,color: 'white'}}>Our Services</NavLink> 
                <NavLink activeClassName = "nav-active" to = "/Info" style={{ marginRight: 10, color: 'white'}}>Reviews</NavLink> 
            
           </div>
        </nav>
    )
}

export default Navbar;