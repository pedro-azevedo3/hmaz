'use client';

import { useEffect } from 'react';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle } from './tweaks/TweaksPanel';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import MaquinarioSection from './catalog/MaquinarioSection';
import RacoesSection from './catalog/RacoesSection';
import SobreSection from './sections/SobreSection';
import DepoimentosSection from './sections/DepoimentosSection';
import CTABand from './sections/CTABand';
import Footer from './sections/Footer';
import { shade } from '@/lib/utils';

const TWEAK_DEFAULTS = {
  cardStyle: "outline",
  cantos: "medio",
  bgTom: "#f3f1ec",
  accent: "#efd64b",
  heroGrade: true,
};

const CANTOS = {
  reto:  { card: "2px", btn: "2px" },
  medio: { card: "6px", btn: "4px" },
  suave: { card: "16px", btn: "10px" },
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    const c = CANTOS[t.cantos] || CANTOS.medio;
    r.style.setProperty("--radius-card", c.card);
    r.style.setProperty("--radius-btn", c.btn);
    r.style.setProperty("--bg", t.bgTom);
    r.style.setProperty("--accent", t.accent);
    r.style.setProperty("--accent-hover", shade(t.accent, -0.08));
    r.style.setProperty("--accent-ink", shade(t.accent, -0.55));
    r.style.setProperty("--navy", "#211e57");
  }, [t]);

  return (
    <div>
      <Navbar />
      <main>
        <Hero showGrid={t.heroGrade} />
        <MaquinarioSection cardStyle={t.cardStyle} />
        <RacoesSection cardStyle={t.cardStyle} />
        <SobreSection />
        <DepoimentosSection />
        <CTABand />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks · Estilo">
        <TweakSection label="Cards" />
        <TweakRadio
          label="Estilo dos cards"
          value={t.cardStyle}
          options={["outline", "filled", "elevated"]}
          onChange={(v) => setTweak("cardStyle", v)}
        />
        <TweakRadio
          label="Cantos"
          value={t.cantos}
          options={["reto", "medio", "suave"]}
          onChange={(v) => setTweak("cantos", v)}
        />
        <TweakSection label="Cor & fundo" />
        <TweakColor
          label="Tom de fundo"
          value={t.bgTom}
          options={["#f3f1ec", "#eef0f2", "#ffffff"]}
          onChange={(v) => setTweak("bgTom", v)}
        />
        <TweakColor
          label="Destaque"
          value={t.accent}
          options={["#efd64b", "#f2b705", "#e8c33d"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Topo" />
        <TweakToggle
          label="Textura de grade no hero"
          value={t.heroGrade}
          onChange={(v) => setTweak("heroGrade", v)}
        />
      </TweaksPanel>
    </div>
  );
}
