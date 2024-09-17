"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topLineVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerLineVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomLineVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVarients = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white px-1">MY</span>
          <span className="w-12 h-8 rounded bg-white px-1 text-black flex items-center justify-center">
            STORE
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="Github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Manu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleOpen}
        >
          <motion.div
            variants={topLineVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerLineVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomLineVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && links && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                varients={listItemVarients}
                animate="opened"
                className=" "
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
