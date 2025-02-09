import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routers";
import AdminDash from "./components/AdminDash";

//===============================================================
import AdminCategory from "./components/AdminCategory";
import UserCategory from "./components/UserCategory";


import OrderCreate from "./components/createOrder";
import CollectorsDash from "./components/CollectorsDash";

const App = () => {
  return (
    <Routes>
      <Route path={"/register"} element={<Register />} />
      <Route path={"/"} element={<Login />} />
      <Route path={"/admin"} element={<AdminDash />} />
      <Route path={"/cart" } element={<OrderCreate/>}/>
      <Route path={"/category"} element={<AdminCategory />} />
      <Route path="/categoriesPage" element={<UserCategory/>} />
      <Route path={"/collector"}  element={<CollectorsDash/>}/>
    </Routes>
  );
};

export default App;
