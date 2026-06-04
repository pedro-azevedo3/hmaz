'use client';

import { useState } from 'react';
import WhatsIcon from './WhatsIcon';

export default function WhatsButton({ href, children, variant = "solid", block = false, size = "md" }) {
  const [hover, setHover] = useState(false);
  const pad = size === "lg" ? "16px 26px" : size === "sm" ? "9px 14px" : "12px 18px";
  const fs = size === "lg" ? 17 : size === "sm" ? 13 : 15;
  const styles = {
    solid: {
      background: hover ? "#1faa53" : "#25b25c",
      color: "#fff",
      border: "1px solid transparent",
    },
    accent: {
      background: hover ? "var(--accent-hover, #e6c92e)" : "var(--accent, #efd64b)",
      color: "var(--navy, #211e57)",
      border: "1px solid transparent",
    },
    outline: {
      background: hover ? "rgba(33,30,87,0.06)" : "transparent",
      color: "var(--navy, #211e57)",
      border: "1.5px solid var(--navy, #211e57)",
    },
    ghostLight: {
      background: hover ? "rgba(255,255,255,0.12)" : "transparent",
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,0.4)",
    },
  }[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        padding: pad,
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 700,
        fontSize: fs,
        letterSpacing: "0.01em",
        textDecoration: "none",
        borderRadius: "var(--radius-btn, 4px)",
        cursor: "pointer",
        transition: "background .18s ease, transform .18s ease",
        transform: hover ? "translateY(-1px)" : "none",
        boxSizing: "border-box",
        ...styles,
      }}
    >
      <WhatsIcon size={fs + 2} />
      {children}
    </a>
  );
}
