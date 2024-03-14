"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsArrowRight,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png"
              alt="Image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 
            object-cover border-[0.35rem]
            border-white shadow-xl
            rounded-full"
            />
            <motion.span
              className="text-4xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.7,
                delay: 0.1,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl 
      font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Amal. </span>
        I'm a{" "}
        <span className="font-bold">
          full-stack developer{" "}
        </span>
        with <span className="font-bold"> 8 years</span> of
        experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My
        focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
      gap-4 px-3 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 
        flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
        active:scale-95 transition shadow-2xl"
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          className="group bg-white  px-7 py-3 
        flex items-center gap-2 rounded-full  outline-none 
        focus:scale-110 hover:scale-110 
        active:scale-95 transition cursor-pointer border border-black/15 shadow-2xl"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white  p-4 text-gray-700
        flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 
        active:scale-95 transition cursor-pointer border hover:text-gray-950
         border-black/15 shadow-2xl"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white  p-4 text-gray-700
        flex items-center gap-2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 
        active:scale-95 transition cursor-pointer border hover:text-gray-950
         border-black/15 shadow-2xl"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
