import React, { useState, useEffect } from "react";

import { Redirect } from "react-router";

import { Link } from "react-router-dom";

import firebase from "firebase";

import "./signup.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");

  const [validRepeatPass, setValidPass] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validFistName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [isSucces, setIsSucces] = useState(false);

  useEffect(() => {}, [password, repeatPassword, email, lastName, firstName]);

  const onChange = (onChangeSetState, event) => {
    const value = event.target.value;
    onChangeSetState(value);
  };

  const cancelState = () => {
    setIsSucces(true);
    setFirstName("");
    setLastName("");
    setPassword("");
    setRepeatPassword("");
    setEmail("");
    alert("Успешная регистрация");
  };

  const userDate = {
    firstName,
    lastName,
  };

  const handleSubmit = (e) => {
    const regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;
    const regName = /^([a-zA-Z-А-Яа-я]{6,16})$/;

    if (password === repeatPassword) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }

    if (regEmail.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (regPassword.test(password)) {
      if (password === repeatPassword) {
        setValidPassword(true);
      }
    } else {
      setValidPassword(false);
    }

    if (regName.test(firstName)) {
      setValidFirstName(true);
    } else {
      setValidFirstName(false);
    }
    if (regName.test(lastName)) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    }

    e.preventDefault();
    if (!validFistName) {
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => cancelState())
      .catch((error) => console.log("erorr"));
    localStorage.setItem("Name", JSON.stringify(userDate));
  };

  if (isSucces) {
    return <Redirect push to="/" />;
  }
  return (
    <div className="jumbotron">
      <form onSubmit={handleSubmit}>
        <div className="form-row col">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="FirstName"
              onChange={(event) => onChange(setFirstName, event)}
              value={firstName}
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
              onChange={(event) => onChange(setLastName, event)}
              value={lastName}
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
              onChange={(event) => onChange(setEmail, event)}
              value={email}
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
              id="inputPassword4"
              onChange={(event) => onChange(setPassword, event)}
              value={password}
            />
          </div>
          <div className="col">
            <label> Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              onChange={(event) => onChange(setRepeatPassword, event)}
              value={repeatPassword}
            />
            <div className="errors">
              <span className="error">
                {!validRepeatPass && "Wrong password."}
              </span>
              <span className="error">
                {!validPassword &&
                  "Password must contain at least six numbers, letters and symbols."}
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
    </div>
  );
};

export default SignUp;
