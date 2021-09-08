import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Home,About, Dashboard } from "./components/NewInput";

import HomeButton from "./components/HomeButton";

export default function BasicExample() {

  return (

    <Router>

      <HomeButton />

      <button><Link style={{ padding: "30px" }} to="/about">Hook</Link></button>

      <button><Link style={{ padding: "30px" }} to="/dashboard">User input parameters</Link></button>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard/:name">
          <Dashboard data/>
        </Route>
      </Switch>

    </Router>

    
  );
}