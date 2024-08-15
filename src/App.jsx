import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Kategorey from "./components/kategorey/Kategorey";
import Json from "./components/json/Json";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Dastafka from "./pages/dastafka/Dastafka";
import Uslovenne from "./pages/uslovenne/Uslovenne";
import Contact from "./pages/contact/Contact";
import Product from "./components/product/Product";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/CreateProduct";
import Maninj from "./pages/admin/Maninj";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Каталог" element={<About />} />
        <Route path="/Доставка" element={<Dastafka />} />
        <Route path="*" element={<Uslovenne />} />
        <Route path="/Контакты" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin/*" element={<Admin />}>
          <Route path="create" element={<CreateProduct />} />
          <Route path="maninj" element={<Maninj />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
