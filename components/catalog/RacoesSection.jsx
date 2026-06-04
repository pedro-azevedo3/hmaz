'use client';

import { useState } from 'react';
import { RACOES } from '@/lib/data';
import SectionHead from './SectionHead';
import CardGrid from './CardGrid';
import ProductCard from './ProductCard';

export default function RacoesSection({ cardStyle }) {
  const chaves = Object.keys(RACOES);
  const [ativa, setAtiva] = useState(chaves[0]);
  const atual = RACOES[ativa];
  return (
    <section
      style={{
        background: "#fff",
        padding: "clamp(64px, 9vw, 110px) 0",
        borderTop: "1px solid #e1ded3",
      }}
    >
      <div className="hmaz-container">
        <SectionHead
          id="racoes"
          eyebrow="Catálogo · 02"
          titulo="Rações por tipo de animal"
          descricao="Formulações balanceadas para cada fase e espécie. Escolha o animal e veja as opções disponíveis."
        />

        <div
          role="tablist"
          style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}
        >
          {chaves.map((k) => {
            const on = k === ativa;
            return (
              <button
                key={k}
                role="tab"
                aria-selected={on}
                onClick={() => setAtiva(k)}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  padding: "11px 22px",
                  cursor: "pointer",
                  borderRadius: "var(--radius-btn, 4px)",
                  border: on ? "1.5px solid var(--navy, #211e57)" : "1.5px solid #d9d6cb",
                  background: on ? "var(--navy, #211e57)" : "#fff",
                  color: on ? "#fff" : "#4a4858",
                  transition: "all .18s ease",
                }}
              >
                {RACOES[k].label}
              </button>
            );
          })}
        </div>

        <p
          style={{
            margin: "0 0 30px",
            fontFamily: "'Spline Sans Mono', monospace",
            fontSize: 13,
            color: "#6b6960",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ width: 24, height: 2, background: "var(--accent, #efd64b)" }}></span>
          {atual.desc}
        </p>

        <CardGrid>
          {atual.itens.map((r) => (
            <ProductCard key={r.cod} produto={{ ...r, tag: atual.label }} cardStyle={cardStyle} accentTag />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
