import { MAQUINARIO } from '@/lib/data';
import SectionHead from './SectionHead';
import CardGrid from './CardGrid';
import ProductCard from './ProductCard';

export default function MaquinarioSection({ cardStyle }) {
  return (
    <section
      style={{
        background: "var(--bg, #f3f1ec)",
        padding: "clamp(64px, 9vw, 110px) 0",
        borderTop: "1px solid #e1ded3",
      }}
    >
      <div className="hmaz-container">
        <SectionHead
          id="maquinario"
          eyebrow="Catálogo · 01"
          titulo="Maquinário"
          descricao="Linha completa de equipamentos para fabricar sua própria ração — da moagem do grão ao envase. Máquinas robustas, prontas para alta produção."
        />
        <CardGrid>
          {MAQUINARIO.map((m) => (
            <ProductCard key={m.cod} produto={m} cardStyle={cardStyle} />
          ))}
        </CardGrid>
      </div>
    </section>
  );
}
