import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SideBar from "./sidebars/FMsidebar.js";
import CsideBar from "./sidebars/Csidebar.js";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.auth;
    return (
      <>
        {user.role === "Finance Manager" ? (
          <SideBar />
        ) : user.role === "Cashier" ? (
          <CsideBar />
        ) : (
          <h1>Hello {user.role}</h1>
        )}
      </>
    );
  }
}

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Sidebar);
