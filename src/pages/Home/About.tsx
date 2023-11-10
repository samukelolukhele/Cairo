import Container from "../../components/Container";
import Section from "../../components/Section";

const About = () => {
  return (
    <Section>
      <Container className="flex-col text-center gap-16 lg:gap-32">
        <h3 className="w-full text-2xl font-semibold">What Inspires Us</h3>
        <div className="flex flex-col md:items-center lg:flex-row gap-16 lg:gap-32">
          <img
            src="/images/home-about.png"
            alt="home-about"
            className="w-full h-[280px] md:h-full md:w-2/3 lg:h-[481px] object-cover"
          />
          <div className="relative flex flex-col gap-8 md:gap-16 md:items-center lg:items-start lg:text-left justify-center">
            <h1 className="text-3xl font-semibold lg:font-normal lg:text-5xl">
              Noveau Couture
            </h1>
            <p className="md:w-3/4 lg:w-full text-xl lg:text-lg lg:font-light text-left md:text-center lg:text-left">
              Experience the thrill of wearing quality fashion that is uniquely
              designed to express your individuality. Our Nouveau Couture
              collection combines craftsmanship with contemporary aesthetics to
              create garments that are truly one-of-a-kind.
            </p>
            <img
              src="/assets/star-3.svg"
              alt="star-3"
              className="absolute w-[268px] bottom-[-50%] left-[-40%]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
