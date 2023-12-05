import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Product from "./pages/Product";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext";
import Category from "./pages/Shop/Category";
import Collection from "./pages/Shop/Collection";
import "aos/dist/aos.css";
import Featured from "./pages/Home/Featured";
import CategoryCollection from "./pages/Shop/Collection/CategoryCollection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ShoppingCartProvider>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/featured" element={<Featured />} />
            <Route path="/shop/:id" element={<Product />} />
            <Route
              path="/shop/collection/:collection"
              element={<Collection />}
            />
            <Route
              path="/shop/category/:category/collection/:collection"
              element={<CategoryCollection />}
            />
            <Route path="/shop/category/:category" element={<Category />} />
            <Route path="/support/shipping" element={<Shipping />} />
            <Route path="/support/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </ShoppingCartProvider>
      </Router>
    </>
  );
}

export default App;
