import './App.css';

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
