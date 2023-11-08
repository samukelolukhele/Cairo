import useIsMobile from "../utils/hooks/isMobile";
import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import MobileHero from "./MobileHero";

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileHero /> : <Hero />}
      <Featured />
      {/* <About /> */}
    </>
  );
};

export default Home;
