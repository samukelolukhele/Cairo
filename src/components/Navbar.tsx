import { useState } from "react";
import { BsSearch, BsBag } from "react-icons/bs";
import { useShoppingCart } from "./context/ShoppingCartContext";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useShoppingCart();

  return (
    <header className="bg-black w-full">
      <nav className="flex justify-between items-center mx-8 lg:mx-0 lg:container border-b-[1px] border-white">
        <img
          src="/assets/logo.svg"
          alt="cairo_logo"
          className="w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex flex-col md:flex-row gap-12 font-raleway text-white items-center text-xl">
          <Link to="/shop/category/mens">Men</Link>
          <Link to="/shop/category/womens">Women</Link>
          <Link to="/">Collections</Link>
        </ul>
        <div className="flex items-end gap-12 text-white">
          <BsSearch className="text-xl" />
          <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <BsBag className="text-xl" />{" "}
            {cartItems.length > 0 && (
              <div className="absolute flex items-center justify-center bottom-[-15px] right-[-15px] bg-brand w-[25px] h-[25px] text-[0.75rem] rounded-full">
                <p>{cartItems.length}</p>
              </div>
            )}
          </div>
          {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
