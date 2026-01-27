import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";
import TerminalWindow from "../components/TerminalWindow";
import ProfileWindow from "../components/ProfileWindow";
import RotatingTechStack from "../components/RotatingTechStack";

export default function Home() {
  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-24">
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

      {/* TECH STACK SECTION */}
      <section className="px-6 lg:px-24">
        <RotatingTechStack />
      </section>
    </>
  );
}
