import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/hoodie.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Explore our collection of comfortable and stylish casual wear, perfect for everyday outings. ",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Featuring eye-catching patterns and vibrant colors, these shirts are ideal for expressing your unique style and standing out from the crowd.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Elevate your wardrobe with our elegant women's shirts, tailored to perfection for a chic and sophisticated look.",
  },
  {
    id: 4,
    img: Img4,
    title: "Hoodies",
    description:"Explore cozy hoodies in a variety of styles and colors, perfect for staying warm and stylish during any season.",
  }
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-secondary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
              Discover the best products for every need on our ecommerce website, 
              featuring top-quality items curated for your satisfaction and convenience. 
              Shop with confidence and explore a world of premium selections that elevate your shopping experience.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div key={data.id}>
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
