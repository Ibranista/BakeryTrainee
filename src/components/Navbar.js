import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faSearch,
  faSignOutAlt,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  Row,
  Col,
  Nav,
  Form,
  Image,
  Navbar,
  Dropdown,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";


import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions.js";

class Navbars extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    console.log("user: ", user);
    console.log(user.role);
    return (
      <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0 ">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-sm-between w-100">
            <div className="d-flex align-items-center">
              <Form className="navbar-search ">
                <Form.Group id="topbarSearch">
                  <InputGroup className="input-group-merge search-bar">
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Search" />
                  </InputGroup>
                </Form.Group>
              </Form>
            </div>
            <Nav className="align-items-center">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                  <div className="media d-flex align-items-center">
                    <Image
                      src={"Profile.jpg"}
                      className="user-avatar md-avatar rounded-circle"
                    />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold">
                        {user.name}
                        <br />
                        {user.role}
                      </span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="text-danger me-2"
                    />{" "}
                    <button
                      onClick={this.onLogoutClick}
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Logout
                    </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
    );
  }
}

Navbars.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbars);
