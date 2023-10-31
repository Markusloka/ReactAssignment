import React from "react";
import "./style.main.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { Footer } from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
