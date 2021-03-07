import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Auth from "../auth";
import SignIn from "../signin";
import SignUp from "../signup";
import Home from "../home/home";

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  const [isSibmiting, setIsSibmiting] = React.useState(false);

  return !isAuth ? (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Route path="/signin/">
        <SignIn setIsAuth={setIsAuth} />
      </Route>
      <Route path="/signup/">
        <SignUp setIsSibmiting={setIsSibmiting} isSibmiting={isSibmiting} />
      </Route>
      <Redirect from="/" to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/">
        <Home setIsAuth={setIsAuth} />
      </Route>
      <Redirect from="/" to="/" />
    </Switch>
  );
};

export default App;
