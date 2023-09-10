import React from "react";
import Slider from "./components/Slider";
import Categorii from "./components/categorii";
import Footer from "./components/Footer";
import Head from "next/head";

const shop = () => {
  return (
    <>
      <Head>
        <title>Shop - ApiSudex</title>
        <meta
          name="description"
          content="Descoperă lumea fermecată a apiculturii la ApiSudex - magazinul online cu pasiune pentru albine! În magazinul nostru, vei găsi o gamă variată de produse de înaltă calitate, de la echipamente apicole de ultimă generație și materiale pentru stupi, la miere pură și produse apicole naturale. Fie că ești un apicultor experimentat sau un entuziast al naturii care dorește să înceapă propria aventură apicolă, ApiSudex are tot ce ai nevoie pentru a prospera în apicultură. Cumpără acum și explorează un univers bogat în gusturi, arome și beneficii pentru sănătate, oferite de albinele noastre harnice. Alătură-te comunității noastre de apicultori și împreună vom sprijini și proteja aceste insecte minunate, esențiale pentru mediul nostru. ApiSudex - partenerul tău de încredere în lumea apiculturii!"
        />
      </Head>
      <Slider />
      <Categorii />
      <Footer />
    </>
  );
};

export default shop;
