function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        {/* Identity */}
        <h1 className="text-4xl font-semibold mb-4">
          Sarthak Tarde
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl">
          I build calm, performant web applications focused on real-world
          problems, clean architecture, and consistent execution.
        </p>

        {/* Current Focus */}
        <div className="mt-12 space-y-2 text-neutral-300">
          <p>→ Currently building developer-focused web products</p>
          <p>→ Practicing DSA and system thinking daily</p>
          <p>→ Exploring modern frontend performance patterns</p>
        </div>

        {/* Live Proof (Placeholder) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-neutral-800 p-4 rounded-lg">
            <p className="text-sm text-neutral-500">GitHub</p>
            <p className="text-xl font-medium">Loading activity…</p>
          </div>

          <div className="border border-neutral-800 p-4 rounded-lg">
            <p className="text-sm text-neutral-500">LeetCode</p>
            <p className="text-xl font-medium">Loading stats…</p>
          </div>

          <div className="border border-neutral-800 p-4 rounded-lg">
            <p className="text-sm text-neutral-500">Projects</p>
            <p className="text-xl font-medium">Loading…</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
