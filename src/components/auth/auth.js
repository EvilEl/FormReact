import React from "react";

import { Link } from "react-router-dom";

import "./auth.css";

const Auth = () => {
  return (
    <div className="jumbotron sign">
      <Link to="/signin" className="btn btn-outline-success right">
        Sign in
      </Link>
      <Link to="/signup" className="btn btn-outline-info">
        Sign up
      </Link>
    </div>
  );
};

export default Auth;
