import { useState } from "react";
import { BsBag, BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useShoppingCart } from "./context/ShoppingCartContext";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import useIsMobile from "../utils/hooks/useIsMobile";
import { Transition } from "@headlessui/react";
import MenuItems, { Menu } from "./MenuItems";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "./Container";

const baseLinks: Menu[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Mens",
    submenu: [
      {
        label: "All",
        url: "/shop/category/mens",
      },
      {
        label: "Shirts",
        url: "/shop/category/mens/collection/shirts",
      },
      {
        label: "Jackets",
        url: "/shop/category/mens/collection/jackets",
      },
    ],
  },
  {
    label: "Womens",
    submenu: [
      {
        label: "All",
        url: "/shop/category/womens",
      },
      {
        label: "Shirts",
        url: "/shop/category/womens/collection/shirts",
      },
      {
        label: "Jackets",
        url: "/shop/category/womens/collection/jackets",
      },
    ],
  },
  {
    label: "Collections",
    submenu: [
      {
        label: "Featured",
        url: "/shop/featured",
      },
      {
        label: "Jackets",
        url: "/shop/collection/jackets",
      },
      {
        label: "Shirts",
        url: "/shop/collection/shirts",
      },
    ],
  },
];

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState({
    id: 0,
    active: false,
  });
  const navigate = useNavigate();
  const { cartItems } = useShoppingCart();
  const { isMobile, isTablet } = useIsMobile();

  const closeNav = () => setNavIsOpen(false);

  return (
    <header className="bg-black w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
      <nav className="flex justify-between text-white items-center mx-8 lg:mx-0 lg:container">
        {isMobile && (
          <FaBars className=" text-2xl" onClick={() => setNavIsOpen(true)} />
        )}
        <Transition
          appear
          show={navIsOpen && isMobile}
          className={`fixed p-4 top-0 left-0 bg-black flex flex-col w-[330px] md:w-96 items-center gap-6 h-screen overflow-y-auto z-50`}
          enter="ease-in-out duration-700"
          enterFrom="translate-x-[-100%] opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-[-100%] opacity-0"
        >
          <BsX
            className="text-4xl absolute top-8 cursor-pointer left-6 duration-300"
            onClick={closeNav}
          />
          <div className="flex flex-col [&>*]:gap-8 my-24 ml-8  text-3xl font-extralight w-full relative">
            <MenuItems links={baseLinks} close={closeNav} />
          </div>
        </Transition>
        <img
          src="/assets/logo.svg"
          alt="cairo_logo"
          className="w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex flex-row gap-12 font-raleway  items-center text-xl">
          {baseLinks.map((link, i) => {
            if (link.submenu)
              return (
                <div
                  key={i}
                  className="flex items-center cursor-pointer text-white gap-4"
                  onClick={() =>
                    setSubmenu((prev) => ({ id: i, active: !prev.active }))
                  }
                >
                  {link.label}{" "}
                  <IoMdArrowDropdown
                    className={`${
                      submenu.id === i && submenu.active
                        ? "rotate-180 bg-brand"
                        : "rotate-0"
                    } duration-300 ease-in`}
                  />
                </div>
              );
          })}
        </ul>
        <div className="flex items-end gap-12 ">
          <div
            className="relative cursor-pointer"
            onClick={() => setCartIsOpen(true)}
          >
            <BsBag className="text-xl" />{" "}
            {cartItems.length > 0 && (
              <div className="absolute flex items-center justify-center bottom-[-15px] right-[-15px] bg-brand w-[25px] h-[25px] text-[0.75rem] rounded-full">
                <p>{cartItems.length}</p>
              </div>
            )}
          </div>
          <Cart isOpen={cartIsOpen} setIsOpen={setCartIsOpen} />
        </div>
      </nav>
      {submenu.active && !isTablet && !isMobile && (
        <Container className="flex justify-center items-center !py-4 gap-8 border-t-[1px] border-white w-full">
          {baseLinks.map(
            (link, id) =>
              id === submenu.id &&
              link.submenu?.map((sub, subId) => {
                const id = "sub-" + subId;

                return (
                  <Link
                    className="text-white text-lg"
                    key={id}
                    to={sub.url}
                    onClick={() => setSubmenu({ id: 0, active: false })}
                  >
                    {sub.label}
                  </Link>
                );
              })
          )}
        </Container>
      )}
    </header>
  );
};

export default Navbar;
