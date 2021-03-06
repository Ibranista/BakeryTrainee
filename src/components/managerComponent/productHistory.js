import React, { Component } from "react";

import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
// personal styles
var divStyle = {
  margin: "8% 8%",
};

class ProductHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
      <Sidebar/>
      <Navbar/>
        <Container>
          <Row>
            <Col lg={2}></Col>
            <Col lg={7}>
              <div className="col-xs-12" style={divStyle}>
                <div className="box mr-8">
                  <div className="box-header">
                    <h4>Reports From Cashier</h4>
                  </div>
                  <div className="box-body">
                    <div
                      id="example2_wrapper"
                      className="dataTables_wrapper form-inline dt-bootstrap"
                    >
                      <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6"></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="example2"
                            className="table table-bordered table-hover dataTable"
                            role="grid"
                            aria-describedby="example2_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_asc"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Rendering engine: activate to sort column descending"
                                  aria-sort="ascending"
                                >
                                  Product Name
                                </th>

                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Engine version: activate to sort column ascending"
                                >
                                  Product Price
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="bakedProducts: activate to sort column ascending"
                                >
                                  Baked Products
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="soldProducts: activate to sort column ascending"
                                >
                                  Sold Products
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="sellingProgress: activate to sort column ascending"
                                >
                                  Profit Made
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="sellingProgress: activate to sort column ascending"
                                >
                                  Loss
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="example2"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="sellingProgress: activate to sort column ascending"
                                >
                                  Suggestion Status
                                </th>
                              </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                              <tr><td>Date:Monday/20/2021</td></tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1">xProduct</td>
                                <td className="">$25</td>
                                <td className="">1</td>
                                <td>20</td>
                                <td>
                                  {/* progress bar */}
                                  <div class="progress progress-xs">
                                    <div
                                      className="progress-bar progress-bar-danger"
                                      style={{ width: "55%" }}
                                    ></div>
                                  </div>
                                </td>
                                <td>20%</td>
                                <td>
                                  <div class="progress progress-xs">
                                    <div
                                      className="progress-bar progress-bar-danger"
                                      style={{ width: "55%" }}
                                    ></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th rowspan="1" colspan="1">
                                  Product Name
                                </th>
                                <th rowspan="1" colspan="1">
                                  Product Price
                                </th>

                                <th rowspan="1" colspan="1">
                                  Baked products
                                </th>
                                <th rowspan="1" colspan="1">
                                  Sold Products
                                </th>
                                <th rowspan="1" colspan="1">
                                  Profit
                                </th>
                                <th rowspan="1" colspan="1">
                                  Loss
                                </th>
                                <th rowspan="1" colspan="1">
                                  Suggestion Status
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-5">
                          <div
                            className="dataTables_info"
                            id="example2_info"
                            role="status"
                            aria-live="polite"
                          ></div>
                        </div>
                        <div className="col-sm-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* From admin dashboard */}
              {/* <h1>Admin Dashboard</h1>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion> */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProductHistory;
