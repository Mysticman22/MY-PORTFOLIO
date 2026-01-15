import ContentGrid from "../components/ContentGrid.jsx";
import MotionSection from "../components/MotionSection.jsx";

function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <ContentGrid>
        <MotionSection>
          <section className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight">
              Sarthak Tarde
            </h1>

            <p className="text-lg text-neutral-400 max-w-2xl">
              I build immersive, high-signal web products focused on
              real-world impact, clean architecture, and long-term clarity.
            </p>
          </section>
        </MotionSection>

        <div className="h-24" />

        <MotionSection delay={0.15}>
          <section className="space-y-3 text-neutral-300">
            <p>→ Designing a content-first developer portfolio</p>
            <p>→ Practicing DSA and problem-solving daily</p>
            <p>→ Exploring modern frontend UX & performance patterns</p>
          </section>
        </MotionSection>

        <div className="h-32" />

        <MotionSection delay={0.3}>
          <section className="space-y-6">
            <div className="border border-neutral-800 rounded-lg p-6">
              <p className="text-sm text-neutral-500 mb-1">GitHub</p>
              <p className="text-xl">Activity loading…</p>
            </div>

            <div className="border border-neutral-800 rounded-lg p-6">
              <p className="text-sm text-neutral-500 mb-1">LeetCode</p>
              <p className="text-xl">Stats loading…</p>
            </div>
          </section>
        </MotionSection>
      </ContentGrid>
    </main>
  );
}

export default Home;
