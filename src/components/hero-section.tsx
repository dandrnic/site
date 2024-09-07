"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt="a pic of me on a windy day"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-7xl">
          hey👋🏼, I'm Nick!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          Welcome to my corner of the internet :]
          I'm a current senior at Swarthmore College. 
          I do random things mainly with Python and JavaScript. 
          <br />
        

          <br />
          </p>
          
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={99} className="animate-bounce" />
        </Link>
      </div>
      {/* <iframe src="http://www.icj.me/plugins/nowplaying.php?nichles=<nichles>&color=<red>" seamless></iframe> */}
    </section>
  );
};

export default HeroSection;
