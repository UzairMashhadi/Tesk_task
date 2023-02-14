import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer style={{ fontSize: "18px", fontWeight: 700 }} />
      <BrowserRouter>
        <Routes>
          {AllRoutes?.map((item, index) => (
            <Route key={index} path={item.path} element={item.page}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
