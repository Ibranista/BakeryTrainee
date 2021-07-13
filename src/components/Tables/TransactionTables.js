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

import { Link } from "react-router-dom";
import axios from "axios";

import ProductService from "../Service.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

var divStyle = {
  margin: "8% 8%",
};

class TransactionsTable extends Component {
  constructor(props) {
    super(props);
    this.productService = new ProductService();
    this.state = {
      products: [],
    };
  }
  componentDidMount = () => {
    this.getProductList();
  };

  getProductList() {
    axios
      .get("http://localhost:13000/dashboard/products")
      .then((response) => {
        console.log(response);
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // To delete any product
  deleteProduct(prdid) {
    this.productService.deleteProduct(prdid);
    this.getProductList();
  }
  render() {
    const { products } = this.state;
    const { user } = this.props.auth;
    return (
      <>
        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={9}>
              <div style={divStyle}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Product Type</th>
                      <th>Product Price</th>
                      <th>Profit</th>
                      <th>Action</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((products, i) => {
                        return (
                          <tr key={i}>
                            <td>{i}</td>
                            <td>{products.productName}</td>
                            <td>{products.productType}</td>
                            <td>{products.productPrice}</td>
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
                                  </Dropdown.Item>

                                  {user.role === "Finance Manager" ? (
                                    <>
                                      {" "}
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
                                    </>
                                  ) : (
                                    "Null"
                                  )}
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

TransactionsTable.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(TransactionsTable);
