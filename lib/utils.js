export function shade(hex, amt) {
  const h = hex.replace("#", "");
  const n = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  const f = (c) => Math.max(0, Math.min(255, Math.round(c + 255 * amt)));
  return "#" + [f(r), f(g), f(b)].map((c) => c.toString(16).padStart(2, "0")).join("");
}
