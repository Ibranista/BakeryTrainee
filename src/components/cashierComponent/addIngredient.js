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
class AddIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientName: "",
      ingredientPrice: "",
      ingredientWeight: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { ingredientName, ingredientPrice, ingredientWeight } = this.state;

    axios
      .post("http://localhost:13000/dashboard/ingredients/addIngredient", {
        ingredientName: ingredientName,
        ingredientPrice: ingredientPrice,
        ingredientWeight: ingredientWeight,
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/dashboard/ingredients");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(ingredientName, ingredientPrice, ingredientWeight);
  };

  render() {
    return (
      <>
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
                        <Form.Group id="ingredientName">
                          <Form.Label>Ingredient Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="ingredientName"
                            placeholder="Enter ingredient name"
                            value={this.state.ingredientName}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group id="ingredientPrice">
                          <Form.Label>Also Ingredient Price</Form.Label>
                          <Form.Control
                            required
                            type="Number"
                            name="ingredientPrice"
                            placeholder="Enter ingredient price"
                            value={this.state.ingredientPrice}
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
                          <Form.Label> Ingredient Weight</Form.Label>
                          <Form.Control
                            required
                            type="Number"
                            name="ingredientPrice"
                            placeholder="Enter ingredient weight"
                            value={this.state.ingredientWeight}
                            onChange={this.onChange}
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row></Row>
                    <Button variant="primary" type="submit" className="w-100">
                      Create ingredient
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

export default AddIngredient;
