import React, { useState } from 'react';
import navI from '../assets/navI.png';
import wala from '../assets/wala.png'; 
import bars from '../assets/bars.png'; 
import bgg from '../assets/bgg.png'; 
import {motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
function PrivacyPolicy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    // If already on the homepage, just scroll
    if (window.location.pathname !== '/') {
      navigate('/', { replace: false }); // Go to homepage
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay to wait until homepage loads
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // close the mobile menu
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % fruits.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
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
  const fruits = [
    {
      name: "BANANA",
      image: "/bitmap.png",
      price: "40 / Kg",
      nutrition: [
        { name: "Potassium", value: "358 mg", position: "top-0 right-44", size: "xs" },
        { name: "Protein", value: "1.1 Kg", position: "right-56 top-[290px]", size: "xs" },
        { name: "Vitamin C", value: "8.7 mg", position: "left-[100px] top-[355px]", size: "xs" },
        { name: "Energy", value: "89 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
        { name: "Calcium", value: "5 mg", position: "right-[10px] top-[400px]", variant: "light", size: "md" },
      ],
    },
    {
      name: "WATERMELON",
      image: "/watermelon.png",
      price: "30 / Kg",
      nutrition: [
        { name: "Potassium", value: "112 mg", position: "top-0 right-44", size: "xs" },
        { name: "Protein", value: "0.6 Kg", position: "right-56 top-[290px]", size: "xs" },
        { name: "Vitamin C", value: "8.1 mg", position: "left-[100px] top-[355px]", size: "xs" },
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
        { name: "Protein", value: "0.7 Kg", position: "right-56 top-[290px]", size: "xs" },
        { name: "Vitamin C", value: "58.8 mg", position: "left-[100px] top-[355px]", size: "xs" },
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
        { name: "Protein", value: "1.1 Kg", position: "right-56 top-[290px]", size: "xs" },
        { name: "Vitamin C", value: "92.7 mg", position: "left-[100px] top-[355px]", size: "xs" },
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
        { name: "Protein", value: "0.3 Kg", position: "right-56 top-[290px]", size: "xs" },
        { name: "Vitamin C", value: "4.6 mg", position: "left-[100px] top-[355px]", size: "xs" },
        { name: "Energy", value: "52 kcal", position: "-right-12 top-[168px]", variant: "light", size: "md" },
        { name: "Calcium", value: "6 mg", position: "-right-56 top-[437px]", variant: "light", size: "md" },
      ],
    },
  ];
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
  const colors = getTextColor();
  return (
    <div className="text-[20px] font-normal font-poppins leading-[40px] text-[#333]">
      
      {/* Background Image section */}
      <div className="relative w-full h-[380px]">

        {/* Small Screens Image */}
        <div
          className="absolute inset-0 bg-center bg-cover sm:hidden"
          style={{ backgroundImage: `url(${bgg})` }}
        ></div>

        {/* Big Screens Image */}
        <div
          className="absolute inset-0 hidden bg-cover sm:block bg-ceter"
          style={{ backgroundImage: `url(${navI})` }}
        ></div>

        {/* Navbar
        <div className="absolute left-0 flex items-center justify-between w-full h-[300px] px-10 top-[-45px] ">
          <div className='bg-white rounded-full '>
          
          <img  src={wala} alt="Logo" className="object-contain w-24 p-5 " />

          </div>
        <img src={bars} alt="Menu" className="h-auto cursor-pointer pb-34 w-22" onClick={toggleMenu} />
        </div> */}
         
         
         {/* Navbar */}
<div className="absolute left-0 flex items-center justify-between w-full h-[300px] px-10 top-[-45px] ">
  <div className='bg-white rounded-full'>
    <a href="/">
      <img src={wala} alt="Logo" className="object-contain w-24 p-5" />
    </a>
  </div>
  
  <a href="#menu"> {/* Replace "#menu" with your desired link */}
    <img
      src={bars}
      alt="Menu"
      className="h-auto cursor-pointer pb-34 w-22"
      onClick={toggleMenu}
    />
  </a>
</div>

        <div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
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
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className={`self-end p-2 rounded-full hover:bg-opacity-80 ${colors.menuText}`}
              >
                <XIcon className="w-6 h-6" />
              </button>

              {/* Menu Logo */}
              <div className="flex justify-center mb-2 ">
                <img id='home'
                  className="object-cover w-auto h-40 "
                  alt="Logo"
                  src="/wala--2--1.png"
                />
              </div>

              <div className={`border border-t ${colors.menuBorder}`}></div>

              {/* Navigation Items */}
              <nav className="flex justify-center text-center">
      <ul className="space-y-4">
        {['Home', 'About', 'Products', 'Contact Us'].map((item) => {
          const sectionId = item.toLowerCase().replace(/\s+/g, '');
          return (
            <li key={item}>
              <button
                onClick={() => handleNavigation(sectionId)}
                className={`block w-full text-left px-4 py-3 text-lg font-medium ${colors.menuText} hover:bg-opacity-20 rounded-lg transition-colors`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      </div>

      {/* Privacy Policy */}
      <div className="mx-10 mt-10 mb-12">
        <h1 className="text-[#016133] text-[40px] font-semibold mb-4">Privacy Policy</h1>
        <p>1. Introduction</p>
        <p>
          Welcome to FreshFruitWala! Your privacy is important to us. <br />
          This Privacy Policy explains how we collect, use, and protect your personal data when you use our app and website.
        </p>

        <p className="mt-4">2. Information We Collect</p>
        <p>
          We may collect the following types of data: <br />
          • Personal Information: Name, phone number, email, address.<br />
          • Order Details: Products purchased, delivery address, payment status.<br />
          • Payment Information: Securely processed via third-party payment gateways.
        </p>

        <p className="mt-4">3. How We Use Your Information</p>
        <p>
        • Process and deliver your fruit orders.<br />
        • Improve app performance and user experience.<br />
        • Send updates about orders, promotions, or new products.<br />
        • Prevent fraud and ensure security.
        </p>

        <p className="mt-4">4. Sharing Your Information</p>
        <p>
          We do not sell your data. However, we may share it with:<br />
          • Delivery partners for order fulfillment.<br />
          • Payment providers for secure transactions.<br />
          • Legal authorities if required by law.
        </p>

        <p className="mt-4">5. Security Measures</p>
        <p>
        • We use encryption, firewalls, and secure servers to protect your information. However, no online service is 100% secure.
        </p>

        <p className="mt-4">6. Your Rights</p>
        <p>
          • Access, update, or delete your personal data.<br />
          • Opt-out of promotional emails.<br />
          • Request account deletion by contacting us.
        </p>

        <p className="mt-4">7. Updates to This Policy</p>
        <p>
        • We may update this Privacy Policy from time to time. Changes will be posted on our website/app.
        </p>

        <p className="mt-4">8. Contact Us</p>
        <p>
        • For any privacy-related concerns, contact us at <span className="text-blue-700">support@freshfruitwala.com</span>.
        </p>
      </div>

      <div className="mx-10 mb-10 sm:mx-10">
        <h1 className="text-[#016133] text-[40px] font-semibold mb-4">Terms & Conditions</h1>

        <p>1. Introduction</p>
        <p>
        • These Terms & Conditions govern your use of the FreshFruitWala app and website. By accessing our services, you agree to these terms.
        </p>

        <p className="mt-4">2. User Accounts</p>
        <p>
          • Users must provide accurate information during registration.<br />
          • Users are responsible for maintaining account security.
        </p>

        <p className="mt-4">3. Orders & Payments</p>
        <p>
          • Orders are confirmed only after successful payment.<br />
          • Prices are subject to change without notice.<br />
          • We reserve the right to cancel any order due to stock unavailability or fraud suspicion.
        </p>

        <p className="mt-4">4. Delivery & Refunds</p>
        <p>
          • Orders will be delivered within the estimated timeframe.<br />
          • Refunds will be processed for damaged or incorrect products.<br />
          • Users must report issues within 24 hours of delivery.
        </p>

        <p className="mt-4">5. Restrictions</p>
        <p>
        • Use the platform for illegal purposes.<br />
        • Attempt to hack, modify, or exploit the app.<br />
        • Resell products without authorization.
        </p>

        <p className="mt-4">6. Intellectual Property</p>
        <p>
        • All logos, content, and images on FreshFruitWala are our property. Unauthorized use is prohibited.
        </p>

        <p className="mt-4">7. Liability & Disclaimers</p>
        <p>
          • We are not liable for delays due to third-party services.<br />
          • Users agree to use the app at their own risk.
        </p>

        <p className="mt-4">8. Termination of Account</p>
        <p>
        • We reserve the right to suspend or terminate accounts if users violate these terms.
        </p>

        <p className="mt-4">9. Governing Law</p>
        <p>
        • These Terms are governed by the laws of India.
        </p>

        <p className="mt-4">10. Contact Us</p>
        <p>
        • For queries, email us at <span className="text-blue-700 ">support@freshfruitwala.com</span>.
        </p>

        {/* <h1 className="text-[#016133] text-[40px] font-semibold mb-4">Cancelation Policy</h1> */}
        

        <h1 className="text-[#016133] text-[40px] font-semibold mb-6 mt-10 ">Cancellation Policy</h1>

       <p>At Fruitwala, we strive to provide the best service and ensure timely delivery of fresh fruits and groceries. However, to maintain the quality of our operations and minimize losses, we have outlined the following cancellation policy:</p>

          <p className="mt-6">1. Cancellation Timeframe</p>
          <p>
       • Orders cancelled within 30 minutes of placing the order will not be eligible for a refund.<br />
       • Any order cancelled after 30 minutes may not be accepted, depending on the stage of processing.
      </p>

<p className="mt-4">2. Delivery Charges</p>
<p>
  • In all cases, delivery charges are non-refundable, even if the order is cancelled.
</p>

<p className="mt-4">3. Cash on Delivery (COD) Orders</p>
<p>
  • If a customer selects Cash on Delivery as the payment method, a 20% advance payment of the total order value is required to confirm the order.<br />
  • This advance payment is non-refundable if the customer decides to cancel the order, regardless of the time of cancellation.
</p>

<p className="mt-4">
  By placing an order with Fruitwala, you agree to comply with the above terms and conditions. This policy helps us reduce wastage, ensure fair business practices, and maintain a high level of service for all our customers.
</p>

      </div>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
