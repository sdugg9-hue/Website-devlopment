"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Barriecito} from "next/font/google";

import { motion } from "framer-motion";
const barr = Barriecito({
  subsets: ["latin"],
  weight: "400",
});
const projects = () => {
  return (
    <div>projects</div>
  )
}

export default function page(){
  return(
    <div className= "min-h-screen bg-pink-100 relative overflow-hidden"> 
      <div className= "absolute -right-10 -top-2 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
      <div className= "absolute -center -bottom-5 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
       <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`relative text-3xl font-extrabold text-red-700 tracking-wide mt-17 ml-12 ${barr.className}`}
      >
        |PROJECTS|
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative grid grid-cols-2 gap-16 justify-items-center mt-20 px-20"
      ></motion.div>
        <div className="relative grid grid-cols-2 gap-16 justify-items-center mt-20 px-20">
          <div className="max-w-[400px] rounded-3xl bg-pink-200 shadow-md p-6 transition duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer">
  
        
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-[#5b1d27]">
                Bakery Simulator
              </h2>

              <div className="flex gap-3 text-xl text-[#5b1d27]">
                <a
                  href="https://github.com/sdugg9-hue/Python-Project---Bakery-Simulator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

  
            <p className="mt-2 text-sm text-[#8c4c57]">
              Python - Turtle Graphics - PIL
            </p>

           
            <p className="mt-4 text-base text-[#6d3742] leading-relaxed">
              Interactive bakery simulation game built for CS 111 using event-driven programming, OOP and turtle graphics.
            </p>

          
            <div className="mt-5 overflow-hidden rounded-xl">
              <Image
                src="/images/project.png"
                alt="Project 1"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          </div>  

          <div className= "flex flex-col items-center">
          <a href="/projects/project2">
          <Image
            src="/images/file.png"
            alt="Project folder"
            width={350}
            height={280}
            className="object-contain hover:scale-105 transition cursor-pointer"
          />
          </a>
          <h2 className="mt-2 flex justify-center text-red-800 font-semibold tracking-wide">
              Project 2
            </h2>
          </div>
          <div className= "flex flex-col items-center">
          <a href="/projects/project3">
          <Image
            src="/images/file.png"
            alt="Project folder"
            width={350}
            height={280}
            className="object-contain hover:scale-105 transition cursor-pointer"
          />
          </a>
          <h2 className="mt-2 flex justify-center text-red-800 font-semibold tracking-wide">
              Project 3
            </h2>
          </div>
          <div className= "flex flex-col items-center">
          <a href="/projects/project4">
          <Image
            src="/images/file.png"
            alt="Project folder"
            width={350}
            height={280}
            className="object-contain hover:scale-105 transition cursor-pointer"
          />
          </a>
            <h2 className="mt-2  flex justify-center text-red-800 font-semibold tracking-wide">
              Project 4
            </h2>
          </div>

</div>
      </div>
  )
}