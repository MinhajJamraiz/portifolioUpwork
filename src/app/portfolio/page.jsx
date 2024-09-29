"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Yelp from "./../../images/yelp.jpeg";
import Bazzar from "./../../images/bazzar.jpeg";

const projectList = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Zatca",
    desc: "The ZATCA Electronic Invoice website in Saudi Arabia allows businesses and individuals to create and verify electronic invoices effortlessly. Utilizing special QR codes compliant with ZATCA's regulations, it ensures the authenticity of invoices. No sign-up is required, making it accessible and user-friendly. The platform enhances efficiency, safety, and adherence to tax regulations.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "#",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "BreathEx",
    desc: "BreathEx is a cutting-edge medical application designed to detect tuberculosis (TB) and COVID-19 through advanced image processing and machine learning. Developed using Flutter for the frontend and Node.js/Flask for the backend, the application ensures a seamless user experience for healthcare professionals and patients. It features sophisticated image analysis algorithms for rapid and accurate detection, employs Bloc state management for efficient data flow, and utilizes MongoDB for robust data storage, optimizing performance and scalability. BreathEx empowers doctors to make timely diagnoses based on detailed patient image analysis while facilitating secure interactions between doctors, patients, and administrators, ultimately enhancing the quality of healthcare delivery.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "#",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Bazzar",
    desc: "Bazzar is an innovative marketplace project where backend development was led using TypeScript and Node.js to create a seamless platform for buyers, sellers, and vendors. The project features robust API endpoints and utilizes MongoDB for efficient database interactions, ensuring smooth server-side operations. Through this development, expertise in TypeScript's data type orientation was gained, enhancing code reliability and scalability for an improved marketplace experience. Additionally, the application was successfully deployed on Heroku, providing valuable proficiency in platform-as-a-service (PaaS) deployment strategies to ensure scalable and reliable performance.",
    img: Bazzar,
    link: "#",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "YELP CLONE",
    desc: "This project features a comprehensive Yelp clone, designed as a restaurant management system using PostgreSQL for robust database handling, Node.js for a reliable backend, and React.js for a responsive frontend interface. Key functionalities include streamlined restaurant registration, customer reviews, and ratings, facilitating seamless interaction between users and dining establishments. The project highlights expertise in relational databases, backend and frontend development, and deployment techniques using Jenkins for continuous integration and delivery. Overall, it showcases a commitment to creating user-centered applications that enhance engagement and improve the dining experience.",
    img: Yelp,
    link: "#",
  },
];

const Page = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-5rem)] flex items-center justify-center text-8xl text-center ">
          MY WORKS
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          {/* PROJECT ITEM */}
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
            {projectList.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center gap-8 text-white ">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] xl:w-[500px] xl:h-[300px]">
                    {/* <Image src={item.img} alt=" " fill /> */}
                    <Image src={item.img} fill></Image>
                  </div>
                  <p className=" ml-28 mr-28 text-center">{item.desc} </p>
                  <Link href={item.link} className="flex justify-end ">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Final Screen  */}
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-8">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
