import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import Image from "./Image";
import { ReactNode } from "react";
import { useShoppingCart } from "./context/ShoppingCartContext";

type CartItemsProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  variantTitle: string;
};

const CartItem = (): ReactNode => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return cartItems.map((item: CartItemsProps, key: number) => {
    return (
      <div className="relative flex gap-4" key={key}>
        <Image
          imgSrc={item.thumbnail}
          className="!w-[150px] !h-[150px] !flex-grow-0 rounded"
        />
        <div className="flex flex-col h-full items-start justify-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-header text-lg mr-auto">{item.title}</p>
            <p className="w-full font-light text-gray-400">${item.price}</p>
            <p className="font-light text-gray-400 mr-auto w-3/4">
              {item.variantTitle}
            </p>
          </div>
          <div className="flex w-full text-3xl items-center justify-start gap-4">
            <CiSquareMinus
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() => decreaseCartQuantity(item.variantTitle, item.id)}
            />
            <p className=" font-light text-xs">{item.quantity}</p>
            <CiSquarePlus
              className="cursor-pointer hover:scale-110 duration-300"
              onClick={() =>
                increaseCartQuantity(
                  item.id,
                  item.thumbnail,
                  item.title,
                  item.price,
                  item.variantTitle
                )
              }
            />
            <button
              className="duration-300 hover:scale-110 text-sm underline underline-offset-1"
              onClick={() => removeFromCart(item.variantTitle, item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default CartItem;
