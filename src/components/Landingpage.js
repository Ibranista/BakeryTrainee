import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
  Container,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.auth;

    return (
      <>
        <Container>
          <Row>
            <Col lg={3} style={{ backgroundColor: "skyblue" }}></Col>
            <Col lg={6}>
              <h1>Landing Page {user.name}</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
Landingpage.propTypes={
  logoutUser:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}
  const mapStateToProps=(state)=>({
    auth:state.auth,
  })
export default connect(mapStateToProps,{logoutUser})(Landingpage);
