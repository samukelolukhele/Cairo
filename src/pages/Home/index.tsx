import useIsMobile from "../../utils/hooks/isMobile";
import About from "./About";
import Featured from "./Featured";
import Hero from "./Hero";
import Info from "./Info";
import MobileHero from "./MobileHero";

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileHero /> : <Hero />}
      <Info />
      <Featured />
      {/* <About /> */}
    </>
  );
};

export default Home;
