import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import { Switch } from "react-router-dom";
import Landingpage from "./components/Landingpage.js";
import Navbar from "./components/Navbar";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Sidebar />
        <Navbar className="" />
        <Landingpage />
      </>
    );
  }
}

export default Dashboard;
