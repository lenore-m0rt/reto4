import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
  <Head>
  <script src="https://cdn.jsdelivr.net/npm/@nivo/bar@latest/umd/nivo-bar.min.js"></script>
  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
