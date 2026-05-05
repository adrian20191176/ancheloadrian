import TalkingAvatar from "./talking-avatar";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="intro-panel">
        <div className="intro-copy">
          <p className="eyebrow">Adrian Anchelo</p>
          <h1>Adrian</h1>
          <p className="intro-text">
            A 3D version of me, set up on the main page with a quiet talking
            motion.
          </p>
        </div>
        <TalkingAvatar />
      </section>
    </main>
  );
}
