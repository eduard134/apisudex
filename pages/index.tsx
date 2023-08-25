import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import drop from "./images/drop.png";
import translateData from "./translate.json";
import Footer from "./components/Footer";
import  useLanguage  from "../public/LanguageContext";
import {
  getTranslatedContent,
  getTranslatedArray,
} from "./components/TranslateRoToRu";

interface Product {
  id: number;
  categoryId: number;
  image?: string;
  translations: {
    ro: {
      name: string;
      pret1: string;
      descriere: string;
      reducere?: string;
      opt1?: string;
      opt2?: string;
      opt3?: string;
      pret2?: string;
      pret3?: string;
    };
    ru: {
      name: string;
      pret1: string;
      descriere: string;
      reducere?: string;
      opt1?: string;
      opt2?: string;
      opt3?: string;
      pret2?: string;
      pret3?: string;
    };
  };
}

export default function Home() {
  const router = useRouter();
  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  const array = getTranslatedArray(language);

  const handleClick = () => {
    router.push("/shop");
  };

  return (
    <>
      <div className="flex flex-col mt-12 px-2 sm:mt-20 items-center text-center">
        <div className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 font-volkron bg-cover bg-clip-text text-transparent bg-gradient-to-r from-dark_purple via-indigo to-dark_purple ">
          {content.Title1}
          <br className="hidden md:block" />
          {content.Title2}
        </div>
        <div className="text-[#413f4a] text-lg md:text-base font-semibold mb-6 font-nunito ">
          {content.Description1}
          <br className="hidden md:block" />
          {content.Description2}
        </div>
        <button
          className="text-white font-semibold invisible sm:visible text-xs md:text-sm flex items-center w-fit bg-[#1c1e2b] px-5 md:px-4 py-2 md:py-2 rounded-[50px] relative font-nunito leading-tight"
          onClick={handleClick}
        >
          {content.btn_prod}
          <Image src={drop} alt="" className="ml-2 w-4 md:w-5" />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row mt-5 sm:mt-20 bg-dark_purple p-4 sm:p-5 items-center">
        <p className="text-center text-3xl md:text-4xl lg:text-6xl font-bold sm:leading-loose mb-5 sm:mb-0 mt-5 md:mt-0 bg-cover bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 font-volkron">
          {content.Prod_pop1}
          <br className="hidden md:block" />
          {content.Prod_pop2}
          <br className="hidden md:block" />
          {content.Prod_pop3}
        </p>

        {array.slice(0, 4).map((product: any) => (
          <Link
            href={`/product?id=${product.id}`}
            key={product.id}
            className="mb-6 md:mb-0 md:ml-8 flex flex-col items-center rounded-md p-2 md:p-5 w-[60%] md:w-[20%] h-[250px] md:h-[290px] bg-slate-100 hover:scale-105 transition-transform duration-800 ease-in hover:bg-opacity-90"
          >
            <div className="h-[60%] w-full mb-2 md:mb-4 flex justify-center items-center">
              <Image
                src={product.image || "/default-image.jpg"}
                alt={product.name}
                width={150}
                height={150}
              />
            </div>
            <div className="font-bold text-base md:text-lg text-slate-600 mb-2 md:mb-3 font-nunito">
              {product.translations.reducere ? (
                <div className="flex flex-col items-center">
                  <p className="line-through text-gray-400 text-sm md:text-base">
                    {product.translations.pret1}
                  </p>
                  <p className="text-sm md:text-base">
                    {product.translations.reducere}
                  </p>
                </div>
              ) : (
                <p className="text-sm md:text-base">
                  {product.translations.pret1}
                </p>
              )}
            </div>
            <div className="font-semibold text-slate-600 text-sm md:text-base font-nunito">
              <p className="leading-5 text-center">
                {product.translations.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
