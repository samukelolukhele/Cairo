import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width <= 1024 && width > 768;
  return { isMobile, isTablet };
};

export default useIsMobile;
