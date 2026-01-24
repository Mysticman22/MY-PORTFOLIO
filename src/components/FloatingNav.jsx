import { Home, Folder, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function FloatingNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass flex gap-4 px-4 py-3 items-center">

        {/* Navigation Icons */}
        {[Home, Folder, User].map((Icon, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-full flex items-center justify-center
                       transition-transform duration-300 hover:scale-110"
          >
            <Icon size={18} />
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-black/10 dark:bg-white/20" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center
                     transition-transform duration-300 hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

      </div>
    </div>
  );
}
