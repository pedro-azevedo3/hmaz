import './globals.css';

export const metadata = {
  title: 'Grupo HMAZ · Maquinário & Rações',
  description: 'Fabricamos e fornecemos maquinário robusto e rações de alta performance para aves, equinos e bovinos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
