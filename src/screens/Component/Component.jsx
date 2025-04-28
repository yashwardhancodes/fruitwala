import { ChevronRightIcon, XIcon } from "lucide-react";
import vector from "../../../public/vector.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/Button.tsx";
import { Card, CardContent } from "../../components/card.jsx";
import logo from "../../assets/logo.png";

const fruits = [
  {
    name: "BANANA",
    image: "/bitmap.png",
    price: "40 / Kg",
    nutrition: [
      { name: "Potassium", value: "358 mg", position: "top-0 right-44", size: "xs" },
      { name: "Protein", value: "1.1 Kg", position: "right-56 top-[357px]", size: "xs" },
      { name: "Vitamin C", value: "8.7 mg", position: "left-[100px] top-[428px]", size: "xs" },
      { name: "Energy", value: "89 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
      { name: "Calcium", value: "5 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
    ],
  },
  {
    name: "WATERMELON",
    image: "/watermelon.png",
    price: "30 / Kg",
    nutrition: [
      { name: "Potassium", value: "112 mg", position: "top-0 right-44", size: "xs" },
      { name: "Protein", value: "0.6 Kg", position: "right-56 top-[357px]", size: "xs" },
      { name: "Vitamin C", value: "8.1 mg", position: "left-[100px] top-[428px]", size: "xs" },
      { name: "Energy", value: "30 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
      { name: "Calcium", value: "7 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
    ],
  },
  {
    name: "STRAWBERRY",
    image: "/strawberry.png",
    price: "40 / Kg",
    nutrition: [
      { name: "Potassium", value: "153 mg", position: "top-0 right-44", size: "xs" },
      { name: "Protein", value: "0.7 Kg", position: "right-56 top-[357px]", size: "xs" },
      { name: "Vitamin C", value: "58.8 mg", position: "left-[100px] top-[428px]", size: "xs" },
      { name: "Energy", value: "32 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
      { name: "Calcium", value: "16 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
    ],
  },
  {
    name: "KIWI",
    image: "/kiwi.png",
    price: "90 / Kg",
    nutrition: [
      { name: "Potassium", value: "312 mg", position: "top-0 right-44", size: "xs" },
      { name: "Protein", value: "1.1 Kg", position: "right-56 top-[357px]", size: "xs" },
      { name: "Vitamin C", value: "92.7 mg", position: "left-[100px] top-[428px]", size: "xs" },
      { name: "Energy", value: "61 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
      { name: "Calcium", value: "34 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
    ],
  },
  {
    name: "APPLE",
    image: "/apple.png",
    price: "60 / Kg",
    nutrition: [
      { name: "Potassium", value: "195 mg", position: "top-0 right-44", size: "xs" },
      { name: "Protein", value: "0.3 Kg", position: "right-56 top-[357px]", size: "xs" },
      { name: "Vitamin C", value: "4.6 mg", position: "left-[100px] top-[428px]", size: "xs" },
      { name: "Energy", value: "52 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
      { name: "Calcium", value: "6 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
    ],
  },
];

export const Component = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % fruits.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
  };

  const currentFruit = fruits[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const getBgGradient = () => {
    switch (currentFruit.name) {
      case "BANANA":
        return "bg-gradient-to-b from-[#FFD700] to-[#FFF4B8]";
      case "WATERMELON":
        return "bg-gradient-to-b from-[rgba(255,51,0,0.92)] to-[rgba(30,30,30,1)]";
      case "STRAWBERRY":
        return "bg-gradient-to-b from-[#FF0037EB] to-[#E78181]";
      case "KIWI":
        return "bg-gradient-to-b from-[#7F7A27] to-[#CC902B]";
      case "APPLE":
        return "bg-gradient-to-b from-[#A20000] to-[#68001D]";
      default:
        return "";
    }
  };

  const getTextColor = () => {
    switch (currentFruit.name) {
      case "BANANA":
        return {
          primary: "text-[#ffd600]",
          secondary: "text-[#016133]",
          cardDarkBg: "bg-[#016133]",
          cardDarkText: "text-[#ffd700]",
          cardLightBg: "bg-[#fff3b791]",
          cardLightText: "text-[#016133]",
          cardBorder: "border-[#016133]",
          menuBg: "bg-[#FFF4B8]",
          menuText: "text-[#016133]",
          menuBorder: "border-[#016133]"
        };
      case "WATERMELON":
        return {
          primary: "text-[rgba(255,244,184,1)]",
          secondary: "text-[rgba(255,244,184,1)]",
          cardDarkBg: "bg-[#016133]",
          cardDarkText: "text-white",
          cardLightBg: "bg-[#FFF4B83D]",
          cardLightText: "text-white",
          cardBorder: "border-[#FFF4B8]",
          menuBg: "bg-[#412119]",
          menuText: "text-[#FFF4B8]",
          menuBorder: "border-[#FFF4B8]"
        };
      case "STRAWBERRY":
        return {
          primary: "text-[#FFF4B8]",
          secondary: "text-[#FFF4B8]",
          cardDarkBg: "bg-[#659921]",
          cardDarkText: "text-white",
          cardLightBg: "bg-[#FFF4B83D]",
          cardLightText: "text-white",
          cardBorder: "border-[#FFF4B8]",
          menuBg: "bg-[#E78181]",
          menuText: "text-white",
          menuBorder: "border-white"
        };
      case "KIWI":
        return {
          primary: "text-[#FFF4B8]",
          secondary: "text-[#FFF4B8]",
          cardDarkBg: "bg-[#016133]",
          cardDarkText: "text-white",
          cardLightBg: "bg-[#FFF4B83D]",
          cardLightText: "text-white",
          cardBorder: "border-[#FFF4B8]",
          menuBg: "bg-[#CC902B]",
          menuText: "text-[#FFF4B8]",
          menuBorder: "border-[#FFF4B8]"
        };
      case "APPLE":
        return {
          primary: "text-[#FFF4B8]",
          secondary: "text-[#FFF4B8]",
          cardDarkBg: "bg-[#659921]",
          cardDarkText: "text-white",
          cardLightBg: "bg-[#FFF4B83D]",
          cardLightText: "text-white",
          cardBorder: "border-[#FFF4B8]",
          menuBg: "bg-[#6B001B]",
          menuText: "text-[#FFF4B8]",
          menuBorder: "border-[#FFF4B8]"
        };
      default:
        return {
          primary: "",
          secondary: "",
          cardDarkBg: "",
          cardDarkText: "",
          cardLightBg: "",
          cardLightText: "",
          cardBorder: "",
          menuBg: "",
          menuText: "",
          menuBorder: ""
        };
    }
  };

  const getDescription = () => {
    switch (currentFruit.name) {
      case "BANANA":
        return "Bananas are a naturally sweet and energy-rich fruit, great for digestion and heart health due to their high fiber and potassium content. Perfect for snacks, smoothies, and breakfast meals.";
      case "WATERMELON":
        return "Watermelon is a refreshing summer fruit with high water content (92%). It keeps you hydrated, aids digestion, and is rich in antioxidants that support heart health.";
      case "STRAWBERRY":
        return "Strawberries are bright red, juicy, and naturally sweet berries rich in antioxidants and vitamin C. They promote heart health, boost immunity, and improve skin health.";
      case "KIWI":
        return "Kiwis are nutrient-dense fruits rich in vitamin C, potassium, and antioxidants. They support immune function, improve digestion, and promote healthy skin.";
      case "APPLE":
        return "Apples are crunchy and juicy with a natural sweetness. They are rich in fiber and antioxidants, making them excellent for heart health, digestion, and overall well-being.";
      default:
        return "";
    }
  };

  const colors = getTextColor();

  return (
    <main className={`relative w-full h-[840px] overflow-hidden transition-all duration-700 ease-in-out ${getBgGradient()}`} id="home">
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 w-80 rounded-l-2xl h-full ${colors.menuBg} z-50 shadow-xl`}
          >
            <div className="p-6 h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className={`self-end p-2 rounded-full hover:bg-opacity-80 ${colors.menuText}`}
              >
                <XIcon className="h-6 w-6" />
              </button>

              {/* Menu Logo */}
              <div className="flex justify-center mb-2">
                <img
                  className="w-auto h-56 object-cover"
                  alt="Logo"
                  src="/wala--2--1.png"                />
              </div>

              <div className={`border border-t ${colors.menuBorder}`}></div>

              {/* Navigation Items */}
              <nav className="flex justify-center text-center">
                <ul className="space-y-4">
                  {['Home', 'About', 'Products', 'Contact Us'].map((item) => {
                    const sectionId = item.toLowerCase().replace(/\s+/g, ''); // 'Contact Us' -> 'contactus'
                    return (
                      <li key={item}>
                        <a
                          href={`#${sectionId}`}
                          className={`block px-4 py-3 text-lg font-medium ${colors.menuText} hover:bg-opacity-20 rounded-lg transition-colors`}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}

                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container relative mx-auto px-5 py-6 h-full md:max-w-[1440px]">
        {/* Logo */}
        <div className="absolute size-[80px] md:size-[94px] md:top-10  md:left-20 bg-white rounded-full">
          <img className=" size-[70px] md:size-[86px] mt-0 ml-1.5 object-cover" alt="Logo" src={logo} />
        </div>

        {/* Cart Button */}
        <Button
          variant="outline"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 244, 184, 0.6) 100%)',
          }}
          className="absolute size-[40px] md:size-[63px] md:top-10 md:right-20 top-10 right-6 rounded-[9px] border-2 border-[#FFF4B8] p-0 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <img src={vector} className=" size-4 md:size-6" alt="" />
        </Button>

        <div className="relative w-full max-w-[1022px] md:!-mb-96 mx-auto mt-80 md:mt-[68px]">
          <div className="relative">
            {/* Fruit Image */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentFruit.name}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" h-[200px]  md:h-[400px] w-auto mx-auto"
                alt={currentFruit.name}
                src={currentFruit.image}
              />
            </AnimatePresence>

            {/* Shadow under fruit */}
            <div className={` w-[200px] md:w-[406px] h-[18px] md:h-[29px] mx-auto absolute bottom-4 left-[30%] hidden md:block  rounded-[203px/14.5px] blur-[21.3px] ${colors.primary === "text-[#ffd600]"
              ? "bg-[#ffd600eb]"
              : colors.primary === "text-[rgba(255,244,184,1)]"
                ? "bg-[#FFF4B8]"
                : "bg-[#A8E063cc]"
              }`} />


            {/* Shadow under fruit mobile */}
            <div className={` w-[200px] md:w-[406px] h-[18px] md:h-[29px] mx-auto absolute bottom-4 left-[20%] md:hidden block rounded-[203px/14.5px] blur-[21.3px] ${colors.primary === "text-[#ffd600]"
              ? "bg-[#ffd600eb]"
              : colors.primary === "text-[rgba(255,244,184,1)]"
                ? "bg-[#FFF4B8]"
                : "bg-[#A8E063cc]"
              }`} />

            {/* Fruit Title */}
            <h1
              style={{ fontFamily: "'Lalezar', cursive" }}
              className={`text-center text-[50px] md:text-[132px] tracking-wider md:mt-28 ${colors.primary}`}
            >
              {currentFruit.name}
            </h1>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-3  md:-mt-72">
              <Button size="icon" variant="default" onClick={handlePrev} className=" size-8 md:size-11 bg-white text-black rounded-full rotate-180">
                <ChevronRightIcon className="  h-6 w-6" />
              </Button>
              <Button size="icon" variant="default" onClick={handleNext} className="size-8 md:size-11 bg-white z-10  text-black rounded-full">
                <ChevronRightIcon className="h-6 w-6" />
              </Button>
            </div>

            {/* Nutritional Value Text */}
            <div className="absolute md:top-[95px] -top-[210px] hidden md:block md:-left-32 font-['Poppins',Helvetica]">
              <h2 className=" text-xl md:text-3xl font-medium">
                <span className="text-white">Nutritional Value </span>
                <span className={currentFruit.name === "BANANA" ? colors.secondary : "text-[#FFD700]"}>(per 100g)</span>
              </h2>
              <p className={`w-[339px] md:mt-8 text-base leading-[31px] ${colors.secondary}`}>
                {getDescription()}
              </p>
            </div>

            {/* Nutritional Value Text  Mobile*/}
            <div className="absolute md:top-[95px] -top-[210px] md:hidden block md:-left-32 font-['Poppins',Helvetica]">
              <h2 className=" text-xl md:text-3xl font-medium">
                <span className="text-white">Nutritional Value </span>
                <span className={currentFruit.name === "BANANA" ? colors.secondary : "text-[#FFD700]"}>(per 100g)</span>
              </h2>
              <p className={`w-[339px] md:mt-8 text-xs leading-[31px] ${colors.secondary}`}>
                {getDescription()}
              </p>
            </div>

            {/* Price */}
            <div className="absolute md:-left-32 md:top-[331px] -top-16 flex items-center">
              <div className=" size-[50px] md:size-[60px] bg-[#006736] rounded-full flex items-center justify-center">
                <span className="font-['Poppins',Helvetica] font-medium text-white text-xl md:text-3xl">Rs.</span>
              </div>
              <span className={`ml-5 font-['Poppins',Helvetica] font-semibold    text-[26px] ${colors.secondary}`}>
                {currentFruit.price}
              </span>
            </div>

            {/* Nutrition Cards */}
            {currentFruit.nutrition.map((item, index) => (
              <Card
                key={index}
                size={item.size}
                className={`absolute ${item.position} ${item.variant === "light"
                  ? `${colors.cardLightBg} ${colors.cardBorder}`
                  : `${colors.cardDarkBg} border-[#016133] `
                  } rounded-[13px] hidden md:block   overflow-hidden border`}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                  <span className={`text-xs ${item.variant === "light" ? colors.cardLightText : colors.cardDarkText}`}>
                    {item.name}
                  </span>
                  <span className={`text-[22px] font-medium mt-2 ${item.variant === "light" ? colors.cardLightText : colors.cardDarkText}`}>
                    {item.value}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};