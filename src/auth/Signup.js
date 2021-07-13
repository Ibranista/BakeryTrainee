import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../actions/authActions.js";
import classnames from "classnames";
import {
  faAngleLeft,
  faEnvelope,
  faHatCowboy,
  faPersonBooth,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import BgImage from "../assets/img/illustrations/signin.svg";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      role: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(newUser);
    console.log(this.state.errors);
    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount() {
    // If logged in and user navigates to Signup page, it should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <p className="text-center">
             
            </p>
            <Row
              className="justify-content-center form-bg-image"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              <Col
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Create an account</h3>
                  </div>
                  <Form onSubmit={this.onSubmit} className="mt-4">
                    <Form.Group id="name" className="mb-4">
                      <Form.Label>Your Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faPersonBooth} />
                        </InputGroup.Text>
                        <Form.Control
                          onChange={this.onChange}
                          autoFocus
                          required
                          type="text"
                          id="name"
                          error={errors.name}
                          value={this.state.name}
                          placeholder="name"
                          className={classnames("", {
                            invalid: errors.name,
                          })}
                        />
                        <span className="red-text">{errors.name}</span>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Your Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          onChange={this.onChange}
                          autoFocus
                          required
                          type="email"
                          id="email"
                          error={errors.email}
                          value={this.state.email}
                          placeholder="example@company.com"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="role" className="mb-4">
                      <Form.Label>Your Role</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          onChange={this.onChange}
                          autoFocus
                          required
                          type="text"
                          id="role"
                          error={errors.role}
                          value={this.state.role}
                          placeholder="role"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          onChange={this.onChange}
                          required
                          type="password"
                          id="password"
                          error={errors.password}
                          value={this.state.password}
                          placeholder="Password"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group id="confirmPassword" className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control
                          onChange={this.onChange}
                          required
                          type="password"
                          id="password2"
                          error={errors.password2}
                          placeholder="Confirm Password"
                        />
                      </InputGroup>
                    </Form.Group>
                    <FormCheck type="checkbox" className="d-flex mb-4">
                      <FormCheck.Input required id="terms" className="me-2" />
                      <FormCheck.Label htmlFor="terms">
                        I agree to the{" "}
                        <Card.Link>terms and conditions</Card.Link>
                      </FormCheck.Label>
                    </FormCheck>

                    <Button variant="primary" type="submit" className="w-100">
                      Sign up
                    </Button>
                  </Form>

                  <div className="mt-3 mb-4 text-center">
                    <span className="fw-normal">or</span>
                  </div>
                  <div className="d-flex justify-content-center my-4">
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-facebook me-2"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pill text-twitter me-2"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pil text-dark"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">
                      Already have an account?
                      <Card.Link as={Link} to="./signin" className="fw-bold">
                        {` Login here `}
                      </Card.Link>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Signup));
