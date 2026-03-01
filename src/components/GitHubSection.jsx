import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { GitCommit, Github, Star, Users, GitMerge, FileCode2 } from "lucide-react";

// Mock Data
const MOCK_STATS = {
  repos: 42,
  stars: 128,
  followers: 45,
  contributions: 1042
};

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (value) => {
        setCount(Math.round(value));
      }
    });
    return controls.stop;
  }, [from, to, duration]);

  return <span>{count}</span>;
}

const StatCard = ({ icon: Icon, label, value, color }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-panel p-6 flex items-center gap-6 group hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-shadow duration-300"
  >
    <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${color}`}>
      <Icon size={28} />
    </div>
    <div>
      <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-glow transition-all duration-300">
        <AnimatedCounter to={value} />
      </div>
      <div className="text-sm font-medium text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  </motion.div>
);


const HeatmapMock = () => {
  // Generating a realistic looking contribution heatmap grid
  const cols = 40;
  const rows = 7;
  const cells = Array.from({ length: cols * rows }).map((_, i) => {
    const intensity = Math.random();
    let bg = "bg-white/5";
    let border = "border border-white/5";
    if (intensity > 0.9) bg = "bg-accent-blue";
    else if (intensity > 0.7) bg = "bg-accent-blue/80";
    else if (intensity > 0.4) bg = "bg-accent-blue/50";
    else if (intensity > 0.2) bg = "bg-accent-blue/30";
    
    return <div key={i} className={`w-3 h-3 rounded-sm ${bg} ${border} transition-colors duration-500 hover:scale-150 hover:z-10 cursor-crosshair`} />;
  });

  return (
    <div className="glass-panel p-6 md:p-8 mt-8 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Github className="text-text-muted" /> Contribution Graph
        </h3>
        <span className="text-sm text-text-muted">Last Year</span>
      </div>
      <div className="min-w-[700px]">
         <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max">
           {cells}
         </div>
         <div className="flex items-center gap-2 justify-end mt-4 text-xs text-text-muted">
           <span>Less</span>
           <div className="w-3 h-3 rounded-sm bg-white/5" />
           <div className="w-3 h-3 rounded-sm bg-accent-blue/30" />
           <div className="w-3 h-3 rounded-sm bg-accent-blue/50" />
           <div className="w-3 h-3 rounded-sm bg-accent-blue/80" />
           <div className="w-3 h-3 rounded-sm bg-accent-blue" />
           <span>More</span>
         </div>
      </div>
    </div>
  )
}

export default function GitHubSection() {
  return (
    <section id="metrics" className="relative py-32 w-full border-t border-white/5 bg-dot-matrix bg-[#0B0F17]">
      {/* Subtle radial overlay to fade out the dots */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F17_80%)] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4"
        >
          Engineering <span className="text-glow text-white">Metrics</span>
        </motion.h2>
        <p className="text-text-muted">A quantitative overview of my open-source and professional activities.</p>
      </div>

      <div className="flex justify-center">
        
        {/* Stats & Heatmap */}
        <div className="w-full max-w-4xl flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <StatCard icon={FileCode2} label="Repositories" value={MOCK_STATS.repos} color="text-accent-violet" />
            <StatCard icon={Star} label="Stars Earned" value={MOCK_STATS.stars} color="text-yellow-400" />
            <StatCard icon={Users} label="Followers" value={MOCK_STATS.followers} color="text-accent-blue" />
            <StatCard icon={GitCommit} label="Contributions" value={MOCK_STATS.contributions} color="text-accent-cyan" />
          </div>
          
          <HeatmapMock />
        </div>

      </div>
      </div>
    </section>
  );
}
