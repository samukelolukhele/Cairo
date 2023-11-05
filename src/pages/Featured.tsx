import { Link } from "react-router-dom";
import Container from "../components/Container";
import Section from "../components/Section";

const Featured = () => {
  return (
    <Section className="z-10 py-20">
      <Container>
        <div className="flex justify-between text-2xl font-semibold w-full">
          <p>See What's New</p>
          <Link className="text-black underline" to="/">
            Shop Now
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Featured;
