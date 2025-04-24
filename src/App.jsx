import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import About from "./pages/About";
 import {Component} from "./screens/Component/index";
import Footer from "./pages/Footer";
import Our_product from "./pages/Our_product";
import Contact from "./pages/Contact";
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './pages/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Component/>
               <About />
              <Our_product />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
