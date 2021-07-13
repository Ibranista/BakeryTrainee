import React, { Component } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
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
class RegisterProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productType: "",
      productPrice: "",
    };
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
        <Container>
          <Row>
            <Col lg={3}>hello</Col>
            <Col lg={6}>
              <Card border="light" className="bg-white shadow-sm mb-4">
                <Card.Body>
                  <h5 className="mb-4">General information</h5>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group id="productName">
                          <Form.Label>Product Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="productName"
                            placeholder="Enter product name"
                            value={this.state.productName}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group id="productType">
                          <Form.Label>Also Product Type</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="productType"
                            placeholder="Enter product type"
                            value={this.state.productType}
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
                          <Form.Label>Product Price</Form.Label>
                          <Form.Control
                            required
                            type="Number"
                            name="productPrice"
                            placeholder="Enter product price"
                            value={this.state.productPrice}
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

export default RegisterProduct;
