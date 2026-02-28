import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";
import TerminalWindow from "../components/TerminalWindow";
import ProfileWindow from "../components/ProfileWindow";
import TechStackBoxes from "../components/TechStackBoxes";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      {/* Floating Navigation */}
      <FloatingNav />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center px-6 lg:px-24">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="w-fit mb-6 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
              Always Ready to Boost …
            </span>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
              Heyy !! I’m <br />
              <span className="font-serif font-semibold">
                Sarthak <br /> Tarde,
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              I build intelligent systems at the intersection of{" "}
              <span className="font-medium text-gray-900">
                AI, data, and scalable web technologies.
              </span>
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex gap-4">
              <button
                className="px-8 py-3 rounded-full bg-black text-white
                           transition transform hover:scale-105 hover:shadow-lg"
              >
                Contact Me →
              </button>

              <a
                href="/Sarthak_Tarde_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-gray-300
                           transition hover:bg-white hover:shadow-md"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT FLOATING WINDOWS */}
          <div className="relative hidden lg:block">
            <TerminalWindow />
            <ProfileWindow />
          </div>

        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section id="experience" className="px-6 lg:px-24">
        <Timeline />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-6 lg:px-24">
        <TechStackBoxes />
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 lg:px-24">
        <Projects />
      </section>

      {/* CONTACT SECTION */}
      <section id="about" className="px-6 lg:px-24 py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-12 max-w-2xl w-full"
        >
          <h2 className="text-3xl font-serif mb-6">Let's work together</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:sarthaktarde@gmail.com"
            className="px-10 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium
                       transition transform hover:scale-105"
          >
            Say Hello
          </a>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-gray-100 dark:border-white/5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sarthak Tarde. Built with passion.
      </footer>
    </>
  );
}
