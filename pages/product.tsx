/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";
import Footer from "./components/Footer";
import { useState, useMemo, useEffect } from "react";
import useLanguage from "../public/LanguageContext";
import { getTranslatedContent } from "./components/TranslateRoToRu";

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
  descriere?: string;
}

interface ProductCategory {
  ro: Caracteristics;
  ru: Caracteristics;
}

interface Caracteristics {
  name: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  btn1?: {
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
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
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    name: string;
    pret1?: string;
    descriere?: string;
  };
  btn3?: {
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    name: string;
    pret1?: string;
    descriere?: string;
    reducere?: string;
    button1?: {
      image?: string;
      image1?: string;
      image2?: string;
      image3?: string;
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
    button2?: {
      image?: string;
      image1?: string;
      image2?: string;
      image3?: string;
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
    button3?: {
      image?: string;
      image1?: string;
      image2?: string;
      image3?: string;
      name?: string;
      pret1?: string;
      reducere?: string;
      descriere?: string;
    };
  };
  btn4?: {
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
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
  let imageSource;
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
  const [watchButton1, setWatchButton1] = useState(false);
  const [watchButton2, setWatchButton2] = useState(false);
  const [watchButton3, setWatchButton3] = useState(false);
  const [showImageBtn1, setImageBtn1] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const [selectedDiscount, setSelectedDiscount] = useState<number | null>(
    translatedProduct?.translations?.btn3?.button1?.reducere
      ? parseFloat(translatedProduct?.translations?.btn3?.button1?.reducere)
      : null
  );

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

  const handleOpt1Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn1?.descriere || null
    );
  };

  const handleOpt2Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret2;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
    setSelectedDescription(
      translatedProduct?.translations?.btn1?.descriere || null
    );
  };

  const handleOpt3Click = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn1?.pret3;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );
    setSelectedDescription(
      translatedProduct?.translations?.btn1?.descriere || null
    );
  };

  const handleOpt1 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn4?.descriere || null
    );
  };

  const handleOpt2 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret2;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn4?.descriere || null
    );
  };

  const handleOpt3 = () => {
    const selectedPriceValue = translatedProduct?.translations?.btn4?.pret3;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn4?.descriere || null
    );
  };

  const handleButton1Click = () => {
    setShowButton1(true);
    setShowButton2(false);
    setShowButton3(false);
    setShowButton4(false);
    setImageBtn1(true);

    const btn1 = translatedProduct?.translations?.btn1;
    const selectedPriceValue = btn1?.pret1 || btn1?.pret2 || btn1?.pret3;

    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn1?.descriere || null
    );
  };

  const handleButton2Click = () => {
    setShowButton1(false);
    setShowButton2(true);
    setShowButton3(false);
    setShowButton4(false);

    const btn2 = translatedProduct?.translations?.btn2;
    const selectedPriceValue =
      btn2?.button1?.pret1 || btn2?.button2?.pret1 || btn2?.pret1;

    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn2?.descriere || null
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
      btn3?.button3?.reducere;
    setSelectedDiscount(
      discountedPriceValue !== undefined
        ? parseFloat(discountedPriceValue)
        : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn3?.descriere || null
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

    setSelectedDescription(
      translatedProduct?.translations?.btn4?.descriere || null
    );
  };

  const Button1 = () => {
    const selectedPriceValue =
      translatedProduct?.translations?.btn2?.button1?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn2?.button1?.descriere || null
    );
  };

  const Button2 = () => {
    const selectedPriceValue =
      translatedProduct?.translations?.btn2?.button2?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn2?.button2?.descriere || null
    );
  };

  const handleButton1 = () => {
    setWatchButton1(true);

    const btn3 = translatedProduct?.translations?.btn3;
    const discountedPriceValue = btn3?.button1?.reducere;

    setSelectedDiscount(
      discountedPriceValue !== undefined
        ? parseFloat(discountedPriceValue)
        : null
    );

    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button1?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn3?.button1?.descriere || null
    );
  };

  const handleButton2 = () => {
    setWatchButton2(true);

    const btn3 = translatedProduct?.translations?.btn3;
    const discountedPriceValue = btn3?.button2?.reducere;

    setSelectedDiscount(
      discountedPriceValue !== undefined
        ? parseFloat(discountedPriceValue)
        : null
    );

    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button2?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn3?.button2?.descriere || null
    );
  };

  const handleButton3 = () => {
    setWatchButton3(true);

    const btn3 = translatedProduct?.translations?.btn3;
    const discountedPriceValue = btn3?.button3?.reducere;

    setSelectedDiscount(
      discountedPriceValue !== undefined
        ? parseFloat(discountedPriceValue)
        : null
    );

    const selectedPriceValue =
      translatedProduct?.translations?.btn3?.button3?.pret1;
    setSelectedPrice(
      selectedPriceValue !== undefined ? parseFloat(selectedPriceValue) : null
    );

    setSelectedDescription(
      translatedProduct?.translations?.btn3?.button3?.descriere || null
    );
  };

  return (
    <div>
      {translatedProduct ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center items-center mt-0 sm:mt-20 mb-20 relative">
            <div className="w-[35%]">
              <div className="w-auto flex items-center justify-center h-80  lg:mr-10 relative overflow-hidden  mr-0"></div>

              <div className=" flex justify-center items-center">
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 1
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(1)}
                >
                  <Image
                    alt=""
                    src={
                      translatedProduct?.translations?.btn1?.image ||
                      "/default-image.jpg"
                    }
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 2
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(2)}
                >
                  <Image
                    alt=""
                    src={
                      translatedProduct?.translations?.btn2?.button1?.image ||
                      translatedProduct?.translations?.btn2?.button2?.image ||
                      "/default-image.jpg"
                    }
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 3
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(3)}
                >
                  <Image
                    alt=""
                    src={
                      translatedProduct?.translations?.btn3?.button1?.image ||
                      translatedProduct?.translations?.btn3?.button2?.image ||
                      translatedProduct?.translations?.btn3?.button3?.image ||
                      "/default-image.jpg"
                    }
                    width={200}
                    height={200}
                  />
                </div>
                <div
                  className={`mr-10 border-2 border-[#F2A421] ${
                    activeImageIndex === 4
                      ? "bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500"
                      : ""
                  } hover:bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-2 rounded-md`}
                  onClick={() => handleImageClick(4)}
                >
                  <Image
                    alt=""
                    src={
                      translatedProduct?.translations?.btn4?.image ||
                      "/default-image.jpg"
                    }
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-4 sm:p-6 rounded-xl shadow-lg h-full lg:w-[50%] w-[90%]">
              <h1 className="text-3xl font-extrabold text-white mb-4 font-nunito text-center sm:text-start">
                {translatedProduct.translations.name}
              </h1>
              <div className="flex justify-center gap-3 flex-wrap sm:flex-nowrap font-nunito font-bold mb-4 mt-10">
                {translatedProduct.translations.btn1 && (
                  <button
                    onClick={handleButton1Click}
                    className={`anim w-full py-1 px-2 ${
                      showButton1
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.btn1.name}
                  </button>
                )}
                {translatedProduct.translations.btn2 && (
                  <button
                    onClick={handleButton2Click}
                    className={`anim w-full py-1 px-2 ${
                      showButton2
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.btn2.name}
                  </button>
                )}
                {translatedProduct.translations.btn3 && (
                  <button
                    onClick={handleButton3Click}
                    className={`anim w-full py-1 px-2 ${
                      showButton3
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.btn3.name}
                  </button>
                )}
                {translatedProduct.translations.btn4 && (
                  <button
                    onClick={handleButton4Click}
                    className={`anim w-full py-1 px-2 ${
                      showButton4
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {translatedProduct.translations.btn4.name}
                  </button>
                )}
              </div>
              <div className="flex justify-center font-nunito font-semibold text-md">
                {showButton1 && (
                  <div className="mr-4">
                    <button onClick={handleOpt1Click} className="anim1 px-3 ">
                      {translatedProduct?.translations?.btn1?.opt1}
                    </button>
                  </div>
                )}
                {showButton1 && (
                  <div className="mr-4">
                    <button onClick={handleOpt2Click} className="anim1 px-3">
                      {translatedProduct?.translations?.btn1?.opt2}
                    </button>
                  </div>
                )}
                {showButton1 && (
                  <div className="">
                    <button onClick={handleOpt3Click} className="anim1 px-3">
                      {translatedProduct?.translations?.btn1?.opt3}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-center font-nunito font-semibold text-md">
                {showButton2 && (
                  <div className="mr-4">
                    <button onClick={Button1} className="anim1 px-3">
                      {translatedProduct?.translations?.btn2?.button1?.name}
                    </button>
                  </div>
                )}
                {showButton2 && (
                  <div className="mr-4">
                    <button onClick={Button2} className="anim1 px-3">
                      {translatedProduct?.translations?.btn2?.button2?.name}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-center font-nunito font-semibold text-md">
                {showButton3 && (
                  <div className="mr-4">
                    <button onClick={handleButton1} className="anim1 px-3">
                      {translatedProduct?.translations?.btn3?.button1?.name}
                    </button>
                  </div>
                )}
                {showButton3 && (
                  <div className="mr-4">
                    <button onClick={handleButton2} className="anim1 px-3">
                      {translatedProduct?.translations?.btn3?.button2?.name}
                    </button>
                  </div>
                )}
                {showButton3 && (
                  <div className="">
                    <button onClick={handleButton3} className="anim1 px-3">
                      {translatedProduct?.translations?.btn3?.button3?.name}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex justify-center font-nunito font-semibold text-md">
                {showButton4 && (
                  <div className="mr-4">
                    <button onClick={handleOpt1} className="anim1 px-3">
                      {translatedProduct?.translations?.btn4?.opt1}
                    </button>
                  </div>
                )}
                {showButton4 && (
                  <div className="mr-4">
                    <button onClick={handleOpt2} className="anim1 px-3">
                      {translatedProduct?.translations?.btn4?.opt2}
                    </button>
                  </div>
                )}
                {showButton4 && (
                  <div className="">
                    <button onClick={handleOpt3} className="anim1 px-3">
                      {translatedProduct?.translations?.btn4?.opt3}
                    </button>
                  </div>
                )}
              </div>
              <div className="bg-yellow-50 mt-6 shadow-md p-4 rounded-lg text-gray-800">
                {selectedDescription && (
                  <div className="text-md font-nunito mb-6 font-semibold text-[#595459]">
                    {" "}
                    <span className="text-yellow-500 text-xl">
                      Descriere:
                    </span>{" "}
                    <br /> {selectedDescription}
                  </div>
                )}
                <div className="flex items-end justify-between font-semibold text-yellow-500 mb-2 font-nunito">
                  <p className="mr-2">Total: </p>
                  <p>
                    {selectedPrice !== null ? (
                      <>
                        {showButton3 && selectedDiscount ? (
                          <div className="flex flex-col items-center ml-1">
                            <p className="line-through text-gray-700 text-lg md:text-xl">
                              {selectedPrice} Lei
                            </p>
                            <p className="text-sm md:text-base">
                              {selectedDiscount}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm md:text-base">
                            {selectedPrice} Lei
                          </p>
                        )}
                      </>
                    ) : (
                      <></>
                    )}{" "}
                  </p>
                </div>
                <div className=" font-semibold text-yellow-500 mb-2 font-nunito flex justify-between">
                  <p>Comandă acum la</p>
                  <p className="text-lg">076 723 462</p>
                </div>
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
