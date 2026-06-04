import Eyebrow from '../ui/Eyebrow';
import Placeholder from '../ui/Placeholder';

export default function SobreSection() {
  const pontos = [
    { t: "Fábrica própria",    d: "Maquinário projetado e testado para a realidade do produtor brasileiro." },
    { t: "Nutrição balanceada", d: "Rações formuladas por especialistas para cada espécie e fase." },
    { t: "Suporte técnico",    d: "Acompanhamento na instalação, operação e manutenção dos equipamentos." },
  ];
  return (
    <section
      id="sobre"
      style={{ background: "var(--bg, #f3f1ec)", padding: "clamp(64px, 9vw, 110px) 0" }}
    >
      <div
        className="hmaz-container hmaz-sobre"
        style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}
      >
        <div style={{ position: "relative" }}>
          <Placeholder label="Imagem · equipe / unidade fabril" ratio="4 / 4.4" />
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -16,
              background: "var(--navy, #211e57)",
              color: "#fff",
              padding: "16px 20px",
              maxWidth: 180,
            }}
          >
            <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 30, color: "var(--accent, #efd64b)" }}>
              HMAZ
            </div>
            <div style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 11, marginTop: 4, color: "rgba(255,255,255,0.75)" }}>
              Grupo · Paraíba
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>Sobre o Grupo HMAZ</Eyebrow>
          <h2
            style={{
              margin: "16px 0 0",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.04,
              textTransform: "uppercase",
              color: "var(--navy, #211e57)",
            }}
          >
            Do grão à ração,<br />a solução completa
          </h2>
          <p
            style={{
              margin: "20px 0 0",
              fontFamily: "'Barlow', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#4a4858",
            }}
          >
            O Grupo HMAZ une maquinário industrial e nutrição animal em um só lugar.
            Ajudamos produtores a fabricar a própria ração com economia e qualidade —
            e fornecemos linhas prontas para aves, equinos e bovinos. Tudo com
            atendimento direto e suporte de quem entende do campo.
          </p>
          <div style={{ display: "grid", gap: 16, marginTop: 30 }}>
            {pontos.map((p) => (
              <div key={p.t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "0 0 auto",
                    width: 12,
                    height: 12,
                    marginTop: 6,
                    background: "var(--accent, #efd64b)",
                    border: "2px solid var(--navy, #211e57)",
                  }}
                ></span>
                <div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 800, fontSize: 17, color: "var(--navy, #211e57)" }}>
                    {p.t}
                  </div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15.5, color: "#5d5b6a", lineHeight: 1.5 }}>
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
