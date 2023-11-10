import { BsSearch, BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="bg-black w-full">
      <nav className="flex justify-between items-center mx-8 lg:mx-0 lg:container border-b-[1px] border-white">
        <img src="/assets/logo.svg" alt="cairo_logo" className="w-24" />
        <ul className="hidden md:flex flex-col md:flex-row gap-12 font-raleway text-white items-center text-xl">
          <a href="/">Men</a>
          <a href="/">Women</a>
          {/* <a href="/">Kids</a> */}
          <a href="/">Collections</a>
        </ul>
        <div className="flex gap-12 text-white">
          <BsSearch className="text-xl" />
          <BsBag className="text-xl" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
