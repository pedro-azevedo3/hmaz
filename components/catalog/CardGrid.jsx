export default function CardGrid({ children, min = 248 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${min}px, 100%), 1fr))`,
        gap: 22,
      }}
    >
      {children}
    </div>
  );
}
