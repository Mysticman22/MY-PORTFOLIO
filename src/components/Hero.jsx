import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 20, // 20-40s duration
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  // Mouse tracking aura
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - 250); // Offset by half the width of the aura
    mouseY.set(e.clientY - 250);
  };

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background and Parallax Bg - Cosmic Nebula */}
      <motion.div 
        className="absolute inset-0 z-0 bg-background"
        style={{ y: yBg }}
      >
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-accent-cyan/15 rounded-full blur-[120px] pointer-events-none z-20 hidden md:block"
          style={{ x: springX, y: springY }}
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#0B0F17] via-transparent to-[#0B0F17] z-10 pointer-events-none" />
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-[#4C1D95]/30 rounded-full blur-[160px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#0284C7]/30 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[900px] h-[400px] bg-[#0EA5E9]/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }} />
        <Particles />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-7xl"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-2 px-6 rounded-full border border-glass-border bg-glass-card text-sm md:text-base font-bold tracking-widest text-accent-cyan uppercase mb-8 backdrop-blur-md">
            Product-driven Engineering
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[7rem] leading-tight font-display font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Hi, I’m Sarthak — <br className="hidden md:block"/> Building <span className="text-glow text-white">Intelligent</span> Digital Systems
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl text-text-muted mb-12 max-w-4xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Full Stack Developer <span className="mx-2 text-accent-blue">•</span> AI Engineer <span className="mx-2 text-accent-violet">•</span> System Architect
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="px-10 py-5 rounded-full bg-white text-black text-lg font-bold tracking-wide hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
            Explore My Work
          </button>
          <button className="px-10 py-5 rounded-full glass border border-glass-border text-lg font-bold hover:bg-white/10 hover:scale-105 hover:border-white/30 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-text-muted mb-2 tracking-widest uppercase">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent"
          animate={{ height: ["0px", "48px"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
