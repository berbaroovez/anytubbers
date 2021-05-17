import GlobalStyles from "../util/GlobalStyles";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}
