import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { RecoilRoot } from "recoil";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import "../../i18n";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <RecoilRoot>
      <div className={poppins.className}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
