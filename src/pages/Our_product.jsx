import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import banana from "../assets/banana.png";
import watermelon from "../assets/watermelon.png";
import bg from "../assets/bg.png";

const Our_product = () => {
  const products = [
    {
      name: "Banana",
      description:
        "Bananas are a great source of energy and potassium, also very fulfilling. They aid in digestion and help maintain heart health.",
      price: "₹ 60/kg",
      image: banana,
    },
    {
      name: "Watermelon",
      description:
        "Watermelons are hydrating and rich in vitamins. They help regulate blood pressure and are perfect for summer refreshment.",
      price: "₹ 25/kg",
      image: watermelon,
    },
    {
      name: "Banana",
      description:
        "Bananas are a great source of energy and potassium, also very fulfilling. They aid in digestion and help maintain heart health.",
      price: "₹ 60/kg",
      image: banana,
    },
    {
      name: "Watermelon",
      description:
        "Watermelons are hydrating and rich in vitamins. They help regulate blood pressure and are perfect for summer refreshment.",
      price: "₹ 25/kg",
      image: watermelon,
    },
  ];

  return (
    <section
      id="products"
      className="py-10 my-10 px-5 md:px-20 w-full min-h-[800px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "220px",
      }}
    >
      <h2 className="mb-4 text-2xl font-bold text-green-800 sm:text-3xl">
        Our Products
      </h2>

      <p className="mb-8 text-lg text-center text-yellow-500 sm:text-2xl">
        Fresh & Juicy Picks – Straight from Our Farm!
      </p>

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="w-full px-2 pb-24 sm:px-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col w-full h-auto overflow-hidden bg-white shadow-lg md:flex-row rounded-t-xl">
                <div className="w-full md:w-1/2">
                  <div className="w-full h-full aspect-video md:aspect-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full h-[130px] p-4 bg-green-800 md:w-1/2 lg:h-60">
                  <h3 className="xl:mt-5 text-lg font-semibold text-white sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-amber-100 xl:mb-5">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="py-3 text-lg text-center text-green-900 bg-yellow-400 sm:py-4 sm:text-2xl rounded-b-xl">
                {product.price}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Adjust dot positioning inline below Swiper */}
        <div
          className="absolute flex justify-center w-full -translate-x-1/2 left-1/2"
          style={{ bottom: "-30px" }}
        >
          <style>
            {`
              .swiper-pagination {
                position: relative;
                margin-top: 28px;
              }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Our_product;
