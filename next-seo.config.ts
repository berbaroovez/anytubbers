const title = "Any Tubbers";
const description = "A tournament series for the community of Stanz";

const SEO = {
  title,
  description,
  canonical: "https://www.anytubbers.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.anytubbers.com",
    title,
    description,
    images: [
      {
        url: "https://www.anytubbers.com/static/og.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@berbaroovez",
    site: "@berbaroovez",
    cardType: "summary_large_image",
  },
};

export default SEO;
