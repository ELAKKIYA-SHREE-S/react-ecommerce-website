import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "../../assets/general/a1.png";
import i2 from "../../assets/general/a2.png";
import i3 from "../../assets/general/a3.png";
import i4 from "../../assets/general/a4.avif";
import i5 from "../../assets/general/a5.jpg";
import i6 from "../../assets/general/a6.png";
import i7 from "../../assets/general/a7.png";

const ProductsData = [
  {
    id: 1,
    img: i4,
    title: "Smart Watch",
    color: "Grey",
    aosDelay: "600",
  },
  {
    id: 2,
    img: i1,
    title: "Coolers",
    color: "Gold",
    aosDelay: "0",
  },
  {
    id: 3,
    img: i2,
    title: "Mobile",
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 4,
    img: i3,
    title: "Bluetooth Headset",
    color: "Black",
    aosDelay: "400",
  },
  {
    id: 5,
    img: i5,
    title: "Lipstick",
    color: "Multicolor",
    aosDelay: "800",
  },
  {
    id: 6,
    img: i6,
    title: "Airdopes",
    color: "White",
    aosDelay: "800",
  },
  {
    id: 7,
    img: i7,
    title: "Cap",
    color: "Grey",
    aosDelay: "800",
  },
];

const General = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-24 mb-12" style={{ margin: '30px' }}>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-7">
          <p data-aos="fade-up" className="text-sm text-secondary">
            Latest Collections
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Trends
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shop the newest arrivals and elevate your wardrobe with the
            latest fashion trends and exclusive designs. Explore our latest
            collections featuring trendy styles and must-have essentials for
            every occasion, available now on our ecommerce platform.
          </p>
        </div>
        {/* Body section */}
        <div>
          <Slider {...settings} className="slider-wrapper">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                </div>
              </div>
            ))}
          </Slider>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Explore
            </button>
          </div>
          {/* Custom styles for arrow color */}
          <style>
            
            {`
              .slick-prev:before,
              .slick-next:before {
                color: black;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default General;