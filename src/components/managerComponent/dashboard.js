import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={7}>{/* Admin Dashboard */}</Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
