import { useState } from "react";
import { BsCart } from "react-icons/bs";

export interface ProductComponent {
  thumbnail: string;
  title: string;
  price: number;
  collection: string;
}

const Product = ({ thumbnail, title, price, collection }: ProductComponent) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative flex flex-col text-lg gap-2">
      <div
        className="w-full shadow-lg h-[400px] md:h-[350px] bg-no-repeat rounded-3xl object-contain bg-top bg-cover mb-4 flex items-end justify-end"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <button
          className={`${
            hover ? "opacity-100" : "opacity-0 pointer-events-none"
          } absolute transition-width duration-500 top-3 right-3 rounded-full text-2xl p-4 w-fit text-center text-white bg-brand`}
        >
          <BsCart />
        </button>
      </div>
      <div className="flex flex-col mx-4 gap-1">
        <div className="flex justify-between w-full items-center">
          <p className="font-semibold">{title}</p>
          <p>${price}</p>
        </div>
        <p className="text-gray-500">{collection}</p>
      </div>
    </div>
  );
};

export default Product;
