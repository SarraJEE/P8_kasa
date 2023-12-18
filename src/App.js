import React from "react";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import Home from "./pages/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoFound from "./pages/NoFound/NoFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoFound />} />
       
      </Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default App;
