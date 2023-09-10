import { Html, Head, Main, NextScript } from "next/document";
import Document from "next/document";
import Script from "next/script"; // Import the Script component

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ro">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
