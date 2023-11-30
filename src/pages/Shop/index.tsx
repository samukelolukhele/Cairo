import Container from "../../components/Container";
import Product from "../../components/Product";
import Section from "../../components/Section";
import products from "../../utils/products";

const Shop = () => {
  return (
    <Section>
      <Container className="items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8">
          {products.map((product) => {
            const { id, title, product_variant, collection } = product;
            return (
              <Product
                key={id}
                id={id}
                productVariant={product_variant}
                thumbnail={product_variant[0].thumbnail}
                title={title}
                price={product_variant[0].price}
                collection={collection}
                link={`/shop/${id}`}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Shop;
