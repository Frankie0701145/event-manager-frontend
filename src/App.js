import React from 'react';
import './App.css';
import Navbar  from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateEvent from './Components/CreateEvent'
import Login from './Components/Login'
function App() {
  return (
    <div className="App">
        
        <Router>
            <Navbar/>
            <Switch>
              <Route path='/create_event' component={CreateEvent}></Route>  
              <Route path='/' component={Login}></Route> 
            </Switch>   
        </Router>  
    </div>
  );
}

export default App;
