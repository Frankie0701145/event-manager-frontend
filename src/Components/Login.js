import  React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    render(){
        return(

           

                <div className='row' id="wrapper">

                    <div className='col s0 l5 valign-wrapper hide-on-med-and-down' id="companyWrapper">
                          
                    </div>

                    <div className='col s12 l6 valign-wrapper' id="loginWrapper">

                        <form className="" id="loginForm">
                          
                            <div className="row center-align">    
                                <span >Login to proceed</span>
                            </div>

                            <div className="row">
                                <div className="input-field col">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="text" className="validate"/>
                                    <label for="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col ">
                                    <i className="material-icons prefix">https</i>
                                    <input id="password" type="text" className="validate"/>
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div className='row center-align'>
                                <button class="btn waves-effect waves-light light-blue darken-4" type="submit" name="action">Submit
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

           
        )
    }
}

export default Login