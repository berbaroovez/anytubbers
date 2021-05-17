import GlobalStyles from "../util/GlobalStyles";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <DefaultSeo
        title="Any Tubbers"
        defaultTitle="Any Tubbers"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://anytubbers.com/",
          site_name: "Any Tubbers",
          images: [
            {
              url: "https://anytubbers.com/og.png",
              alt: "Any Tubbers",
              width: 1280,
              height: 720,
            },
          ],
        }}
        twitter={{
          handle: "@Berbaroovez",
          site: "@Berbaroovez",
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
