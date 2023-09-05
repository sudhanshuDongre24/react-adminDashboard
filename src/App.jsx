import React from "react";
import { Home, User, Products, Login, Product, Users } from "./pages";
import { Navbar, Footer, Menu } from "./components";
import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <main className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/users/:id" element={<User />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
