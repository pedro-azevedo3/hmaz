export default function CardGrid({ children, min = 248 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`,
        gap: 22,
      }}
    >
      {children}
    </div>
  );
}
