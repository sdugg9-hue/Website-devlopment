import { Annie_Use_Your_Telescope, Fascinate } from "next/font/google";
import Link from "next/link";

const annie = Annie_Use_Your_Telescope({
  subsets: ["latin"],
  weight: "400",
});

const fasc = Fascinate({
  subsets: ["latin"],
  weight: "400",
});

export default function Mypage() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      
      <header className="relative flex items-center justify-center">
        
        {/* Pink Glow */}
        <div className="absolute left-1/2 top-1/2 w-[650px] h-[200px] bg-pink-300 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 -mt-6" />

        
        <h1
          className={`relative text-6xl font-extrabold text-white tracking-wide text-center ${fasc.className}`}
        >
          HASINI DUGGIRALA
        </h1>

      </header>

      {/* Text Section */}
     <div className={`${annie.className} mt-20 text-center max-w-2xl font-extrabold`} style={{ color: "#970a0aff" }}>
        
        <p className="leading-relaxed text-2xl">
          Welcome to my page!! 
          I am a computer science student passionate about
          front-end development, healthcare technology & software engineering.
        </p>

        <h2 className="mt-6 text-2xl tracking-wide">
          CS Major at the University of Illinois at Chicago
                      expected graduation: 2029
        </h2>
        <h2 className="mt-6 text-2xl tracking-wide">
                    expected graduation: 2029
        </h2>

      </div>
         <div className="mt-12 flex justify-center gap-10">

  {/* <Link
    href="#about"
    className="px-8 py-3 border border-red-800 rounded-full text-red-800 font-semibold hover:bg-red-900 hover:text-white transition"
  >
    ABOUT
  </Link> */}

  {/* <Link
    href="#projects"
    className="px-8 py-3 border border-red-800 rounded-full text-red-800 font-semibold hover:bg-red-900 hover:text-white transition"
  >
    Projects
  </Link>

  <Link
    href="#experience"
    className="px-8 py-3 border border-red-800 rounded-full text-red-800 font-semibold hover:bg-red-900 hover:text-white transition"
  >
    Experience
  </Link> */}

</div>
<div className="space-y-5 pt-30">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
          className="-mt-14 px-10 py-5 flex justify-center border border-red-800 rounded-full text-red-800 font-semibold hover:bg-red-900 hover:text-white transition">
          Resume
        </a>
        </div>
    </div>
  );
}