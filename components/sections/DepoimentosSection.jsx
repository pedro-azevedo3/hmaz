import { DEPOIMENTOS } from '@/lib/data';
import SectionHead from '../catalog/SectionHead';

export default function DepoimentosSection() {
  return (
    <section style={{ background: "#fff", padding: "clamp(64px, 9vw, 110px) 0", borderTop: "1px solid #e1ded3" }}>
      <div className="hmaz-container">
        <SectionHead
          eyebrow="Depoimentos"
          titulo="Quem produz com a HMAZ"
          descricao="Produtores que já fabricam ração própria e nutrem seus rebanhos com nossas linhas."
        />
        <div
          className="hmaz-depo-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}
        >
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              style={{
                margin: 0,
                background: "var(--bg, #f3f1ec)",
                border: "1px solid #e1ded3",
                borderRadius: "var(--radius-card, 6px)",
                padding: "28px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 34, lineHeight: 0.6, color: "var(--accent, #efd64b)" }}>
                &ldquo;
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 16.5,
                  lineHeight: 1.55,
                  color: "#33313f",
                  flex: 1,
                }}
              >
                {d.texto}
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #ddd9cd", paddingTop: 16 }}>
                <span
                  style={{
                    width: 42,
                    height: 42,
                    flex: "0 0 auto",
                    background: "var(--navy, #211e57)",
                    color: "var(--accent, #efd64b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 16,
                  }}
                >
                  {d.nome[0]}
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: 15, color: "var(--navy, #211e57)" }}>
                    {d.nome}
                  </span>
                  <span style={{ display: "block", fontFamily: "'Spline Sans Mono', monospace", fontSize: 11.5, color: "#6b6960" }}>
                    {d.papel}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
