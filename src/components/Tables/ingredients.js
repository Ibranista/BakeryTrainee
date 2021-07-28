import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Col,
  Row,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

import { Link } from "react-router-dom";
import axios from "axios";

var divStyle = {
  margin: "8% 8%",
};

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }

  componentDidMount = () => {
    this.getIngredientList();
  };

  getIngredientList() {
    axios
      .get("http://localhost:13000/dashboard/ingredients")
      .then((response) => {
        console.log(response);
        this.setState({
          ingredients: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { ingredients } = this.state;
    return (
      <>
        <Sidebar />
        <Navbar />
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={9}>
              <Link to="/dashboard/ingredients/addIngredient">
                Add Product Ingredient
              </Link>
              <div style={divStyle}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Ingredient Name</th>
                      <th>Ingredient Price</th>
                      <th>Ingredient Weight</th>
                      <th>Action</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients &&
                      ingredients.map((products, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{products.ingredientName}</td>
                            <td>{products.ingredientPrice}</td>
                            <td>{products.ingredientWeight}</td>
                            <td>
                              <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle
                                  as={Button}
                                  split
                                  variant="link"
                                  className="text-dark m-0 p-0"
                                >
                                  <span className="icon icon-sm">
                                    <FontAwesomeIcon
                                      icon={faEllipsisH}
                                      className="icon-dark"
                                    />
                                  </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      className="me-2"
                                    />
                                    <Link to="/dashboard/products">
                                      View Details
                                    </Link>
                                  </Dropdown.Item>{" "}
                                  <Dropdown.Item>
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      className="me-2"
                                    />
                                    <Link
                                      to={
                                        "/dashboard/products/editProduct/" +
                                        products._id
                                      }
                                    >
                                      Edit
                                    </Link>
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="text-danger"
                                    onClick={() =>
                                      this.deleteProduct(products._id)
                                    }
                                  >
                                    <FontAwesomeIcon
                                      icon={faTrashAlt}
                                      className="me-2"
                                    />
                                    Remove
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Ingredients;
