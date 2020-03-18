import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router-dom';

class Navbar extends Component{
    logout = ()=>{
        Cookie.remove('accessToken');
        this.props.authenticate(false)
        this.props.history.push('/login')
        window.M.toast({html: 'Logout Successful!', classes: "red darken-1"})
    }

    render(){
        return(
            <div className='navbar-fixed'>
                <nav className='white'>     
                    <div className='container'>
                        <div className="nav-wrapper white">
                            <a href="#!" id="logo" className="brand-logo left" style={{backgroundColor: "#00134e"}}>Fly Events Inc</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#" className='black-text'>Events</a></li>
                                <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
                                {   this.props.loggedIn===true?
                                    <li><NavLink to="#" className='black-text' onClick={this.logout}>Logout</NavLink></li>:
                                    <li><NavLink to="login" className='black-text'>Login</NavLink></li>
                                }
                            </ul>
                            
                            <ul className="sidenav" id="mobile-demo">
                                <li><a href="#" className='black-text'>Events</a></li>
                                <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
                                {   
                                     this.props.loggedIn===true?
                                        <li><NavLink to="#" className='black-text'>Logout</NavLink></li>:
                                        <li><NavLink to="login" className='black-text'>Login</NavLink></li>
                                    }
                            </ul>
                        </div>
                   </div>
                </nav>  
            </div>
       );
   }
}

export default withRouter(Navbar);

    //   <div class="navbar-fixed white">
    //         <nav>
    //             <div class="nav-wrapper white">
    //                 <div className='container'>
    //                     <a href="#!" class="brand-logo light-blue darken-4-text">Fly Events Inc</a>
    //                     <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
    //                     <ul class="right hide-on-med-and-down">
    //                         <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
    //                         <li><NavLink to="login" className='black-text'>Login</NavLink></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             <ul className="sidenav" id="mobile-demo">
    //             <li><a href="#" className='black-text'>Events</a></li>
    //             <li><NavLink  to="/create_event" className='black-text'>Create Events</NavLink></li>
    //             <li><NavLink to="/login" className='black-text'>Login</NavLink></li>
    //         </ul>
    //         </nav>
           
            
    //   </div>