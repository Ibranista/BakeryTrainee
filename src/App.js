import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AllRoutes from "./routes/route.js";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AllRoutes />
      </div>
    </Provider>
  );
}

export default App;
