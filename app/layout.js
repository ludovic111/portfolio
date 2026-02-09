import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ludovicmarie.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ludovic — DJ · Artiste · Chief AI Officer",
  description:
    "Portfolio de Ludovic — DJ, artiste rap et Chief AI Officer base a Geneve. Decouvrez mes projets musicaux, tech et streaming.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Ludovic — DJ · Artiste · Chief AI Officer",
    description: "DJ, artiste rap et Chief AI Officer base a Geneve. Musique, tech et streaming.",
    url: "/",
    type: "website",
    locale: "fr_CH",
    images: ["/assets/images/headshot.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludovic — DJ · Artiste · Chief AI Officer",
    description: "DJ, artiste rap et Chief AI Officer base a Geneve.",
    images: ["/assets/images/headshot.webp"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
