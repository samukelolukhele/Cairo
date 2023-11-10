import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Container from "../../components/Container";
import Section from "../../components/Section";

const Testimonials = () => {
  const slides = [
    {
      img: "/images/testimonials/Testimonial-1.jpg",
      text: "Cairo is my go-to when it comes to ethical clothing. They offer a fantastic selection of stylish and sustainable options that I can feel good about purchasing.",
      name: "Anne Cartwright",
    },
  ];

  return (
    <Section className="bg-[#fdd] py-20">
      <Container className="flex-col items-center gap-8 md:gap-4">
        <h1 className="text-xl text-[#565656]">Testimonials</h1>
        {slides.map((slide, i) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-16 items-center w-full md:max-w-[1130px] "
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
          <MdKeyboardArrowLeft className="hover:bg-black hover:text-white rounded-full" />
          <MdKeyboardArrowRight className="hover:bg-black hover:text-white rounded-full" />
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
