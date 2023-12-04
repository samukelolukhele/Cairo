import { useParams } from "react-router-dom";
import products from "../../utils/products";
import useChangeThumbnail from "../../utils/hooks/useChangeThumbnail";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Image from "../../components/Image";
import { useState } from "react";
import { useShoppingCart } from "../../components/context/ShoppingCartContext";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { handleThumbnail, currentThumbnail } = useChangeThumbnail(
    product?.product_variant[0].thumbnail || ""
  );
  const [currentVariant, setCurrentVariant] = useState({
    title: product?.product_variant[0].title || "",
    thumbnail: product?.product_variant[0].thumbnail || "",
    price: product?.product_variant[0].price || 0,
  });

  const { increaseCartQuantity } = useShoppingCart();

  const [currentSize, setCurrentSize] = useState("M");

  const handleVariant = (
    variantName: string,
    thumbnail: string,
    variantPrice: number
  ) => {
    setCurrentVariant({
      title: variantName,
      thumbnail: thumbnail,
      price: variantPrice,
    });

    return handleThumbnail(thumbnail);
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <Section className="py-5 md:py-20">
      <Container className="gap-8 md:gap-20 flex-col lg:flex-row">
        <div className="hidden lg:flex flex-col gap-4">
          {product?.images.map((image, key) => {
            return (
              <Image
                className={`!flex-grow-0 !w-[65px] !h-[65px] cursor-pointer rounded-sm ease-in duration-300 hover:scale-110 ${
                  image == currentThumbnail &&
                  "scale-110 border-black border-[1px]"
                }`}
                imgSrc={image}
                key={key}
                onClick={() => handleThumbnail(image)}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-8">
          <Image
            className="flex-grow-0 rounded-xl !h-fit !w-full aspect-square lg:!h-[500px] lg:!w-[500px]"
            imgSrc={currentThumbnail}
          />
        </div>
        <div className="flex lg:hidden gap-4">
          {product?.images.map((image, key) => {
            return (
              <Image
                className={`!flex-grow-0 !w-[65px] !h-[65px] cursor-pointer rounded-sm ease-in duration-300 hover:scale-110 ${
                  image == currentThumbnail &&
                  "scale-110 border-black border-[1px]"
                }`}
                imgSrc={image}
                key={key}
                onClick={() => handleThumbnail(image)}
              />
            );
          })}
        </div>
        <div className="w-full flex flex-col justify-start gap-4 text-2xl">
          <h1 className="font-light text-3xl">{product?.title}</h1>
          <div className=" flex flex-col">
            <h1 className="text-gray-500 text-lg">
              ${product?.product_variant[0].price}
            </h1>
          </div>
          <hr className="border-gray-400" />

          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-700">
              Color:{" "}
              <span className="font-semibold text-black">
                {currentVariant.title}
              </span>
            </p>
            <div className="flex gap-4">
              {product?.product_variant.map((variant, index) => {
                const variantColor =
                  variant.title === "White"
                    ? `bg-gray-300`
                    : variant.title === "Black"
                    ? "bg-black"
                    : `bg-${variant.title.toLowerCase()}-500`;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded cursor-pointer ${variantColor}`}
                    onClick={() =>
                      handleVariant(
                        variant.title,
                        variant.thumbnail,
                        variant.price
                      )
                    }
                  />
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-700">
                Size:{" "}
                <span className="font-semibold text-black">{currentSize}</span>
              </p>
              <div className="flex gap-4">
                {sizes.map((size, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        size == currentSize && "!border-black !text-black"
                      } py-1 min-w-[40px] text-center cursor-pointer border-2 border-gray-400 rounded text-sm text-gray-400`}
                      onClick={() => setCurrentSize(size)}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="font-light text-base">
            {product?.description}
            <br /> <br /> Note: This is a demo store.
          </p>
          <div className="flex flex-col gap-4 ">
            <button
              className="border-[1px] border-black w-full py-2 hover:bg-brand text-sm font-light  hover:text-whit hover:scale-[103%] duration-300"
              onClick={() =>
                increaseCartQuantity(
                  product?.id || 0,
                  currentVariant.thumbnail,
                  product?.title || "",
                  currentVariant.price,
                  currentVariant.title
                )
              }
            >
              Add to cart
            </button>
            <button className="border-0 bg-black hover:bg-brand text-white w-full py-2 text-sm font-light hover:scale-[103%] duration-300">
              Buy now
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Product;
