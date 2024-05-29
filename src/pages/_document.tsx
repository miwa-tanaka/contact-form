import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Contact Form" />
        <link rel="icon" href="/contact-form/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/contact-form/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/contact-form/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/contact-form/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/contact-form/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/contact-form/favicons/safari-pinned-tab.svg"
          color="#D2CC40"
        />
        <meta name="msapplication-TileColor" content="#D2CC40" />
        <meta name="theme-color" content="#D2CC40"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
