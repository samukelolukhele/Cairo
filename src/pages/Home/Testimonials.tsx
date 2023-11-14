import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { useState } from "react";

const Testimonials = () => {
  const slides = [
    {
      img: "/images/testimonials/Testimonial-1.jpg",
      text: "Cairo is my go-to when it comes to ethical clothing. They offer a fantastic selection of stylish and sustainable options that I can feel good about purchasing.",
      name: "Anne Cartwright",
    },
    {
      img: "/images/testimonials/Testimonial-2.jpg",
      text: "Shopping at Cairo makes me feel good about my choices, knowing that I'm supporting a brand that aligns with my values.",
      name: "Chris Nalewanej",
    },
    {
      img: "/images/testimonials/Testimonial-3.jpg",
      text: "Cairo knows how to create pieces that make you feel like a million bucks. If you want to turn heads and feel like a true fashionista, Cairo is your go-to brand!",
      name: "Fiona Davis",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide > slides.length - 2) return setCurrentSlide(0);

    return setCurrentSlide((prev) => prev + 1);
  };

  const handlePreviousSlide = () => {
    if (currentSlide === 0) return setCurrentSlide(slides.length - 1);

    return setCurrentSlide((prev) => prev - 1);
  };

  return (
    <Section className="bg-[#fdd] py-20 overflow-x-hidden">
      <Container className="flex-col items-center gap-8 md:gap-4">
        <h1 className="text-xl text-[#565656]">Testimonials</h1>
        {slides.map((slide, i) => {
          return (
            <div
              className={`${
                i === currentSlide
                  ? "flex opacity-100 translate-x-0 pointer-events-auto"
                  : "absolute opacity-0 duration-200 translate-x-[30%] !pointer-events-none"
              } flex flex-col md:flex-row gap-16 items-center w-full md:max-w-[1130px] duration-1000`}
              key={i}
            >
              <img
                src={slide.img}
                alt={`testimonial-${i}`}
                className="w-[180px] lg:w-[255px] aspect-square object-cover rounded-full"
              />
              <div className="flex flex-col text-center gap-8 w-full items-center md:items-start md:text-left">
                <img
                  src="/assets/stars.svg"
                  alt="stars"
                  className="w-[206px] h-[30px]"
                />
                <p className="text-xl font-light">{slide.text}</p>
                <i className="text-[#565656] text-xl">-{slide.name}</i>
              </div>
            </div>
          );
        })}
        <div className="flex gap-8 items-center justify-center w-full text-4xl ">
          <MdKeyboardArrowLeft
            onClick={handlePreviousSlide}
            className="hover:bg-black cursor-pointer hover:text-white rounded-full"
          />
          <MdKeyboardArrowRight
            onClick={handleNextSlide}
            className="hover:bg-black cursor-pointer hover:text-white rounded-full"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
