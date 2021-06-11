import GlobalStyles from "../util/GlobalStyles";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

import { AuthProvider } from "./../util/AuthProvider";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyles />

      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </AuthProvider>
  );
}
