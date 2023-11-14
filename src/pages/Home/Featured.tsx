import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Section from "../../components/Section";
import products from "../../utils/products";
import Product from "../../components/Product";

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
              <Product
                key={id}
                thumbnail={product_variant[0].thumbnail}
                title={title}
                price={product_variant[0].price}
                collection={collection}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Featured;
