import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
class payrollScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Sidebar />
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={7}>
              <h4>Payroll Screen</h4>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default payrollScreen;
