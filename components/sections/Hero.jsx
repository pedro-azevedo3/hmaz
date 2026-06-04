import Eyebrow from '../ui/Eyebrow';
import Placeholder from '../ui/Placeholder';
import WhatsButton from '../ui/WhatsButton';
import { waLinkGeneric, ESTATISTICAS } from '@/lib/data';

export default function Hero({ showGrid = true }) {
  return (
    <section
      id="topo"
      style={{
        position: "relative",
        background: "var(--navy, #211e57)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {showGrid && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(120% 90% at 70% 10%, #000 40%, transparent 100%)",
          }}
        />
      )}

      <div
        className="hmaz-container hmaz-hero"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
          paddingTop: "clamp(56px, 8vw, 96px)",
          paddingBottom: "clamp(56px, 8vw, 96px)",
        }}
      >
        {/* coluna de texto */}
        <div className="hmaz-hero-text">
          <Eyebrow color="var(--accent, #efd64b)">Maquinário & Nutrição Animal</Eyebrow>
          <h1
            style={{
              margin: "22px 0 0",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(28px, 7.5vw, 72px)",
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              textTransform: "uppercase",
            }}
          >
            Máquinas e rações que{" "}
            <span style={{ color: "var(--accent, #efd64b)" }}>movem o campo</span>
          </h1>
          <p
            style={{
              margin: "26px 0 0",
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 520,
            }}
          >
            Fabricamos e fornecemos maquinário robusto e rações de alta performance
            para aves, equinos e bovinos. Fale direto com nossa equipe e monte a
            solução ideal para o seu rebanho.
          </p>
          <div
            className="hmaz-hero-btns"
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}
          >
            <WhatsButton href={waLinkGeneric("o catálogo")} variant="accent" size="lg">
              Falar com vendas
            </WhatsButton>
            <a
              href="#maquinario"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "16px 26px",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#fff",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.4)",
                borderRadius: "var(--radius-btn, 4px)",
              }}
            >
              Ver catálogo ↓
            </a>
          </div>
        </div>

        {/* coluna de imagem */}
        <div className="hmaz-hero-img" style={{ position: "relative" }}>
          <Placeholder label="Imagem · linha de produção / maquinário" ratio="4 / 3.4" tone="dark" />
          <div
            className="hmaz-hero-badge"
            style={{
              position: "absolute",
              bottom: -18,
              left: -18,
              background: "var(--accent, #efd64b)",
              color: "var(--navy, #211e57)",
              padding: "14px 20px",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 14,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              boxShadow: "0 16px 40px -16px rgba(0,0,0,0.5)",
            }}
          >
            Fábrica própria
          </div>
        </div>
      </div>

      {/* faixa de estatísticas */}
      <div style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div
          className="hmaz-container hmaz-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            paddingTop: 28,
            paddingBottom: 28,
          }}
        >
          {ESTATISTICAS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "clamp(22px, 3vw, 38px)",
                  color: "var(--accent, #efd64b)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontFamily: "'Spline Sans Mono', monospace",
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
