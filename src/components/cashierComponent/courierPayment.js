import axios from "axios";
import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

class CourierScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      progress: [],
    };
  }
  componentDidMount = () => {
    this.getProductInformation();
  };

  getProductInformation() {
    axios.get("http://apiCall").then((res) => {
      console.log(res);
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <Sidebar />
        <Navbar />

        <Container>
          <Row>
            <Col lg={3}></Col>
            <Col lg={9}>
              <div className="col-xs-12">
                <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Courier's Payment</h3>
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
                          <Form onSubmit={""}>
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
                                    Courier's Name
                                  </th>

                                  <th
                                    className="sorting"
                                    tabindex="0"
                                    aria-controls="example2"
                                    rowspan="1"
                                    colspan="1"
                                    aria-label="Engine version: activate to sort column ascending"
                                  >
                                    Courier payment price
                                  </th>
                                  <th
                                    className="sorting"
                                    tabindex="0"
                                    aria-controls="example2"
                                    rowspan="1"
                                    colspan="1"
                                    aria-label="bakedProducts: activate to sort column ascending"
                                  >
                                    Employee Role
                                  </th>
                              
                                  <th
                                    className="sorting"
                                    tabindex="0"
                                    aria-controls="example2"
                                    rowspan="1"
                                    colspan="1"
                                    aria-label="sellingProgress: activate to sort column ascending"
                                  >
                                  paying date
                                  </th>
                                </tr>
                              </thead>
                              {/* Table Body */}
                              <tbody>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">EmployeeX</td>
                                  <td className="">250birr</td>
                                  <td className="">Baker</td>
                                  <td>
                                    20/3/20
                                  </td>
                                 
                                </tr>
                              </tbody>
                           
                            </table>
                            <Button
                              variant="primary"
                              type="submit"
                              className="w-20"
                            >
                              Submit Data
                            </Button>
                          </Form>
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
                        <div className="col-sm-7"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CourierScreen;
