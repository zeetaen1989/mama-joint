import NextDocument, { Html, Head, Main, NextScript } from "next/document";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Mama Joint, Restaurant, Delivery, Chinese, Italian, Indian"
          />
          <meta name="description" content="A Restaurant landing page" />
          <meta name="author" content="Jitendra Gurung, Jiten Gurung" />
          <meta name="copyright" content="Jiten Gurung" />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
          ></link>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}