import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ludovicmarie.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ludovic — DJ · Artiste · Chief AI Officer",
  description:
    "Portfolio de Ludovic — DJ et Chief AI Officer base a Geneve. Decouvrez mes projets tech, streaming et creatifs.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ludovic — DJ · Artiste · Chief AI Officer",
    description: "DJ et Chief AI Officer base a Geneve. Tech, streaming et projets creatifs.",
    url: "/",
    type: "website",
    locale: "fr_CH",
    images: ["/assets/images/headshot.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludovic — DJ · Artiste · Chief AI Officer",
    description: "DJ et Chief AI Officer base a Geneve.",
    images: ["/assets/images/headshot.webp"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#f3f4f7" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        {children}
        <script src="/js/script.js" defer></script>
      </body>
    </html>
  );
}
