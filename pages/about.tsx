/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import beeing from "./images/beeing.jpg";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contacte");
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-4xl font-recoleta">Despre Noi</p>
      <p className="text-center text-md font-varela mt-6 leading-5">
        Ca Furnizor de Soluții pentru Apicultură, suntem dedicați creării de
        soluții personalizate pentru <br /> creșterea și dezvoltarea afacerilor
        apicole prospere.
      </p>
      <div className="w-[80%] flex justify-center items-center mt-10">
        <div className="mb-4 h-[80%]  ">
          <Image src={beeing} alt="" className="rounded-xl" />
        </div>
        <div className="px-8">
          <div className="font-varela w-[70%]">
            <p className="mb-4">
              Experiența noastră solidă de 14 ani în apicultură ne motivează să
              vă prezentăm cu pasiune compania noastră, ApiSudex, specializată
              în producția de stupi. Ne concentrăm pe asigurarea calității
              materiilor prime și acordăm o atenție riguroasă fiecărui pas al
              procesului de prelucrare, reprezentând astfel fundamentul
              activității noastre. Pe parcursul acestor ani, am construit o
              echipă de profesioniști dedicați, care acordă o importanță
              deosebită atât calității materiilor prime, cât și procesului
              meticulos de prelucrare.
            </p>{" "}
            <p>
              {" "}
              Fiecare client reprezintă o prioritate pentru noi. Ne străduim să
              răspundem cu precizie cerințelor individuale, transformându-le în
              soluții personalizate. Principiul fundamental care ne ghidează
              eforturile este "FIECARE STUP ESTE SPECIAL, PENTRU CĂ FIECARE
              ALBINĂ ESTE SPECIALĂ", subliniind astfel importanța unică a
              fiecărui element din acest ecosistem.
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
    </div>
  );
};

export default about;
