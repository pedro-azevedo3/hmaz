import WhatsButton from '../ui/WhatsButton';
import { waLinkGeneric } from '@/lib/data';

export default function CTABand() {
  return (
    <section style={{ background: "var(--accent, #efd64b)", padding: "clamp(48px, 7vw, 80px) 0" }}>
      <div
        className="hmaz-container hmaz-cta"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(26px, 3.6vw, 42px)",
              lineHeight: 1.02,
              textTransform: "uppercase",
              color: "var(--navy, #211e57)",
            }}
          >
            Pronto para produzir mais?
          </h2>
          <p style={{ margin: "12px 0 0", fontFamily: "'Barlow', sans-serif", fontSize: 18, color: "#3a3550", maxWidth: 540 }}>
            Nossa equipe ajuda você a escolher o maquinário e a ração certos. Atendimento direto pelo WhatsApp.
          </p>
        </div>
        <WhatsButton href={waLinkGeneric("maquinário e rações")} variant="solid" size="lg">
          Chamar no WhatsApp
        </WhatsButton>
      </div>
    </section>
  );
}
