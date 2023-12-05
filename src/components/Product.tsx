import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "./context/ShoppingCartContext";
import { ProductVariant } from "../utils/products";
import useIsMobile from "../utils/hooks/useIsMobile";

export interface ProductComponent {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  collection: string;
  link: string;
  productVariant: ProductVariant[];
  imgSize?: string;
}

const Product = ({
  id,
  thumbnail,
  title,
  price,
  collection,
  link,
  productVariant,
  imgSize,
}: ProductComponent) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { increaseCartQuantity } = useShoppingCart();
  const { isMobile, isTablet } = useIsMobile();

  const handleHover = (active: boolean) => {
    if (isTablet || isMobile) return setHover(false);

    return setHover(active);
  };

  return (
    <div className="relative flex flex-col text-lg gap-2">
      <div
        className={`${imgSize} w-full shadow-lg h-[400px] cursor-pointer md:h-[300px] md:aspect-square bg-no-repeat rounded-3xl object-contain bg-top bg-cover mb-4 flex items-end justify-end`}
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
      >
        <div
          className={`absolute w-full ${imgSize} h-[400px] md:h-[300px]`}
          onClick={() => navigate(link)}
        />
        <button
          className={`${
            hover ? "opacity-100" : "opacity-0 pointer-events-none"
          } absolute z-20 duration-500 top-3 right-3 rounded-full text-2xl p-4 w-fit text-center text-white bg-brand`}
          onClick={() =>
            increaseCartQuantity(
              id,
              productVariant[0].thumbnail,
              title,
              productVariant[0].price,
              productVariant[0].title
            )
          }
        >
          <BsCart />
        </button>
      </div>
      <div className="flex flex-col mx-4 gap-1">
        <div className="flex justify-between w-full items-center">
          <p
            className="font-semibold hover:text-brand cursor-pointer"
            onClick={() => navigate(link)}
          >
            {title}
          </p>
          <p>${price}</p>
        </div>
        <p
          className="text-gray-500 hover:text-brand cursor-pointer"
          onClick={() => navigate(`/shop/collection/${collection}`)}
        >
          {collection}
        </p>
      </div>
    </div>
  );
};

export default Product;
