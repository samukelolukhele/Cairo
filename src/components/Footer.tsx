import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Container from "./Container";
import { Link } from "react-router-dom";

const UpperFooter = () => {
  const footerElements = [
    {
      title: "Shop",
      links: [
        {
          title: "Womens",
          to: "/",
        },
        {
          title: "Mens",
          to: "/",
        },
        {
          title: "Jackets",
          to: "/",
        },
        {
          title: "Pants",
          to: "/",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          title: "About Us",
          to: "/about",
        },
        {
          title: "Contact",
          to: "/",
        },
        {
          title: "Testimonials",
          to: "/",
        },
      ],
    },
  ];
  return (
    <div className="py-12 flex flex-col lg:flex-row gap-20 border-y-[1px] border-black">
      <div className="flex flex-col w-full lg:w-min lg:flex-shrink gap-6">
        <h1 className="font-logo text-6xl w-full">Cairo</h1>
        <p className="text-xl w-full text-[#888] md:w-2/4 lg:w-[310px] lg:text-base">
          This is a concept e-commerce store that serves a proof of concept. No
          data is saved on a database and no actual transactions take place.
        </p>
        <div className="flex gap-8 text-4xl lg:text-2xl w-fit">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
      {footerElements.map((element, i) => {
        return (
          <div className="flex flex-col gap-8" key={i}>
            <h1 className="text-4xl lg:text-2xl font-bold">{element.title}</h1>
            <div className="flex flex-col gap-4 text-2xl lg:text-base">
              {element.links.map((link, i) => {
                return (
                  <Link to={link.to} key={"link-" + i}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LowerFooter = () => {
  return (
    <div className="flex justify-between items-center py-4 text-sm">
      <p>© 2023 Cairo. All rights reserved </p>
      <p className="text-right">Designed by S.K Lukhele</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container className="flex-col">
        <UpperFooter />
        <LowerFooter />
      </Container>
    </footer>
  );
};

export default Footer;
