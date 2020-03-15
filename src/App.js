import React from 'react';
import './App.css';
import Navbar  from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateEvent from './Components/CreateEvent'
function App() {
  return (
    <div className="App">
        
        <Router>
            <Navbar/>
            <Route path='/create_event' component={CreateEvent}></Route>   
        </Router>  
    </div>
  );
}

export default App;
