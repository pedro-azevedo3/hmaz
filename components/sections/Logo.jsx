import Image from 'next/image';

export default function Logo({ light = false }) {
  return (
    <a
      href="#topo"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      <Image
        src="/logo.png"
        alt="Grupo HMAZ"
        width={52}
        height={52}
        style={{
          objectFit: "contain",
          filter: light ? "brightness(0) invert(1)" : "none",
        }}
        priority
      />
    </a>
  );
}
