import React, { useEffect, useState } from "react";
import { Navbar } from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/Products/Products";

import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/Products/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import axios from "axios";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [product, setProduct] = useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    fetchProduct();
  }, []);

  /////load data/////

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women's clothing?limit=5"
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching the product data:", error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products productsData={product} />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products productsData={product} />
      <Testimonial />
      <Footer />

      {/* /////////// */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
