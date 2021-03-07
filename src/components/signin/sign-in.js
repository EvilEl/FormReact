import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Spinner from "../spinner";

import firebase from "firebase";

import "./sign-in.css";
import useForm from "../../utilts/use-form";

const defaultValues = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const [formFields, onChange] = useForm(() => {}, defaultValues);
  console.log(formFields);
  const { email, password } = formFields;

  const { setIsAuth } = props;
  const [isLoading, setIsLoading] = useState(false);

  // const onChangeState = (arg, e) => {
  //   arg(e.target.value);
  // };

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => setIsAuth(true))
      .finally(() => setIsLoading(false))
      .catch((error) => console.log(error));
  };

  return (
    <div className="jumbotron">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group row email">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => onChange(event)}
            value={email}
            name="email"
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
            onChange={(event) => onChange(event)}
            value={password}
            name="password"
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
      {isLoading && <Spinner />}
    </div>
  );
};

export default SignIn;
