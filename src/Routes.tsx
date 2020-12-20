import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { Hi } from "./pages/Hi";
import { Me } from "./pages/Me";

export const Routes = () => {
  return (
    <Router>
      <div>
        <Link to="/hi">Hi</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/me">Me</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/hi" component={Hi} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};
