import useIsMobile from "../../utils/hooks/useIsMobile";
import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import Info from "./Info";
import MobileHero from "./MobileHero";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

const Home = () => {
  const { isTablet, isMobile } = useIsMobile();
  return (
    <>
      {isTablet || isMobile ? <MobileHero /> : <Hero />}
      <Info />
      <Featured />
      <Testimonials />
      <About />
      <Newsletter />
    </>
  );
};

export default Home;
