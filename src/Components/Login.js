import  React, {Component} from 'react';
import './Login.css';
import axios from 'axios';
import ErrorComponent from './Errors';
import Cookie from 'js-cookie';

class Login extends Component{
    //login handler
    submit = async (e)=>{
      
        e.preventDefault();
        let password = e.target.password.value;
        let email = e.target.email.value
        let credentials = {
            email,
            password
        }
        this.props.fetching(true)
        
        axios.post('/users/login', credentials).then((response)=>{  
            this.props.fetching(false)
            this.props.authenticate(true)
            let data = response.data;
            this.props.authenticate(true)
            Cookie.set("accessToken", data.accessToken)
            this.props.history.push('/create_event')
            window.M.toast({html: 'Login Successful!', classes: "light-blue darken-4"});
        }).catch((err)=>{
            this.props.fetching(false)
            let errorMessage = err.response.data.message
            this.props.addErrors(errorMessage)
        });
    }
    render = ()=>{
       
        return(

            <div className='row' id="wrapper">

                <div className='col s0 l5 valign-wrapper hide-on-med-and-down' id="companyWrapper">
                        
                </div>

                <div className='col s12 l6 valign-wrapper' id="loginWrapper">

                    <form className="" id="loginForm" onSubmit={this.submit} method="Post">
                            {/* Add the preloader if it is loading*/}
                         {
                          this.props.loading===true?
                            <div className="progress" data-testid="progress">
                                <div className="indeterminate"></div>
                            </div>:
                            ""
                        }
                            {/* The error Handling */}
                        {this.props.errors.length> 0 ? <ErrorComponent errors={this.props.errors} removeErrors={this.props.removeErrors}/>: ""}

                        <div className="row center-align">    
                            <span >Login to proceed</span>
                        </div>

                        <div className="row">
                            <div className="input-field col">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="text" className="validate" required/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col ">
                                <i className="material-icons prefix">https</i>
                                <input id="password" type="password" className="validate" required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className='row center-align'>
                            <button className="btn waves-effect waves-light light-blue darken-4" type="submit" name="action" disabled={this.props.loading} >
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>

            </div>

           
        )
    }
   componentDidMount(){
        if(Cookie.get('accessToken')!==undefined){
             this.props.history.push('/create_event');
        }
   }
}

export default Login