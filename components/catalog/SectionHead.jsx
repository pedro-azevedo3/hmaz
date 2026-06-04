import Eyebrow from '../ui/Eyebrow';

export default function SectionHead({ eyebrow, titulo, descricao, id }) {
  return (
    <div id={id} style={{ maxWidth: 720, marginBottom: 38 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        style={{
          margin: "16px 0 0",
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(30px, 4.5vw, 46px)",
          lineHeight: 1.02,
          letterSpacing: "-0.01em",
          color: "var(--navy, #211e57)",
          textTransform: "uppercase",
        }}
      >
        {titulo}
      </h2>
      {descricao && (
        <p
          style={{
            margin: "16px 0 0",
            fontFamily: "'Barlow', sans-serif",
            fontSize: 18,
            lineHeight: 1.55,
            color: "#4a4858",
            maxWidth: 620,
          }}
        >
          {descricao}
        </p>
      )}
    </div>
  );
}
