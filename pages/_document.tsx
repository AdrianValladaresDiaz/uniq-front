import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(props: any) {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Unique things." />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
