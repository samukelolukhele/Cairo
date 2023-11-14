export interface ProductComponent {
  thumbnail: string;
  title: string;
  price: number;
  collection: string;
}

const Product = ({ thumbnail, title, price, collection }: ProductComponent) => {
  return (
    <div className="flex flex-col text-lg gap-2">
      <div
        className="w-full shadow-lg h-[400px] bg-no-repeat rounded-3xl object-contain bg-center bg-cover mb-4 flex items-end justify-end"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <button className="rounded-b-3xl py-2 w-full text-center text-white bg-brand">
          Add To Cart
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
