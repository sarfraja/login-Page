import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from "./components/Login.js";
import SignUp from "./components/Signup";
import Home from './components/Home';

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/home" component={Home} />
        </Switch>
        </Router>
        
        
      </div>
    );
  }
}

export default App;


