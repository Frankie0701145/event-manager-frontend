import React, {Component} from 'react';
import './App.css';
import Navbar  from "./Components/Navbar";
import Events from "./Components/Events";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateEvent from './Components/CreateEvent'
import Login from './Components/Login'
import Cookie from 'js-cookie';
class App extends Component {
    
  constructor(props){
    super(props);
    this.state= {
        loggedIn: false,
        loading: false,
        errors: [],
        successMessages: []
    };
  }
  fetching = (bool)=>{
      this.setState({...this.state, loading: bool})
  }
  authenticate = (bool)=>{
      this.setState({...this.state, loggedIn: bool})
  }

  addErrors = (error)=>{
    this.setState({...this.state, errors: [...this.state.errors, error] })
  }

  removeErrors = ()=>{
    this.setState({...this.state, errors: []})
  }

  removeSuccessMessages = ()=>{
    this.setState({...this.state, successMessages: []})
  }

  render= ()=>{
    
    return (
      <div className="App" id="appWrapper">
          
          <Router>
              <Navbar {...this.state} authenticate={this.authenticate}/>
              <Switch>
                <Route exact path='/create_event' component={
                      (props)=><CreateEvent {...props} {...this.state} fetching={this.fetching} addErrors={this.addErrors} removeErrors={this.removeErrors}/>
                  }></Route>  
                  
                <Route exact path='/login' component={
                      (props)=><Login {...props} {...this.state} fetching={this.fetching} authenticate={this.authenticate} addErrors={this.addErrors} removeErrors={this.removeErrors}/>
                  }></Route> 
                <Route exact path='/events' component={
                    (props)=><Events {...props}></Events>
                }></Route>
              </Switch>   
          </Router>  
      </div>
    );
  }
  componentDidMount(){
      if(this.state.loggedIn === false && Cookie.get('accessToken')!== undefined){
          this.authenticate(true)
      }
  }
  
}

export default App;


