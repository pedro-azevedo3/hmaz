'use client';

import { useState } from 'react';
import Image from 'next/image';
import Placeholder from '../ui/Placeholder';
import WhatsButton from '../ui/WhatsButton';
import { waLink } from '@/lib/data';

function cardSurface(cardStyle, hover) {
  const style = cardStyle || "outline";
  const radius = "var(--radius-card, 6px)";
  if (style === "filled") {
    return {
      background: "#fff",
      border: "1px solid #e4e2d8",
      borderRadius: radius,
      boxShadow: hover ? "0 14px 30px -18px rgba(33,30,87,0.4)" : "none",
    };
  }
  if (style === "elevated") {
    return {
      background: "#fff",
      border: "1px solid transparent",
      borderRadius: radius,
      boxShadow: hover
        ? "0 22px 44px -22px rgba(33,30,87,0.45)"
        : "0 10px 26px -20px rgba(33,30,87,0.35)",
    };
  }
  return {
    background: "#fff",
    border: hover ? "1.5px solid var(--navy, #211e57)" : "1.5px solid #d9d6cb",
    borderRadius: radius,
    boxShadow: "none",
  };
}

export default function ProductCard({ produto, cardStyle, accentTag }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "border-color .2s ease, box-shadow .2s ease, transform .2s ease",
        transform: hover ? "translateY(-3px)" : "none",
        ...cardSurface(cardStyle, hover),
      }}
    >
      <div style={{ position: "relative", aspectRatio: "4 / 3", width: "100%" }}>
        {produto.image ? (
          <Image
            src={produto.image}
            alt={produto.nome}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <Placeholder label={`Foto · ${produto.cod}`} ratio="4 / 3" />
        )}
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            fontFamily: "'Spline Sans Mono', monospace",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "4px 8px",
            background: accentTag ? "var(--accent, #efd64b)" : "var(--navy, #211e57)",
            color: accentTag ? "var(--navy, #211e57)" : "#fff",
            fontWeight: 700,
          }}
        >
          {produto.tag || produto.cod}
        </span>
      </div>
      <div style={{ padding: "18px 18px 20px", display: "flex", flexDirection: "column", flex: 1, gap: 6 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 800,
            fontSize: 19,
            lineHeight: 1.15,
            color: "var(--navy, #211e57)",
            textWrap: "balance",
          }}
        >
          {produto.nome}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "'Spline Sans Mono', monospace",
            fontSize: 12.5,
            lineHeight: 1.5,
            color: "#5d5b50",
          }}
        >
          {produto.spec}
        </p>
        <div style={{ marginTop: "auto", paddingTop: 16 }}>
          <WhatsButton href={waLink(produto.nome)} block size="sm">
            Falar com vendas
          </WhatsButton>
        </div>
      </div>
    </article>
  );
}
