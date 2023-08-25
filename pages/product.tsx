  /* eslint-disable react-hooks/exhaustive-deps */
  import { useRouter } from "next/router";
  import Image from "next/image";
  import productsData from "./products.json";
  import Footer from "./components/Footer";
  import { useState, useMemo } from "react";
  import useLanguage from "../public/LanguageContext";
  import { getTranslatedContent } from "./components/TranslateRoToRu";

interface Product {
  id: number;
  categoryId: number;
  image?: string;
  translations: ProductCategory;
}

interface ProductCategory {
  ro: Caracteristics;
  ru: Caracteristics;
}

interface Caracteristics {
  name: string;
  pret1: string;
  descriere: string;
  reducere?: string;
  opt1?: string;
  opt2?: string;
  opt3?: string;
  pret2?: string;
  pret3?: string;
}

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;
  const { language } = useLanguage();
  const content = getTranslatedContent(language);

  const translatedProduct = useMemo(() => {
    const translatedArray = productsData.map((product) => ({
      ...product,
      translations:
        language === "ro" ? product.translations.ro : product.translations.ru,
    }));
    return translatedArray.find((p) => p.id === parseInt(productId as string));
  }, [productId, language]);

  // Declare selectedOption and setSelectedOption using the useState hook
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    translatedProduct?.translations.opt1 ||
      translatedProduct?.translations.opt2 ||
      translatedProduct?.translations.opt3
  );

  const selectedPrice = (() => {
    if (selectedOption === translatedProduct?.translations.opt1) {
      return (
        translatedProduct?.translations.reducere ||
        translatedProduct?.translations.pret1
      );
    }
    if (selectedOption === translatedProduct?.translations.opt2) {
      return translatedProduct?.translations.pret2;
    }
    if (selectedOption === translatedProduct?.translations.opt3) {
      return translatedProduct?.translations.pret3;
    }
    return translatedProduct?.translations.pret1;
  })();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {translatedProduct ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center items-center mt-0 sm:mt-20 mb-20 relative">
            <div className="w-96 h-80 lg:mr-10 relative overflow-hidden mb-6 mr-0">
              <Image
                src={translatedProduct.image || "/default-image.jpg"}
                alt={translatedProduct.translations.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-4 sm:p-6 rounded-xl shadow-lg h-full lg:w-[50%] w-[90%]">
              <h1 className="text-3xl font-extrabold text-white mb-4 font-nunito text-center sm:text-start">
                {translatedProduct.translations.name}
              </h1>
              <div className="flex justify-center gap-3 flex-wrap sm:flex-nowrap font-nunito font-semibold">
                {translatedProduct.translations.opt1 && (
                  <button
                    onClick={() => {
                      const option = translatedProduct.translations?.opt1;
                      if (option !== undefined) {
                        handleOptionChange(option);
                      }
                    }}
                    className={`anim w-full py-1 ${
                      selectedOption === translatedProduct.translations.opt1
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.opt1}
                  </button>
                )}
                {translatedProduct.translations.opt2 && (
                  <button
                    onClick={() => {
                      const option = translatedProduct.translations?.opt2;
                      if (option !== undefined) {
                        handleOptionChange(option);
                      }
                    }}
                    className={`anim w-full py-1 ${
                      selectedOption === translatedProduct.translations.opt2
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.opt2}
                  </button>
                )}
                {translatedProduct.translations.opt3 && (
                  <button
                    onClick={() => {
                      const option = translatedProduct.translations?.opt3;
                      if (option !== undefined) {
                        handleOptionChange(option);
                      }
                    }}
                    className={`anim w-full py-1 ${
                      selectedOption === translatedProduct.translations.opt3
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.opt3}
                  </button>
                )}
              </div>
              <div className="bg-yellow-50 mt-6 shadow-md p-6 rounded-lg text-gray-800">
                <p className="text-lg font-semibold text-yellow-500 mb-2 font-nunito">
                  {content.Descriere}
                </p>
                <p className="text-md font-nunito mb-6 font-semibold text-[#595459]">
                  {translatedProduct.translations.descriere}
                </p>
                <div className="flex items-center justify-end mb-1">
                  {translatedProduct.translations?.reducere && (
                    <p className="text-base line-through text-gray-400">
                      {translatedProduct.translations.pret1}
                    </p>
                  )}
                </div>
                <p className="flex justify-between text-lg font-semibold text-yellow-500 mb-2 font-nunito">
                  {content.Total}
                  <span className="text-2xl font-nunito">{selectedPrice}</span>
                </p>
                <p className="text-md flex justify-between text-yellow-500 font-nunito font-semibold">
                  {content.Comanda}
                  <span className="font-bold text-md font-nunito">
                    076 723 462
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-20 mb-20 text-gray-600">
          <p className="text-4xl font-semibold mb-4">{content.NoN}</p>
          <p>{content.NonP}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
