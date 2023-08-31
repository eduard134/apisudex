/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";
import Footer from "./components/Footer";
import { useState, useMemo, useEffect } from "react";
import useLanguage from "../public/LanguageContext";
import { getTranslatedContent } from "./components/TranslateRoToRu";
import ph1 from "../public/images/rama_145_1.png";
import ph2 from "../public/images/rama_145_2.png";
import ph3 from "../public/images/rama_145pr.png";
import ph4 from "../public/images/rama_300_1.png";

interface Product {
  id: number;
  categoryId: number;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  translations: ProductCategory;
}

interface ProductCategory {
  ro: Caracteristics;
  ru: Caracteristics;
}

interface Caracteristics {
  name: string;
  btn1?: {
    name: string;
    opt1?: string;
    opt2?: string;
    opt3?: string;
    pret1?: string;
    pret2?: string;
    pret3?: string;
    descriere?: string;
  };
  btn2?: {
    name: string;
    pret1?: string;
    descriere?: string;
  };
  btn3?: {
    name: string;
    pret1?: string;
    descriere?: string;
    reducere?: string;
    button1?: {
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
    button2?: {
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
    button3?: {
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
  };
  btn4?: {
    name: string;
    opt1?: string;
    opt2?: string;
    opt3?: string;
    pret1?: string;
    pret2?: string;
    pret3?: string;
    descriere?: string;
  };
}

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;
  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(0);

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const translatedProduct = useMemo(() => {
    const translatedArray = productsData.map((product) => ({
      ...product,
      translations:
        language === "ro" ? product.translations.ro : product.translations.ru,
    }));
    return translatedArray.find((p) => p.id === parseInt(productId as string));
  }, [productId, language]);

  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showButton3, setShowButton3] = useState(false);
  const [showButton4, setShowButton4] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(
    (translatedProduct?.translations?.pret1
      ? parseFloat(translatedProduct?.translations?.pret1)
      : null) ||
      (translatedProduct?.translations?.btn1?.pret1
        ? parseFloat(translatedProduct.translations.btn1.pret1)
        : null)
  );

  useEffect(() => {
    if (translatedProduct && translatedProduct.translations.btn1) {
      const pret1Value = translatedProduct.translations.btn1.pret1;
      if (pret1Value !== undefined) {
        setSelectedPrice(parseFloat(pret1Value));
      }
    }
  }, [translatedProduct]);

  console.log("btn1 pret1:", translatedProduct?.translations?.btn1?.pret1);
  const handleOpt1Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleOpt2Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret2;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleOpt3Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret3;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleOpt1 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleOpt2 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret2;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleOpt3 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret3;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton1Click = () => {
    setShowButton1(true);
    setShowButton2(false);
    setShowButton3(false);
    setShowButton4(false);

    const btn1 = translatedProduct?.translations?.btn1;
    const selectedPriceValue = btn1?.pret1 || btn1?.pret2 || btn1?.pret3;

    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton2Click = () => {
    setShowButton1(false);
    setShowButton2(true);
    setShowButton3(false);
    setShowButton4(false);

    const selectedPriceValue = translatedProduct?.translations?.btn2?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton3Click = () => {
    setShowButton1(false);
    setShowButton2(false);
    setShowButton3(true);
    setShowButton4(false);

    const btn3 = translatedProduct?.translations?.btn3;
    const selectedPriceValue =
      btn3?.button1?.pret1 ||
      btn3?.button2?.pret1 ||
      btn3?.button3?.pret1 ||
      btn3?.pret1;

    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    const discountedPriceValue =
      btn3?.button1?.reducere ||
      btn3?.button2?.reducere ||
      btn3?.button3?.reducere ||
      btn3?.pret1;
    setSelectedPrice(
      discountedPriceValue !== undefined
        ? parseFloat(discountedPriceValue)
        : null
    );
  };

  const handleButton4Click = () => {
    setShowButton1(false);
    setShowButton2(false);
    setShowButton3(false);
    setShowButton4(true);

    const btn4 = translatedProduct?.translations?.btn4;
    const selectedPriceValue = btn4?.pret1 || btn4?.pret2 || btn4?.pret3;

    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton1 = () => {
    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button1?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton2 = () => {
    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button2?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  const handleButton3 = () => {
    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button3?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
  };

  console.log(translatedProduct?.translations.btn4?.pret3);

  return (
    <div>
      {translatedProduct ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center items-center mt-0 sm:mt-20 mb-20 relative">
            <div className="w-[35%]">
              <div className="w-auto flex items-center justify-center h-80  lg:mr-10 relative overflow-hidden  mr-0">
                <Image
                  src={
                    activeImageIndex === 0
                      ? translatedProduct.image || "/default-image.jpg"
                      : activeImageIndex === 1
                      ? ph1
                      : activeImageIndex === 2
                      ? ph2
                      : activeImageIndex === 3
                      ? ph3
                      : ph4
                  }
                  alt={translatedProduct.translations.name}
                  layout="intrinsic"
                  width={200}
                  height={200}
                />
              </div>

              <div className=" flex justify-center items-center">
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 1
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(1)}
                >
                  <Image alt="" src={ph1} />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 2  
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(2)}
                >
                  <Image alt="" src={ph2} />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 3
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(3)}
                >
                  <Image alt="" src={ph3} />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 4
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(4)}
                >
                  <Image alt="" src={ph4} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-4 sm:p-6 rounded-xl shadow-lg h-full lg:w-[50%] w-[90%]">
              <h1 className="text-3xl font-extrabold text-white mb-4 font-nunito text-center sm:text-start">
                {translatedProduct.translations.name}
              </h1>
              <div className="flex justify-center gap-3 flex-wrap sm:flex-nowrap font-nunito font-semibold mb-4">
                {translatedProduct.translations.btn1 && (
                  <div>
                    <button onClick={handleButton1Click}>
                      {translatedProduct.translations.btn1.name}
                    </button>
                  </div>
                )}
                {translatedProduct.translations.btn2 && (
                  <button onClick={handleButton2Click}>
                    {translatedProduct.translations.btn2?.name}
                  </button>
                )}
                {translatedProduct.translations.btn3 && (
                  <button onClick={handleButton3Click}>
                    {translatedProduct.translations.btn3?.name}
                  </button>
                )}
                {translatedProduct.translations.btn4 && (
                  <button onClick={handleButton4Click}>
                    {translatedProduct.translations.btn4?.name}
                  </button>
                )}
              </div>
              <div className="flex justify-center">
                {showButton1 && (
                  <div className="mr-4">
                    <button onClick={handleOpt1Click}>
                      {translatedProduct?.translations?.btn1?.opt1}
                    </button>
                  </div>
                )}
                {showButton1 && (
                  <div className="mr-4">
                    <button onClick={handleOpt2Click}>
                      {translatedProduct?.translations?.btn1?.opt2}
                    </button>
                  </div>
                )}
                {showButton1 && (
                  <div className="">
                    <button onClick={handleOpt3Click}>
                      {translatedProduct?.translations?.btn1?.opt3}
                    </button>
                  </div>
                )}
              </div>
              {showButton2}
              <div className="flex justify-center">
                {showButton3 && (
                  <div className="mr-4">
                    <button onClick={handleButton1}>
                      {translatedProduct?.translations?.btn3?.button1?.name}
                    </button>
                  </div>
                )}
                {showButton3 && (
                  <div className="mr-4">
                    <button onClick={handleButton2}>
                      {translatedProduct?.translations?.btn3?.button2?.name}
                    </button>
                  </div>
                )}
                {showButton3 && (
                  <div className="">
                    <button onClick={handleButton3}>
                      {translatedProduct?.translations?.btn3?.button3?.name}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {showButton4 && (
                  <div className="mr-4">
                    <button onClick={handleOpt1}>
                      {translatedProduct?.translations?.btn4?.opt1}
                    </button>
                  </div>
                )}
                {showButton4 && (
                  <div className="mr-4">
                    <button onClick={handleOpt2}>
                      {translatedProduct?.translations?.btn4?.opt2}
                    </button>
                  </div>
                )}
                {showButton4 && (
                  <div className="">
                    <button onClick={handleOpt3}>
                      {translatedProduct?.translations?.btn4?.opt3}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex">
                Total:{" "}
                {selectedPrice !== null ? (
                  <>
                    {showButton3 &&
                    (translatedProduct.translations?.btn3?.button1?.reducere ||
                      translatedProduct.translations?.btn3?.button2?.reducere ||
                      translatedProduct.translations?.btn3?.button3
                        ?.reducere) ? (
                      <div className="flex flex-col items-center">
                        <p className="line-through text-gray-700 text-sm md:text-base">
                          {selectedPrice}
                        </p>
                        <p className="text-sm md:text-base">
                          {showButton1 &&
                            translatedProduct.translations?.btn3?.button1
                              ?.reducere}
                          {showButton2 &&
                            translatedProduct.translations?.btn3?.button2
                              ?.reducere}
                          {showButton3 &&
                            translatedProduct.translations?.btn3?.button3
                              ?.reducere}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm md:text-base">{selectedPrice}</p>
                    )}
                  </>
                ) : (
                  <></>
                )}{" "}
                Lei
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
