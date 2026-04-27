import Mypage from "./components/Mypage";
import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="bg-pink-100">
      <section id="home">
        <Mypage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </main>
  );
}