import React, { useState } from "react";

import { Redirect } from "react-router";

import { Link } from "react-router-dom";

import firebase from "firebase";

import "./sign-in.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const onChangeState = (arg, e) => {
    arg(e.target.value);
  };

  const clearState = () => {
    setEmail("");
    setPassword("");
    setIsAuth(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => clearState())
      .catch((error) => console.log(error));
  };
  console.log(isAuth);
  if (isAuth) {
    return <Redirect push to="/home" />;
  }
  return (
    <div className="jumbotron">
      <form onSubmit={handleSubmit}>
        <div className="form-group row email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => onChangeState(setEmail, e)}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group pass">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => onChangeState(setPassword, e)}
            value={password}
          />
        </div>
        <div className="row btnLink">
          <button type="submit" className="btn btn-outline-primary right">
            Sign In
          </button>
          <Link to="/" className="btn btn-outline-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
