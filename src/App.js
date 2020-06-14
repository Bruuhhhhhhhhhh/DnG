import React from 'react';
import './App.css';
import Login from "./Components/Login";
import Naslovna from "./Components/Naslovna";

import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route path="/Naslovna" component={Naslovna}></Route>
      </Router>
    </div>
  );
}

export default App;
