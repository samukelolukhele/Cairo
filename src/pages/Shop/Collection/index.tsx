import { useParams } from "react-router-dom";
import Container from "../../../components/Container";
import Product from "../../../components/Product";
import Section from "../../../components/Section";
import products from "../../../utils/products";

const Collection = () => {
  const { collection } = useParams();
  return (
    <Section>
      <Container className="items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-8">
          {products
            .filter(
              (product) =>
                product.collection.toLowerCase() === collection?.toLowerCase()
            )
            .map((product) => {
              const {
                id,
                title,
                product_variant,
                collection: product_collection,
              } = product;
              return (
                <Product
                  key={id}
                  id={id}
                  productVariant={product_variant}
                  thumbnail={product_variant[0].thumbnail}
                  title={title}
                  price={product_variant[0].price}
                  collection={product_collection}
                  link={`/shop/${id}`}
                />
              );
            })}
        </div>
      </Container>
    </Section>
  );
};

export default Collection;
