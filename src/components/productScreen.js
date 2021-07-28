import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { Message } from "./Message.js";
import { Loader } from "./Loader.js";
import { Form } from "react-bootstrap";
import Sidebar from "./Sidebar.js";
import Navbar from "./Navbar.js";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import TransactionsTable from "./Tables/TransactionTables.js";
class DisplayProducts extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Navbar />
        <Row>
          <Col lg={4}></Col>
          <Col>
            {" "}
            <Link to="/registerProduct">Add new product</Link>
          </Col>
        </Row>

        <TransactionsTable />
      </>
    );
  }
}

export default DisplayProducts;
