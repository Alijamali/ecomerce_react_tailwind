import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import img1 from "../../assets/women/wo1.png";
import img2 from "../../assets/women/wo2.png";
import img3 from "../../assets/women/wo3.png";
import img4 from "../../assets/women/wo4.png";
import img5 from "../../assets/women/wo5.png";
import img6 from "../../assets/women/wo6.png";
import img7 from "../../assets/women/wo7.png";
import axios from "axios";

const Products = ({ productsData }) => {
  // const productsData = [
  //   // {
  //   //   id: 1,
  //   //   img: img1,
  //   //   title: "Women Ethnic",
  //   //   rating: 5.0,
  //   //   color: "white",
  //   //   aosDelay: "0",
  //   // },
  //   // {
  //   //   id: 2,
  //   //   img: img2,
  //   //   title: "Women Western",
  //   //   rating: 4.5,
  //   //   color: "red",
  //   //   aosDelay: "200",
  //   // },
  //   // {
  //   //   id: 3,
  //   //   img: img3,
  //   //   title: "Women Ethnic 3",
  //   //   rating: 4.0,
  //   //   color: "white",
  //   //   aosDelay: "400",
  //   // },
  //   // {
  //   //   id: 4,
  //   //   img: img4,
  //   //   title: "Women Ethnic 4",
  //   //   rating: 3.7,
  //   //   color: "brown",
  //   //   aosDelay: "600",
  //   // },
  //   // {
  //   //   id: 5,
  //   //   img: img5,
  //   //   title: "Women Ethnic 5",
  //   //   rating: 4.9,
  //   //   color: "blue",
  //   //   aosDelay: "800",
  //   // },
  // ];
  /////// get data /////

  // const fetchData = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://asos10.p.rapidapi.com/api/v1/getProductList",
  //     params: {
  //       categoryId: "28886",
  //       currency: "USD",
  //       country: "US",
  //       store: "US",
  //       languageShort: "en",
  //       sizeSchema: "US",
  //       limit: "10",
  //       offset: "0",
  //       sort: "recommended",
  //     },
  //     headers: {
  //       "x-rapidapi-key": "4f9f8221b0msh1374dfe5858c4dcp1c96e3jsn6fd9b0037e96",
  //       "x-rapidapi-host": "asos10.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     response.data.data.products.map((item) => {
  //       console.log(item.id);
  //     });

  //     // var tempRow = {id:}
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs  text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            recusandae nulla autem.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {productsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={200}
                className="space-y-3"
              >
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold ">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.category}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* button view all */}

          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
