"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image container */}
        <div className="h-1/2 lg:w-1/2 lg:h-full relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 items-center justify-center ">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Ideas into Innovative Software Solutions
          </h1>
          {/* Description */}
          <p className="text-xl">
            Welcome to Workaholic Studio, where passion meets technology. We
            specialize in crafting custom software solutions designed to propel
            your business forward. Our dedicated team is committed to turning
            your ideas into reality, whether you need a powerful application,
            seamless integrations, or a comprehensive digital strategy. At
            Workaholic Studio, we believe in collaboration and innovation,
            ensuring that each project is tailored to meet your unique needs.
            Explore our services and discover how we can help you achieve your
            goals in the ever-evolving digital landscape!
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
