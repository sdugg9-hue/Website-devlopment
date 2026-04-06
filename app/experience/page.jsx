"use client";
import React from 'react'
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


const contact = () => {
  return (
    <div>experience</div>
  )
}

export default function page(){
  return(
    <div className= "min-h-screen bg-pink-100 relative overflow-hidden"> 
      <div className= "absolute center -top-10 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
      <div className= "absolute -right-45 -bottom-40 w-[700px] h-[300] bg-pink-300 blur-3xl rounded-full opacity-70"></div>
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`relative text-3xl font-extrabold text-red-700 tracking-wide mt-17 ml-12 ${barr.className}`}
      >
        std::Experience::std
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex flex-col gap-8 mt-16 px-20 ${arm.className}`}
      >
       
                <div className="p-8 rounded-xl shadow-md bg-red-600 ">
            <h2 className="text-3xl font-bold mb-2">Students Activity Board</h2>
            <p className="text-2xl font-semibold mb-2">
              Member · Sep 2025 - Present
            </p>
            <p className="text-xl font-semibold mb-2">
              University of Illinois Chicago
            </p>
            <p className="text-xl font-semibold mb-2">
              Contributing to the planning and execution of 
              campus-wide events that promote student 
              engagement and community building.
            </p>
          </div>
           
          <div className="p-8 rounded-xl shadow-md bg-red-700">
          <h2 className="text-3xl font-bold mb-2">Co-Chair, Management Committee</h2>
            <p className="text-2xl font-semibold mb-2">
              Entrepreneurs Fest · Aug 2023

            </p>
            <p className="text-xl font-semibold mb-2">
              DDMS P.OBUL REDDY PUBLIC SCHOOL
            </p>
            <p className="text-xl font-semibold mb-2">
              Oversaw logistics for a 2-day entrepreneurship 
              festival with 1,800+ attendees. Contributed to 
              fundraising efforts that raised $1,500+ for 
              children with disabilities.
            </p>
        </div>

         <div className="p-8 rounded-xl shadow-md bg-red-800">
          <h2 className="text-3xl font-bold mb-2">Executive Manager</h2>
            <p className="text-2xl font-semibold mb-2">
              Foodies Spotlight, Entrepreneurs Fest · Nov 2022

            </p>
            <p className="text-xl font-semibold mb-2">
              DDMS P.OBUL REDDY PUBLIC SCHOOL
            </p>
            <p className="text-xl font-semibold mb-2">
              Managed operations for a student-run venture 
              with a team of 6. Achieved the highest profit 
              among 9 participating teams.
            </p>
        </div>



     </motion.div>
    
</div>
  )
}

