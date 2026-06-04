'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import WhatsButton from '../ui/WhatsButton';
import { waLinkGeneric } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#maquinario", label: "Maquinário" },
    { href: "#racoes", label: "Rações" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.94)" : "#fff",
        borderBottom: "1px solid #e4e1d6",
        backdropFilter: scrolled ? "saturate(180%) blur(8px)" : "none",
        transition: "background .2s ease",
      }}
    >
      <div
        className="hmaz-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}
      >
        <Logo />
        <nav className="hmaz-navlinks" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "0.02em",
                color: "#3a3849",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hmaz-navcta">
          <WhatsButton href={waLinkGeneric("")} variant="accent" size="sm">
            Falar com vendas
          </WhatsButton>
        </div>
        <button
          className="hmaz-burger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "none",
            background: "none",
            border: "1.5px solid #d9d6cb",
            borderRadius: 4,
            width: 42,
            height: 42,
            cursor: "pointer",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span style={{ width: 18, height: 2, background: "#211e57" }}></span>
          <span style={{ width: 18, height: 2, background: "#211e57" }}></span>
          <span style={{ width: 18, height: 2, background: "#211e57" }}></span>
        </button>
      </div>
      {open && (
        <div className="hmaz-mobilemenu" style={{ borderTop: "1px solid #e4e1d6", padding: "12px 0 18px" }}>
          <div className="hmaz-container" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#3a3849",
                  textDecoration: "none",
                  padding: "10px 0",
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: 8 }}>
              <WhatsButton href={waLinkGeneric("")} variant="accent" block>
                Falar com vendas
              </WhatsButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
