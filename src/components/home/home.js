import React, { useState } from "react";

import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner";

import "./home.css";

const Home = () => {
  const [isLoadding, setIsLoading] = useState(true);

  const loadingChange = () => {
    setIsLoading(false);
  };
  setTimeout(loadingChange, 3000);

  return isLoadding ? (
    <Spinner />
  ) : (
    <div className="jumbotron">
      <div className="row">
        <h1>Welcome to your account</h1>
        <div className="col">
          <span className="name">{null}</span>
          <span className="name">{null}</span>
        </div>
      </div>
      <div className="row link">
        <Link to="/" className="btn btn-outline-primary link">
          sign out
        </Link>
      </div>
    </div>
  );
};

export default Home;
