import axios from "axios";

class ProductService {
  deleteProduct(id) {
    axios
      .get("http://localhost:13000/dashboard/products/deleteProduct/" + id)
      .then(() => {
        console.log("Product Successfully Deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default ProductService;
