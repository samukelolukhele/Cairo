import React from "react";
import { BsX } from "react-icons/bs";
import CartItem from "./CartItem";
import { useShoppingCart } from "./context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const Cart = ({ setIsOpen, isOpen }: Props) => {
  const { cartItems, cartTotal } = useShoppingCart();
  const navigate = useNavigate();

  function handleCheckout() {
    setIsOpen(false);
    return navigate("/shop/checkout");
  }

  return (
    <div>
      {isOpen && (
        <div
          className="fixed w-screen h-screen top-0 right-0 left-0 bottom-0 bg-black opacity-50 cursor-pointer z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed p-4 transition-expand top-0 right-0  bg-black flex flex-col items-center gap-6 h-screen overflow-y-auto ${
          isOpen
            ? "opacity-100 w-[330px] md:w-[530px] z-50"
            : "opacity-0 pointer-events-none w-[100px] z-[-99]"
        } duration-300 ease-in`}
      >
        <div className="flex w-full relative">
          <p className="w-full text-3xl text-gray-400 font-thin">Cart</p>
          <BsX
            className="text-3xl absolute top-0 right-0 hover:bg-brand duration-300 rounded-full"
            onClick={() => setIsOpen(false)}
          />
        </div>
        {cartItems.length != 0 ? (
          <div className="flex flex-col border-t-[0.5px] border-gray-300 py-8 gap-4 w-full">
            <CartItem />
            <div className="w-full border-t-[1px] border-white py-2 flex justify-between gap-4 text-lg">
              <p className="font-semibold">Subtotal</p>
              <p className="font-light">${cartTotal}</p>
            </div>
          </div>
        ) : (
          <p className="text-xl text-center font-thin my-auto">
            Your cart is currently empty
          </p>
        )}
        {cartItems.length > 0 && (
          <button
            className="w-full bg-none  rounded py-4 bg-brand hover:text-black font-light text-sm"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
