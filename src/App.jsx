import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Testing from "./Pages/Testing";
import Signup from "./Pages/Signup";
import LoginPage from "./Pages/Login/LoginPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
