/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import beeing from "./images/beeing.jpg";
import { useRouter } from "next/router";
import relation from "./images/handshake.png";
import high_quality from "./images/high-quality.png";
import innovation from "./images/innovation.png";
import quality from "./images/quality.png";
import Footer from "./components/Footer";

const about = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contacte");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-4xl font-recoleta">Despre Noi</p>
        <p className="text-center text-md font-varela mt-6 leading-5">
          Ca Furnizor de Soluții pentru Apicultură, suntem dedicați creării de
          soluții personalizate pentru <br /> creșterea și dezvoltarea
          afacerilor apicole prospere.
        </p>
        <div className="w-[80%] flex justify-center items-center mt-10">
          <div className="mb-4 h-[80%]  ">
            <Image src={beeing} alt="" className="rounded-xl" />
          </div>
          <div className="px-8">
            <div className="font-varela w-[70%]">
              <p className="mb-4">
                Experiența noastră solidă de 14 ani în apicultură ne motivează
                să vă prezentăm cu pasiune compania noastră, ApiSudex,
                specializată în producția de stupi. Ne concentrăm pe asigurarea
                calității materiilor prime și acordăm o atenție riguroasă
                fiecărui pas al procesului de prelucrare, reprezentând astfel
                fundamentul activității noastre. Pe parcursul acestor ani, am
                construit o echipă de profesioniști dedicați, care acordă o
                importanță deosebită atât calității materiilor prime, cât și
                procesului meticulos de prelucrare.
              </p>{" "}
              <p>
                {" "}
                Fiecare client reprezintă o prioritate pentru noi. Ne străduim
                să răspundem cu precizie cerințelor individuale,
                transformându-le în soluții personalizate. Principiul
                fundamental care ne ghidează eforturile este "FIECARE STUP ESTE
                SPECIAL, PENTRU CĂ FIECARE ALBINĂ ESTE SPECIALĂ", subliniind
                astfel importanța unică a fiecărui element din acest ecosistem.
              </p>
            </div>
            <button
              onClick={handleContactClick}
              className="font-varela hover:bg-gradient-to-br hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-500 text-black border-2 border-orange-500 rounded-lg transition duration-300 hover:shadow-md hover:text-white mt-6"
            >
              <p className="px-5 py-3">Contactați-ne</p>
            </button>
          </div>
        </div>
        <p className="text-center text-4xl font-recoleta mt-14">
          De ce să ne alegeți
        </p>
        <div className="flex flex-wrap justify-center font-varela mt-10">
          <div className="bg-[#F9E9B8] w-[34%] h-[full] m-2 rounded-xl p-4">
            <div className="w-[3%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={quality} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              Experiență și Cunoștințe Profunde în Apicultură
            </div>
            <div className="mt-4 text-[#475569]">
              Avem o echipă de experți cu o vastă experiență în apicultură.
              Suntem capabili să oferim sfaturi personalizate și soluții
              adaptate pentru a vă ajuta să atingeți succesul în apicultură.
            </div>
          </div>
          <div className="bg-[#F9E9B8] w-[34%] h-[full] m-2 rounded-xl p-4">
            <div className="w-[3%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={high_quality} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              Produse de Calitate Superioară
            </div>
            <div className="mt-4 text-[#475569]">
              Suntem mândri să oferim produse de cea mai înaltă calitate. Fie că
              este vorba de stupi, echipamente de colectare a mierii sau alte
              accesorii, toate articolele noastre sunt fabricate cu atenție la
              detalii și din materiale durabile.{" "}
            </div>
          </div>
          <div className="bg-[#F9E9B8] w-[34%] h-[full] mx-2 mt-10 rounded-xl p-4">
            <div className="w-[3%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={innovation} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              Varietatea și Inovarea Produselor
            </div>
            <div className="mt-4 text-[#475569]">
              Înțelegem că apicultura poate varia în funcție de regiune și de
              nevoile individuale ale apicultorilor. De aceea, oferim o gamă
              largă de produse, de la stupi convenționali la tehnologii
              inovatoare pentru monitorizarea stupilor și colectarea mierii.
            </div>
          </div>
          <div className="bg-[#F9E9B8] w-[34%] h-[full] mx-2 mt-10 rounded-xl p-4">
            <div className="w-[3%] absolute -mt-12 bg-yellow-400 p-3 rounded-xl ml-2">
              <Image src={relation} alt="" />
            </div>
            <div className="mt-4 text-lg font-semibold">
              Relație de Încredere cu Clientul
            </div>
            <div className="mt-4 text-[#475569]">
              Ne străduim să construim relații solide și de încredere cu
              clienții noștri. Asigurăm comunicare transparentă, răspuns rapid
              la întrebări și ne preocupăm de satisfacția dumneavoastră în
              fiecare etapă a colaborării noastre.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
