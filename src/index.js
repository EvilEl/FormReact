import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import { HashRouter as Router } from "react-router-dom";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUaZbWoeF5ZJs6w3PsAciF7ae6Ns0DOBg",
  authDomain: "reactform-b2327.firebaseapp.com",
  projectId: "reactform-b2327",
  storageBucket: "reactform-b2327.appspot.com",
  messagingSenderId: "99052386962",
  appId: "1:99052386962:web:be9ebc29228ee41916844b",
  measurementId: "G-N8Z21VFYW1",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
