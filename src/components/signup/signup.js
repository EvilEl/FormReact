import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import Spinner from "../spinner";

import firebase from "firebase/app";

import "./signup.css";
import useForm from "../use-form";

const SignUp = () => {
  const { onChange, formFields } = useForm();

  let history = useHistory();

  const { password, email, repeatPassword, firstName, lastName } = formFields;
  const [validRepeatPass, setValidRepeatPass] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validFistName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const patternEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
  const patternPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;
  const patternName = /^([a-zA-Z-А-Яа-я]{6,16})$/;

  useEffect(() => {
    return () => {};
  }, []);

  const createAccount = () => {
    if (validRepeatPass) {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(formFields.email, formFields.password)
        .then((res) => {
          history.push("/");
        })
        .finally(() => setIsLoading(false))
        .catch((error) => setIsLoading(false));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (patternName.test(firstName)) {
      setValidFirstName(true);
    } else {
      setValidFirstName(false);
    }
    if (patternName.test(lastName)) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    }
    if (patternEmail.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (patternPassword.test(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    if (password === repeatPassword) {
      setValidRepeatPass(true);
    } else {
      setValidRepeatPass(false);
    }
    if (repeatPassword !== password) {
      return;
    }

    createAccount();
  };

  return (
    <div className="jumbotron">
      <form onSubmit={handleSubmit}>
        <div className="form-row col">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="FirstName"
              onChange={(event) => onChange(event)}
              value={formFields.firstName}
              name="firstName"
            />
            <span className="error">
              {!validFistName && "Name must be 6 letters or more"}
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="LastName"
              onChange={(event) => onChange(event)}
              value={formFields.lastName}
              name="lastName"
            />
            <span className="error">
              {!validLastName && "Name must be 6 letters or more"}
            </span>
          </div>
          <div className="col">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={(event) => onChange(event)}
              value={formFields.email}
              name="email"
            />
            <span className="error">
              {!validEmail && "Email should collect @ symbol and path"}
            </span>
          </div>
          <div className="col">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword5"
              autoComplete="on"
              onChange={(event) => onChange(event)}
              value={formFields.password}
              name="password"
            />
          </div>
          <div className="col">
            <label> Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              autoComplete="on"
              onChange={(event) => onChange(event)}
              value={formFields.repeatPassword}
              name="repeatPassword"
            />
            <div className="errors">
              <span className="error">
                {!validRepeatPass && "Confirm password."}
              </span>
              <span className="error">
                {!validPassword &&
                  "Password must contain at least six numbers, lowercase and uppercase, letters and symbols."}
              </span>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-outline-success right">
              success
            </button>
            <Link to="/" type="submit" className="btn btn-outline-primary">
              back
            </Link>
          </div>
        </div>
      </form>
      {isLoading && <Spinner />}
    </div>
  );
};

export default SignUp;
