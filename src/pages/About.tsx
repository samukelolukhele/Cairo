import Section from "../components/Section";
import Container from "../components/Container";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <Section className="relative bg-black min-h-fit text-white py-0 flex items-center justify-end">
      <img
        src="/assets/triangle.svg"
        alt="triangle"
        className="absolute top-20 right-[50%]"
      />
      <img
        src="/assets/star.svg"
        alt="star"
        className="absolute bottom-10 left-0"
      />
      <div className="flex flex-col gap-6 w-full left-20 absolute">
        <h1 className="text-6xl font-bold">Nouveau Couture</h1>
        <hr className="py-1 border-brand w-1/3" />
        <p className="text-xl w-1/3 font-light leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sunt
          provident impedit assumenda velit quae minus maxime aliquid veniam ex
          officia, praesentium asperiores iure quaerat omnis labore officiis
          voluptate sed?
        </p>
        <button className="w-fit gap-4 flex bg-none border-[1px] border-solid border-white rounded-3xl py-[.1rem] pl-4 justify-between items-center">
          <p className="text-lg">About Us </p>
          <div className="p-2 rounded-full bg-white mr-[0.5px] text-black">
            <BsArrowRight />
          </div>
        </button>
      </div>
      <img
        src="/images/home-about.png"
        alt="home-about"
        className="w-[800px] h-full right-0 object-contain"
      />
    </Section>
  );
};

export default About;
