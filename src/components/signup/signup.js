import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import firebase from "firebase/app";

import "./signup.css";
import useForm from "../../utilts/use-form";
import Spinner from "../spinner";

const defaltValues = {
  firstName: "",
  lastName: "",
  password: "",
  password2: "",
  email: "",
};

const SignUp = (props) => {
  const { setIsSibmiting, isSibmiting } = props;

  const createAccount = () => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        history.push("/");
      })
      .finally(() => setIsLoading(false), setIsSibmiting(false))
      .catch((error) => setIsLoading(false));
  };

  const [formFields, onChange, handleSubmit, errors] = useForm(
    createAccount,
    defaltValues,
    setIsSibmiting,
    isSibmiting
  );

  const [isLoading, setIsLoading] = useState(false);

  const { password, email, password2, firstName, lastName } = formFields;

  useEffect(() => {
    return () => {};
  }, []);

  let history = useHistory();

  return (
    <div className="jumbotron">
      <form onSubmit={handleSubmit}>
        <div className="form-row col">
          <div className="col">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => onChange(event)}
              value={firstName}
              name="firstName"
            />
            <span className="error">
              {errors.firstName && "Name must be 6 letters or more"}
            </span>
          </div>
          <div className="col">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => onChange(event)}
              value={lastName}
              name="lastName"
            />
            <span className="error">
              {errors.lastName && "Name must be 6 letters or more"}
            </span>
          </div>
          <div className="col">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={(event) => onChange(event)}
              value={email}
              name="email"
            />
            <span className="error">
              {errors.email && "Email should collect @ symbol and path"}
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
              value={password}
              name="password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="col">
            <label> Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              autoComplete="on"
              onChange={(event) => onChange(event)}
              value={password2}
              name="password2"
            />
            <div className="errors">
              {errors.password2 && <p className="error">{errors.password2}</p>}
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
