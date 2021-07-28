import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "../auth/Signup.js";
import Signin from "../auth/Signin.js";
import Dashboard from "../dashBoard.js";
// Following imports are for logging out and other purposes
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions.js";
import PrivateRoute from "../protectedRoutes/privateRoute.js";
import store from "../store.js";
import DisplayProducts from "../components/productScreen.js";
import RegisterProduct from "../components/managerComponent/registerProductScreen.js";
import EditProduct from "../components/managerComponent/editProduct.js";
import DisplayIngredients from "../components/Tables/ingredients.js";
import AddIngredient from "../components/cashierComponent/addIngredient.js";
import ReportScreen from "../components/cashierComponent/reportScreen.js";
import ReportedScreen from "../components/managerComponent/reportedScreen.js";
import ProductHistory from "../components/managerComponent/productHistory.js";
import dashboard from "../components/managerComponent/dashboard.js";
import CourierScreen from "../components/cashierComponent/courierPayment.js";
import payrollScreen from "../components/cashierComponent/payrollPayment.js";
import RegisterEmployee from "../components/cashierComponent/registerEmployees.js";
import CourierRegistration from "../components/managerComponent/registerCouriers.js";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class AllRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <Router>
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/products" component={DisplayProducts} />

          {/* Routes for Both */}

          <PrivateRoute path="/dashboard" component={dashboard} />
          <PrivateRoute path="/Courierpayment" component={CourierScreen} />
          <PrivateRoute path="/registerCourier" component={CourierRegistration} />
          <PrivateRoute path="/payroll" component={payrollScreen} />

          {/* Cashier Routes */}
          <PrivateRoute path="/ingredients" component={DisplayIngredients} />
          <PrivateRoute path="/reportScreen" component={ReportScreen} />
          <PrivateRoute path="/registerEmployees" component={RegisterEmployee} />
          {/* <PrivateRoute
            path="/dashboard/products/editIngredient/:id"
            component={EditProductIngredient}
          /> */}
          <PrivateRoute
            path="/dashboard/ingredients/addIngredient"
            component={AddIngredient}
          />

          {/* Finance Manager Routes */}

          <PrivateRoute
            path="/dashboard/products/editProduct/:id"
            component={EditProduct}
          />
          <PrivateRoute
            exact
            path="/registerProduct"
            component={RegisterProduct}
          />
          <PrivateRoute exact path="/reports" component={ReportedScreen} />
          <PrivateRoute
            exact
            path="/ProductHistory"
            component={ProductHistory}
          />
          {/* Public Routes */}
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default AllRoutes;
