import Image from "next/image";
import Head from "next/head";
import Borcan from "./components/parallax_borcan";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>ApiSudex</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
          <meta name="description" content="" />
        </Head>
      </div>
      <div>
        <div>Favoarea mierei - artă a naturii</div>
        <div>Mierea este un sărut al soarelui pentru pământ.</div>
        <div>
          <button>
            Produse <span></span>
          </button>
        </div>
      </div>
      <Borcan />
    </>
  );
}
