import Section from "../../components/Section";
import Container from "../../components/Container";
import { BsHeart } from "react-icons/bs";
import useAos from "../../utils/hooks/useAos";

const Info = () => {
  useAos();

  return (
    <Section className="!py-20 !md:py-40 h-fit" id="home-info">
      <Container className="flex-col text-center items-center justify-center gap-12">
        <BsHeart className="text-brand text-[5rem]" />
        <h3
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor="#home-info"
          className="text-4xl"
        >
          Upgrade Your Wardrobe
        </h3>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-anchor="#home-info"
          className="text-xl text-left md:text-center font-light md:w-3/4"
        >
          Express your individuality with our curated selection of Nouveau
          Couture. Discover avant-garde designs and cutting-edge fashion that
          pushes boundaries and breaks traditional norms.
        </p>
      </Container>
    </Section>
  );
};

export default Info;
