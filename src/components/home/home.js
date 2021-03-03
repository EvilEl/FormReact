import React from "react";

import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  const { firstName, lastName } = JSON.parse(localStorage.getItem("Name"));
  return (
    <div className="jumbotron">
      <div className="row">
        <h1>Welcome to your account</h1>
        <div className="col">
          <span className="name">{firstName}</span>
          <span className="name">{lastName}</span>
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
