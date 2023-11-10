import useIsMobile from "../../utils/hooks/isMobile";
import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import Info from "./Info";
import MobileHero from "./MobileHero";
import Testimonials from "./Testimonials";

const Home = () => {
  const { isTablet } = useIsMobile();
  return (
    <>
      {isTablet ? <MobileHero /> : <Hero />}
      <Info />
      <Featured />
      <Testimonials />
      {/* <About /> */}
    </>
  );
};

export default Home;
