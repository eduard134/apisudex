  /* eslint-disable react-hooks/exhaustive-deps */
  import { useRouter } from "next/router";
  import Image from "next/image";
  import productsData from "./products.json";
  import Footer from "./components/Footer";
  import { useState, useEffect } from "react";
  import { useLanguage } from "./components/LanguageContext";
  import { getTranslatedArray } from "./components/TranslateRoToRu";

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

  interface CategoryTranslations {
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
  }

  interface ProductProps {
    product: Product; // Assuming Product type is defined
  }

  interface ProductProps {
    selectedOption: string; // Add a proper type here based on your needs
  }

  export default function Product({ selectedOption }: ProductProps) {
    const router = useRouter();
    const { id: productId } = router.query;
    const { language } = useLanguage();
    const array = getTranslatedArray(language);

    const product: Product | undefined = productsData.find(
      (p) => p.id === parseInt(productId as string)
    );

    const [selectOption, setSelectedOption] = useState<string>(
      product?.translations[language as keyof CategoryTranslations]?.opt1 ||
        product?.translations[language as keyof CategoryTranslations]?.opt2 ||
        product?.translations[language as keyof CategoryTranslations]?.opt3 ||
        ""
    );

    const selectedPrice = (() => {
      if (selectedOption === "opt1") {
        return (
          product?.translations[language as keyof CategoryTranslations]
            ?.reducere ||
          product?.translations[language as keyof CategoryTranslations]?.pret1 ||
          ""
        );
      }
      if (selectedOption === "opt2") {
        return (
          product?.translations[language as keyof CategoryTranslations]?.pret2 ||
          ""
        );
      }
      if (selectedOption === "opt3") {
        return (
          product?.translations[language as keyof CategoryTranslations]?.pret3 ||
          ""
        );
      }
      return (
        product?.translations[language as keyof CategoryTranslations]?.pret1 || ""
      );
    })();


    const handleOptionChange = (option: string) => {
      setSelectedOption(option);
    };

    useEffect(() => {
      setSelectedOption(
        product?.translations[language as keyof CategoryTranslations]?.opt1 ||
          product?.translations[language as keyof CategoryTranslations]?.opt2 ||
          product?.translations[language as keyof CategoryTranslations]?.opt3 ||
          ""
      );
    }, [product]);

    return (
      <div>
        {product ? (
          <>
            <div className="flex lg:flex-row flex-col justify-center items-center justify- mt-20 mb-20 relative">
              <div className="w-96 h-80 mr-10 relative overflow-hidden mb-6  ">
                <Image
                  src={product.image || "/default-image.jpg"}
                  alt={
                    array?.translations[language as keyof CategoryTranslations]
                      .name
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-6 rounded-xl shadow-lg h-full lg:w-[50%] w-[90%]">
                <h1 className="text-3xl font-bold text-white mb-4">
                  {
                    product?.translations[language as keyof CategoryTranslations]
                      .name
                  }
                </h1>
                <div className="flex gap-3 font-varela ">
                  {product?.translations[language as keyof CategoryTranslations]
                    .opt1 && (
                    <button
                      onClick={() => {
                        const selectedOpt1 =
                          product.translations[
                            language as keyof CategoryTranslations
                          ].opt1;
                        selectedOpt1 && handleOptionChange(selectedOpt1);
                      }}
                      className={`anim w-full py-1 ${
                        selectedOption ===
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt1
                          ? "bg-white text-black"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt1
                      }
                    </button>
                  )}

                  {product?.translations[language as keyof CategoryTranslations]
                    .opt2 && (
                    <button
                      onClick={() => {
                        const selectedOpt2 =
                          product.translations[
                            language as keyof CategoryTranslations
                          ].opt2;
                        selectedOpt2 && handleOptionChange(selectedOpt2);
                      }}
                      className={`anim w-full py-1 ${
                        selectedOption ===
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt2
                          ? "bg-white text-black"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt2
                      }
                    </button>
                  )}

                  {product?.translations[language as keyof CategoryTranslations]
                    .opt3 && (
                    <button
                      onClick={() => {
                        const selectedOpt3 =
                          product.translations[
                            language as keyof CategoryTranslations
                          ].opt3;
                        selectedOpt3 && handleOptionChange(selectedOpt3);
                      }}
                      className={`anim w-full py-1 ${
                        selectedOption ===
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt3
                          ? "bg-white text-black"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {
                        product?.translations[
                          language as keyof CategoryTranslations
                        ].opt3
                      }
                    </button>
                  )}
                </div>
                <div className="bg-yellow-50 mt-6 shadow-md p-6 rounded-lg text-gray-800">
                  <p className="text-sm font-semibold text-yellow-500 mb-2">
                    Descriere:
                  </p>
                  <p className="text-sm font-varela mb-6">
                    {
                      product?.translations[
                        language as keyof CategoryTranslations
                      ].descriere
                    }
                  </p>
                  <div className="flex items-center justify-end mb-1">
                    {product?.translations[language as keyof CategoryTranslations]
                      .reducere && (
                      <p className="text-base line-through text-gray-400">
                        {
                          product?.translations[
                            language as keyof CategoryTranslations
                          ].pret1
                        }
                      </p>
                    )}
                  </div>
                  <p className="flex justify-between text-lg font-semibold text-yellow-500 mb-2">
                    Total{" "}
                    <span className="text-xl font-varela">{selectedPrice}</span>
                  </p>
                  <p className="text-md flex justify-between  text-yellow-500">
                    Comandă acum la
                    <span className="font-semibold text-sm font-varela">
                      076 723 462
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center mt-20 mb-20 text-gray-600">
            <p className="text-4xl font-semibold mb-4">
              Produsul nu a fost găsit
            </p>
            <p>Ne pare rău, produsul pe care îl căutați nu există.</p>
          </div>
        )}
        <Footer />
      </div>
    );
  }
