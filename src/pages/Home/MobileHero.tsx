import Container from "../../components/Container";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import Typewriter from "../../components/Typewriter";
import useAos from "../../utils/hooks/useAos";

const MobileHero = () => {
  useAos();
  return (
    <Section className="relative min-h-screen bg-black pb-20 mt-[-1px]">
      <Container className="relative flex flex-col items-center gap-2 ">
        <img
          src="/images/mobile-hero.webp"
          alt="mobile-hero"
          className="object-contain w-full h-[458px] md:flex-1"
        />
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="font-logo text-[4rem] text-center text-white"
        >
          Cairo
        </h1>
        <h3 className="text-brand font-bold text-2xl mb-4">
          <Typewriter text="#Express Yourself" delay={200} />
        </h3>
        <Link
          to="/shop"
          className="py-2 text-center w-[229px] text-xl rounded-3xl bg-white font-light"
        >
          Shop Now
        </Link>
      </Container>
    </Section>
  );
};

export default MobileHero;
