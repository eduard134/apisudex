import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";
import Head from "next/head";
import { LanguageProvider } from "../public/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageProvider>
        <Head>
          <title>ApiSudex</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
          <meta name="description" content="" />
        </Head>

        <NavBar />
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
