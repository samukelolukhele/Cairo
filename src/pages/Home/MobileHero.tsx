import React from "react";
import Section from "../../components/Section";
import { Link } from "react-router-dom";

const MobileHero = () => {
  return (
    <Section className="relative min-h-screen bg-black mt-[-1px]">
      <div className="relative flex flex-col items-center gap-2 h-[840px]">
        <img
          src="/images/mobile-hero.png"
          alt="mobile-hero"
          className="object-contain w-full h-[548px]"
        />
        <h1 className="font-logo text-[4rem] text-center text-white">Cairo</h1>
        <h3 className="text-brand font-bold text-2xl mb-4">
          #Express Yourself
        </h3>
        <Link
          to="/"
          className="py-2 text-center w-[229px] text-2xl rounded-3xl bg-white font-light"
        >
          Get Started
        </Link>
      </div>
    </Section>
  );
};

export default MobileHero;
