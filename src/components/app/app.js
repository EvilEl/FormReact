import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import Auth from "../auth";
import SignIn from "../signin";
import SignUp from "../signup";
import Home from "../home/home";

import firebase from "firebase";

const App = () => {
  useEffect(() => {
    const db = firebase.database();
    console.log(db);
  });

  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/signin/">
        <SignIn />
      </Route>
      <Route path="/signup/">
        <SignUp />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
