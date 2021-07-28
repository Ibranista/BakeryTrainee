import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.auth;
    return (
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={7}>
            {user.name === "Admin" ? "Admin" : "Cashier"} {user.name}
            {/* Admin */}
            {/* <div className="row"> */}
            <Row>
                <div className="info-box">
                  <span className="info-box-icon bg-aqua">
                    <i className="ion ion-ios-gear-outline"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Total Sales</span>
                    <span className="info-box-number">900 products</span>
                  </div>
                </div>
                <div className="info-box">
                  <span className="info-box-icon bg-red">
                    <i className="fa fa-google-plus"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Profit Made</span>
                    <span className="info-box-number">$300</span>
                  </div>
                </div>

              <div className="clearfix visible-sm-block"></div>

                <div className="info-box">
                  <span className="info-box-icon bg-green">
                    <i className="ion ion-ios-cart-outline"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Profit Made</span>
                    <span className="info-box-number">$760</span>
                  </div>
                </div>
                <div className="info-box">
                  <span className="info-box-icon bg-yellow">
                    <i className="ion ion-ios-people-outline"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Loss</span>
                    <span className="info-box-number">$0</span>
                  </div>
                </div>
              
                <div className="info-box">
                  <span className="info-box-icon bg-red">
                    <i className="ion ion-ios-people-outline"></i>
                  </span>

                  <div className="info-box-content">
                    <span className="info-box-text">Products Not Recommended To Bake Again</span>
                    <span className="info-box-number">
                      <ul>
                        <li>Donuts</li>
                      </ul>
                    </span>
                  </div>
                </div>
              
            </Row>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
