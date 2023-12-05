import Typewriter from "../../components/Typewriter";
import useAos from "../../utils/hooks/useAos";

const Hero = () => {
  useAos();
  return (
    <section className="relative w-full h-screen lg:max-h-[675px] bg-black text-white">
      <div className="container !px-0 h-full">
        <i className="absolute text-brand text-3xl top-12 font-semibold">
          #Express <br />{" "}
          <span className="font-[900] not-italic">Yourself</span>
        </i>
        <div className="relative flex flex-col items-center justify-center w-full h-full">
          <h1 className="absolute bottom-[-40%] opacity-10 font-logo text-[31rem]">
            <Typewriter text="Cairo" delay={200} />
          </h1>
          <h1 className="absolute top-[10%] text-6xl text-center font-black">
            <img
              className="absolute h-[5.7rem] w-[18.9375rem] top-[-0.75rem] left-[-1.25rem]"
              src="/assets/dotted-rectangle.svg"
              alt="dotted_rectangle"
            />{" "}
            Show off your best self
          </h1>
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            src="/images/hero-img.webp"
            alt="home_hero"
            className="relative z-[2] h-[34.5rem] mt-auto object-contain w-full"
          />
          <div className="absolute flex flex-col gap-2 p-8 right-0 top-[10%] rounded-[4rem] border-[1px] border-white">
            <div className="flex text-brand">
              <h2 className="text-6xl font-bold">30</h2>
              <p className="text-xl">
                %<br />
                off
              </p>
            </div>
            <p className="text-2xl font-bold">
              #Flash
              <br />
              Sale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
