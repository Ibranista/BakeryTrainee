import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import { Switch } from "react-router-dom";
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
      </>
    );
  }
}

export default Dashboard;
