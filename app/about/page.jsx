"use client";
import React from 'react'
import Image from "next/image";
import {Barriecito} from "next/font/google";

import { motion } from "framer-motion";
const barr = Barriecito({
  subsets: ["latin"],
  weight: "400",
});

import {Belleza} from "next/font/google";

const arm = Belleza ({
  subsets: ["latin"],
  weight: "400",
});


const about = () => {
  return (
    <div>about</div>
  )
}

export default function page() {
    return(
      <div className= "min-h-screen bg-pink-100 relative overflow-hidden"> 
      <div className= "absolute -right-45 -top-40 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
      <div className= "absolute -left-45 -bottom-40 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
       <h1
          className={`relative text-4xl font-extrabold text-red-700 tracking-wide mt-20 ml-12 ${barr.className}`}
        >
          Print(“ABOUT”);
        </h1>
         <div className="max-w-10xl space-y-3 mb-4">
          <p
            className={`relative text-2xl font-extrabold text-black tracking-wide mt-5 ml-12 ${arm.className}`}>
            Hi. I'm Hasini Duggirala, a freshman majoring in Computer Science at the University of Illinois Chicago. I'm at the very beginning of my CS journey, and it's been a really exciting start.
            I have been actively engaging with coursework, personal projects, and the broader CS community at UIC, all of which have strengthened my foundation and sharpened my technical curiosity.
          </p>
          
        <div className="h-3 w-[85%] rounded bg-pink-100" />
        
        
      </div>
      </motion.div>
        
        
      
      

      <div className="flex gap-10 mt-8 ml-10 items-start">
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.2 }}
    className="w-[350px] h-[350px] border border-black flex items-center justify-center"
  >
    <Image
      src="/images/picture.jpeg"
      alt="Hasini Duggirala"
      width={350}
      height={500}
      className="object-cover"
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.2 }}
    className={`flex-1 space-y-6 pt-2 ml-10 ${arm.className}`}
  >
    <p className="text-2xl font-abold text-black tracking-wide">
      I recently built an interactive game for my CS 111 class using Turtle Graphics, combining object-oriented and event-driven programming. 
      It was a great way to be creative and see the skills I was picking up come together into something real.
    </p>

    <p className="text-2xl font-abold text-black tracking-wide">
      My interests in CS are still growing, but I'm most drawn to healthcare technology, I love the idea of using software to solve problems that actually matter, whether that's improving how patients access care or making medical systems smarter and more efficient.
    </p>

    <p className="text-2xl font-abold text-black tracking-wide">
      Outside of CS, I'm a part of the Student Activity Board at UIC, where I've been picking up leadership skills, working with a team, and learning how to plan and execute events for the campus community. It's honestly been one of the highlights of my freshman year.
    </p>

    <p className="text-2xl font-abold text-black tracking-wide">
      I enjoy designing outfits, watching movies, and hanging out with my friends and family.
    </p>
  </motion.div>
</div>
</div>
        
      

    
  
      
    )
}