import { BsSearch, BsBag } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="bg-black w-full">
      <nav className="flex justify-between items-center w-full container border-b-[1px] border-white bg-black">
        <img src="/assets/logo.svg" alt="cairo_logo" className="w-24" />
        <ul className="flex gap-12 font-raleway text-white items-center text-xl">
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
