import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Next Quran</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Scheherazade+New:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-white text-black dark:bg-black dark:text-white font-['Quicksand',_sans-serif]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SpecialDocument;
