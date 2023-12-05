import Section from "../../components/Section";
import Container from "../../components/Container";
import useAos from "../../utils/hooks/useAos";

const Hero = () => {
  useAos();
  return (
    <Section id="about-main">
      <Container className="flex-col-reverse md:flex-row gap-20">
        <div className="flex flex-col justify-center gap-12 md:gap-20">
          <div className="flex flex-col gap-4">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor="#about-main"
              className="text-4xl"
            >
              Our Story
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-anchor="#about-main"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              est illo fugit culpa ipsum hic necessitatibus eveniet eligendi
              amet voluptatem, consequatur ullam ad vero quod possimus nemo
              recusandae maiores magnam.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-3xl">Phone</h3>
              <p className="md:text-sm">+8(800)888-88-88</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-3xl">Email</h3>
              <p className="md:text-sm">info@cairo.com</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <h3 className="text-3xl">Address</h3>
              <p className="md:text-sm">
                Mandolin Street, <br /> 78,Mandolin region, <br /> 66666.
              </p>
            </div>
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-anchor="#about-main"
          src="/images/about-hero.webp"
          alt="hero"
          className="w-full h-[300px] md:w-2/4 md:h-[500px] object-cover rounded-3xl"
        />
      </Container>
    </Section>
  );
};

export default Hero;
