import Aos from "aos";
import { useEffect } from "react";

const useAos = () => {
  useEffect(() => {
    Aos.init();
  }, []);
};

export default useAos;
