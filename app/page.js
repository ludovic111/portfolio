import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ludovicmarie.vercel.app";
const indexFilePath = path.join(process.cwd(), "content", "index.html");

function getBodyMarkup() {
  const html = fs.readFileSync(indexFilePath, "utf8");
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

  if (!match) {
    throw new Error("Could not locate <body> in index.html");
  }

  return match[1].replace(/\s*<script\s+src="js\/script\.js"><\/script>\s*/i, "\n");
}

const bodyMarkup = getBodyMarkup();

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ludovic",
      url: `${siteUrl}/`,
      image: `${siteUrl}/assets/images/headshot.webp`,
      description: "DJ, artiste rap et Chief AI Officer base a Geneve",
      jobTitle: ["DJ", "Artiste", "Chief AI Officer"],
      worksFor: {
        "@type": "Organization",
        name: "Goeko",
        url: "https://goeko.ch"
      },
      sameAs: [
        "https://www.instagram.com/lu4ovic",
        "https://x.com/lu4ovic",
        "https://www.tiktok.com/@lu4ovic",
        "https://open.spotify.com/artist/2G6ALmQ9WNsaqP0QsJFTJ8",
        "https://music.apple.com/ch/artist/ludovic/1854313232"
      ]
    },
    {
      "@type": "MusicGroup",
      "@id": `${siteUrl}/#artist`,
      name: "Ludovic",
      genre: ["Rap", "Hip-Hop"],
      url: `${siteUrl}/`,
      image: `${siteUrl}/assets/images/headshot.webp`,
      sameAs: [
        "https://open.spotify.com/artist/2G6ALmQ9WNsaqP0QsJFTJ8",
        "https://music.apple.com/ch/artist/ludovic/1854313232"
      ]
    },
    {
      "@type": "WebSite",
      name: "Ludovic Portfolio",
      url: `${siteUrl}/`,
      author: { "@id": `${siteUrl}/#person` }
    }
  ]
};

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyMarkup }} />
      <Script id="ludovic-schema" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <Script src="/js/script.js" strategy="beforeInteractive" />
    </>
  );
}
