export default function HomePage() {
  return (
    <main className="section section-light">
      <div className="container">
        <span className="eyebrow">ZUNOKS</span>

        <h1
          style={{
            marginTop: "1.5rem",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            maxWidth: "10ch",
          }}
        >
          Foundation Ready
        </h1>

        <p
          style={{
            marginTop: "1.5rem",
            maxWidth: "42rem",
            color: "var(--text-secondary)",
          }}
        >
          ZUNOKS premium interactive website foundation is ready for phased
          implementation.
        </p>
      </div>
    </main>
  );
}