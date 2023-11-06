import { Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";
import products from "../utils/products";

const Featured = () => {
  return (
    <Section className="z-10 py-20">
      <Container className="flex-col gap-20">
        <div className="flex justify-between text-2xl font-semibold w-full">
          <p>See What's New</p>
          <Link className="text-black underline" to="/">
            Shop Now
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8">
          {products.map((product) => {
            const { id, title, product_variant, collection } = product;
            return (
              <div className="flex flex-col text-lg gap-2" key={id}>
                <div
                  className="w-full shadow-lg h-[400px] bg-no-repeat rounded-3xl object-contain bg-center bg-cover mb-4"
                  style={{
                    backgroundImage: `url(${product_variant[0].thumbnail})`,
                  }}
                />
                <div className="flex flex-col mx-4 gap-1">
                  <div className="flex justify-between w-full items-center">
                    <p className="font-semibold">{title}</p>
                    <p>${product_variant[0].price}</p>
                  </div>
                  <p className="text-gray-500">{collection}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Featured;
