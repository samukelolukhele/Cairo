import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/support/shipping" element={<Shipping />} />
          <Route path="/support/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
