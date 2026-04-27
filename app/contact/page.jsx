"use client";
import React from "react";
import { motion } from "framer-motion";
import { Barriecito } from "next/font/google";

const barr = Barriecito({
  subsets: ["latin"],
  weight: "400",
});

export default function ContactPage() {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full px-6 py-12"
      >
            
        <div className="w-full max-w-6xl mx-auto min-h-[500px] bg-pink-50 border border-red-200 rounded-2xl shadow-md p-8 grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-4">
            <h2 className={`text-3xl font-bold text-red-700 ${barr.className}`}>
              Print("CONTACT");
            </h2>

            <p className="text-L text-gray-600">
            Let's connect! Feel free to reach out.
            </p>

            <div className="mt-6 space-y-3">
              <p className="text-red-800 font-L">
                sdugg9@uic.edu
              </p>

              <div className="flex gap-4 text-red-700">
                <a href="https://github.com/sdugg9-hue" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                                        GitHub</a>
                <a href="https://www.linkedin.com/in/siri-hasini-duggirala-0755493b2/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
          LinkedIn
        </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <input className="w-1/2 p-2 border rounded-md" placeholder="First Name" />
              <input className="w-1/2 p-2 border rounded-md" placeholder="Last Name" />
            </div>

            <input className="w-full p-2 border rounded-md" placeholder="Email" />

            <textarea className="w-full p-2 border rounded-md h-32" placeholder="Message" />

            <button
              onClick={() => alert("Message sent! (demo)")}
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition"
            >
              Send
            </button>
          </div>

        </div>
      </motion.section>

    </div>
  );
}