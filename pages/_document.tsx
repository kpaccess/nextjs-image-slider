import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures Toronto to US car drive."
          />
          <meta property="og:site_name" content="Toronto to US car drive" />
          <meta
            property="og:description"
            content="See pictures Toronto to US car drive."
          />
          <meta
            property="og:title"
            content="Toronto to US car drive Pictures"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Toronto to US car drive Pictures"
          />
          <meta name="twitter:description" content="Toronto to US car drive." />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
