export default function Placeholder({ label, ratio = "4 / 3", tone = "light", style }) {
  const dark = tone === "dark";
  const stripe = dark ? "rgba(239,214,75,0.10)" : "rgba(33,30,87,0.07)";
  const base = dark ? "#1a1840" : "#e9e7df";
  const ink = dark ? "rgba(239,214,75,0.85)" : "rgba(33,30,87,0.55)";
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        width: "100%",
        background: `repeating-linear-gradient(135deg, ${base}, ${base} 14px, ${stripe} 14px, ${stripe} 28px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Spline Sans Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: ink,
          background: dark ? "rgba(26,24,64,0.65)" : "rgba(233,231,223,0.7)",
          padding: "5px 10px",
          border: `1px solid ${dark ? "rgba(239,214,75,0.3)" : "rgba(33,30,87,0.18)"}`,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {label}
      </span>
    </div>
  );
}
