import Logo from './Logo';
import WhatsButton from '../ui/WhatsButton';
import { waLinkGeneric } from '@/lib/data';

function FootTitle({ children }) {
  return (
    <h4 style={{ margin: "0 0 16px", fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent, #efd64b)" }}>
      {children}
    </h4>
  );
}

function FootLink({ href, children }) {
  return (
    <a href={href} style={{ display: "block", padding: "6px 0", fontFamily: "'Barlow', sans-serif", fontSize: 15.5, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>
      {children}
    </a>
  );
}

function FootText({ children, muted }) {
  return (
    <p style={{ margin: "6px 0", fontFamily: "'Barlow', sans-serif", fontSize: muted ? 13 : 15.5, color: muted ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.78)", fontStyle: muted ? "italic" : "normal" }}>
      {children}
    </p>
  );
}

export default function Footer() {
  return (
    <footer id="contato" style={{ background: "var(--navy, #211e57)", color: "#fff", padding: "clamp(56px, 8vw, 88px) 0 40px" }}>
      <div
        className="hmaz-container hmaz-foot"
        style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }}
      >
        <div>
          <Logo light />
          <p style={{ margin: "18px 0 0", fontFamily: "'Barlow', sans-serif", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", maxWidth: 320 }}>
            Maquinário e rações para alimentar o seu negócio. Soluções completas para aves, equinos e bovinos.
          </p>
          <div style={{ marginTop: 24 }}>
            <WhatsButton href={waLinkGeneric("")} variant="accent" size="sm">
              Falar com vendas
            </WhatsButton>
          </div>
        </div>
        <div>
          <FootTitle>Catálogo</FootTitle>
          <FootLink href="#maquinario">Maquinário</FootLink>
          <FootLink href="#racoes">Rações</FootLink>
          <FootLink href="#sobre">Sobre a empresa</FootLink>
        </div>
        <div>
          <FootTitle>Contato</FootTitle>
          <FootText>WhatsApp · (83) 99921-9127</FootText>
          <FootText>contato@grupohmaz.com.br</FootText>
          <FootText>Paraíba · Brasil</FootText>
          <FootText muted>Endereço e e-mail são exemplos — me envie os reais.</FootText>
        </div>
      </div>
      <div
        className="hmaz-container"
        style={{ marginTop: 48, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}
      >
        <span style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          © {new Date().getFullYear()} Grupo HMAZ · Todos os direitos reservados
        </span>
        <span style={{ fontFamily: "'Spline Sans Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          Maquinário & Nutrição Animal
        </span>
      </div>
    </footer>
  );
}
