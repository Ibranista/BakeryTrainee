import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/signup">SignUp</Link>
      <br />
      <Link to="/hello">Hello</Link>
      <br />
      <Link to="/signin">LogIn</Link>
      <br />
    </div>
  );
};

export default HomeScreen;
