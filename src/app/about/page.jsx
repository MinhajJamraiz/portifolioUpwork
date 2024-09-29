"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const Page = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:1/2 lg:pr-0">
          {/* Biography */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIO TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIO DESCRIPTION */}
            <p className="text-lg">
              At Workaholic Studio, we’re more than just a software house—we're
              a passionate team of tech enthusiasts dedicated to turning
              innovative ideas into powerful solutions. Founded by a group of
              experienced developers and designers, our studio emerged from a
              shared vision: to create impactful software that drives success
              for businesses of all sizes. With a diverse skill set ranging from
              app development to UX/UI design, we pride ourselves on our ability
              to adapt and evolve alongside the ever-changing tech landscape.
              Our approach is collaborative and client-focused; we believe that
              the best results come from understanding your unique needs and
              challenges. Our commitment to excellence is reflected in every
              project we undertake. We combine creativity with cutting-edge
              technology to deliver tailor-made solutions that not only meet but
              exceed expectations. At Workaholic Studio, we thrive on challenges
              and are fueled by a relentless desire to innovate. Join us on this
              journey as we continue to push boundaries and create software that
              transforms industries. Let's work together to bring your vision to
              life!
            </p>
            {/* BIO QUOTE */}
            <span className="italic ">
              "Great things in business are never done by one person; they're
              done by a team of people." — Steve Jobs
            </span>
            {/* BIO SIGNATURE */}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 347 290"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.9455 136.388C38.1245 147.135 14.5137 114.467 10.4695 108.385C6.52187 102.447 1.90402 96.0223 1.65254 88.897C1.11206 73.5833 22.7194 78.0741 28.1035 80.6812C68.7554 100.366 54.5937 156.191 44.9359 188.99C37.6569 213.71 22.0022 238.049 16.3809 263.032C13.799 274.507 28.6028 242.927 34.3655 232.674C50.1036 204.671 66.7077 175.065 81.7066 146.758C96.6642 118.53 105.91 100.586 118.327 72.4153C122.065 63.9361 128.296 55.7317 128.296 46.4653C128.296 38.2434 122.637 61.926 120.481 69.8604C112.758 98.2897 108.618 118.553 103.348 148.512C96.4859 187.523 90.1297 227.595 88.119 267.24C87.7713 274.096 85.5563 290.038 91.9263 287.479C102.793 283.114 106.937 269.446 113.468 259.726C157.535 194.138 197.246 124.899 231.796 53.8295C237.851 41.3734 243.556 28.7482 247.826 15.5558C248.036 14.9089 252.161 3.68054 247.426 9.84485C231.855 30.1163 202.896 72.9396 224.181 98.0146C249.481 127.82 303.358 80.6936 319.214 61.7948C327.652 51.7371 350.578 19.8588 344.212 4.63481C340.975 -3.1049 316.59 8.64698 313.453 12.5C301.037 27.7475 292.681 50.1011 292.913 69.7602C293.056 81.8744 297.094 93.6037 298.173 105.629C300.607 132.743 296.06 160.344 282.894 184.381C274.3 200.071 261.195 214.928 243.618 220.751C224.145 227.202 192.366 220.874 196.528 193.398C202.091 156.668 247.162 136.268 276.281 122.963C289.156 117.08 306.691 111.35 318.963 103.425C348.76 84.1844 315.734 102.011 341.206 80.4808"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIO SCROLL SVG */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST  */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongo DB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Typescript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Flutter
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                BootStrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL lite
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <div>
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3 }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* Experience */}
          <div
            className="flex flex-col gap-12 justify-center pd-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              PROJECT TIMELINE
            </motion.h1>
            {/* EXPERIENCE LIST  */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* EXPERIENCE LIST ITEM 1  */}
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Zatca
                  </div>
                  {/* JOB DESCRIPTION  */}
                  <div className="p-3 text-sm italic">
                    Electronic Invoice Website backend
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    02-01-2024
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workaholic Studio
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM  2 */}
              <div className="flex justify-between h-48">
                {/* RIGHT  */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* LEFT  */}
                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    BreathEx
                  </div>
                  {/* JOB DESCRIPTION  */}
                  <div className="p-3 text-sm italic">
                    Medical Application to detect TB and COVID-19.
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    03-03-2024
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workaholic Studio
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3 */}
              <div className="flex justify-between h-48">
                {/* LEFT  */}
                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Bazzar
                  </div>
                  {/* JOB DESCRIPTION  */}
                  <div className="p-3 text-sm italic">
                    Innovative Marketplace project backend
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    10-06-2024
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workaholic Studio
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT  */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM  4 */}
              <div className="flex justify-between h-48">
                {/* RIGHT  */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* LEFT  */}
                <div className="w-1/3">
                  {/* JOB TITLE  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Yelp Clone
                  </div>
                  {/* JOB DESCRIPTION  */}
                  <div className="p-3 text-sm italic">
                    A resturant management system backend.
                  </div>
                  {/* JOB DATE  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    10-09-2024
                  </div>
                  {/* JOB COMPANY  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Workaholic Studio
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block sticky top-0 z-30 lg:w-1/3 xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
