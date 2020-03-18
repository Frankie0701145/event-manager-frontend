import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';
const Navbar = (props)=>{
    return(
        <div>

            <nav className="white pushpin">
                <div className= "container">
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo black-text">Fly Events Inc</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#" className='black-text'>Events</a></li>
                            <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
                            <li><a href="#" className='black-text'>Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#" className='black-text'>Events</a></li>
                <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
                <li><a href="#" className='black-text'>Login</a></li>
            </ul>
        </div>
    )
}


export default Navbar;