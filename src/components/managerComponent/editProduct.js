import React, { Component } from "react";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productType: "",
      productPrice: "",
    };
  }

  componentDidMount = () => {
    this.getProductById();
  };

  // To get employee based on ID
  getProductById() {
    axios
      .get(
        "http://localhost:13000/employees/findProduct/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          productName: response.data.productName,
          productType: response.data.productType,
          productPrice: response.data.productPrice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { productName, productType, productPrice } = this.state;
    axios
      .post(
        "http://localhost:13000/dashboard/products/editProduct/" +
          this.props.match.params.id,
        {
          productName: productName,
          productType: productType,
          productPrice: productPrice,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/dashboard/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            Product Name
            <input
              name="productName"
              type="text"
              value={this.state.productName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Product Type
            <input
              name="productType"
              type="text"
              value={this.state.productType}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Product Price
            <input
              name="productPrice"
              type="Number"
              value={this.state.productPrice}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />

          <br />
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default EditProduct;
