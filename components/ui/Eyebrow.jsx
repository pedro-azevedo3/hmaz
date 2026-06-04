export default function Eyebrow({ children, color }) {
  return (
    <span
      style={{
        fontFamily: "'Spline Sans Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: color || "var(--accent-ink, #8a7a1e)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ width: 18, height: 2, background: "currentColor", display: "inline-block" }}></span>
      {children}
    </span>
  );
}
