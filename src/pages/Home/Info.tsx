import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsHeart } from "react-icons/bs";

const Info = () => {
  return (
    <Section className="!py-20 !md:py-40 h-fit">
      <Container className="flex-col text-center items-center justify-center gap-12">
        <BsHeart className="text-brand text-[5rem]" />
        <h3 className="text-4xl">Upgrade Your Wardrobe</h3>
        <p className="text-xl md:text-center font-light w-3/4">
          Express your individuality with our curated selection of Nouveau
          Couture. Discover avant-garde designs and cutting-edge fashion that
          pushes boundaries and breaks traditional norms.
        </p>
      </Container>
    </Section>
  );
};

export default Info;
