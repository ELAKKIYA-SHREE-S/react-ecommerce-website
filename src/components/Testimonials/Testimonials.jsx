import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/testimonials/Peter.jpeg";
import Img2 from "../../assets/testimonials/Laurel.jpeg";
import Img3 from "../../assets/testimonials/Matt.jpeg";
import Img4 from "../../assets/testimonials/Karla.jpeg";

const TestimonialData = [
  {
    id: 1,
    name: "Peter",
    text: "Great product! It exceeded my expectations and arrived on time.",
    img: Img1,
  },
  {
    id: 2,
    name: "Laurel",
    text: "I love this item! It's exactly what I was looking for, and the quality is fantastic.",
    img: Img2,
  },
  {
    id: 3,
    name: "Matt",
    text: "Highly recommend this product. It's durable, stylish, and worth every penny.",
    img: Img3,
  },
  {
    id: 4,
    name: "Karla",
    text: "Amazing purchase! Product arrived quickly, and I'm very satisfied with my order.",
    img: Img4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-secondary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Customer testimonials are authentic
           and reflect genuine experiences, providing valuable insights
            into our product quality and customer satisfaction.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id}>
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
