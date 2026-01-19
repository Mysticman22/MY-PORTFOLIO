import { Home, Folder, User } from "lucide-react";

export default function FloatingNav() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass flex gap-4 px-4 py-3">
        {[Home, Folder, User].map((Icon, i) => (
          <button
            key={i}
            className="w-10 h-10 rounded-full flex items-center justify-center
            hover:scale-110 transition"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}
