import React, { Component } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Dropdown } from "react-bootstrap";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Container,
} from "@themesberg/react-bootstrap";
import axios from "axios";
class RegisterEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { productName, productType, productPrice } = this.state;

    axios
      .post("http://localhost:13000/dashboard/products/registerProduct", {
        productName: productName,
        productType: productType,
        productPrice: productPrice,
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/dashboard/products");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(productName, productType, productPrice);
  };

  render() {
    return (
      <>
        <Sidebar />
        <Navbar />
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
              <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                  <h5 className="mb-4">General information</h5>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group id="productName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="firstName"
                            placeholder="Enter last name"
                            // value={this.state.productName}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group id="productType">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            // value={this.state.productType}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3"></Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md={6} className="mb-3">
                        <Form.Group id="gender">
                          <Form.Label>Choose Employee Role</Form.Label>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              Employee Role
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Cashier
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Bakery Manager
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Baker
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group id="productName">
                          <Form.Label>Date Employee Was Hired</Form.Label>
                          <Form.Control
                            required
                            type="date"
                            name="hiringDate"
                            // value={this.state.productName}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row></Row>
                    <Button variant="primary" type="submit" className="w-100">
                      Create product
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RegisterEmployee;
