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
  const [showImageBtn2, setImageBtn2] = useState(false);
  const [showImageBtn3, setImageBtn3] = useState(false);
  const [showImageBtn4, setImageBtn4] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

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
    setSelectedButton("btn1");

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
    setSelectedButton("btn2");

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
    setSelectedButton("btn3");

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
    setSelectedButton("btn4");

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
              <div className="w-auto flex items-center justify-center h-80  lg:mr-10 relative overflow-hidden  mr-0">
                <Image
                  alt=""
                  src={
                    selectedButton === "btn1"
                      ? showImageBtn1
                        ? translatedProduct?.translations?.btn1?.image1 ||
                          "/default-image.jpg"
                        : translatedProduct?.translations?.btn1?.image ||
                          "/default-image.jpg"
                      : selectedButton === "btn2"
                      ? showImageBtn2
                        ? translatedProduct?.translations?.btn2?.button1
                            ?.image || "/default-image.jpg"
                        : translatedProduct?.translations?.btn2?.button2
                            ?.image || "/default-image.jpg"
                      : selectedButton === "btn3"
                      ? showImageBtn3
                        ? translatedProduct?.translations?.btn3?.button1
                            ?.image || "/default-image.jpg"
                        : showImageBtn3
                        ? translatedProduct?.translations?.btn3?.button2
                            ?.image || "/default-image.jpg"
                        : translatedProduct?.translations?.btn3?.button3
                            ?.image || "/default-image.jpg"
                      : selectedButton === "btn4"
                      ? showImageBtn4
                        ? translatedProduct?.translations?.btn4?.image1 ||
                          "/default-image.jpg"
                        : translatedProduct?.translations?.btn4?.image ||
                          "/default-image.jpg"
                      : "/default-image.jpg"
                  }
                  width={400}
                  height={400}
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
                  <Image
                    alt=""
                    src={
                      selectedButton === "btn1"
                        ? translatedProduct?.translations?.btn1?.image ||
                          "/default-image.jpg"
                        : selectedButton === "btn2"
                        ? translatedProduct?.translations?.btn2?.button1
                            ?.image || "/default-image.jpg"
                        : selectedButton === "btn3"
                        ? translatedProduct?.translations?.btn3?.button1
                            ?.image || "/default-image.jpg"
                        : selectedButton === "btn4"
                        ? translatedProduct?.translations?.btn4?.image ||
                          "/default-image.jpg"
                        : "/default-image.jpg"
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
                      selectedButton === "btn1"
                        ? translatedProduct?.translations?.btn1?.image1 ||
                          "/default-image.jpg"
                        : selectedButton === "btn2"
                        ? translatedProduct?.translations?.btn2?.button1
                            ?.image1 || "/default-image.jpg"
                        : selectedButton === "btn3"
                        ? translatedProduct?.translations?.btn3?.button1
                            ?.image1 || "/default-image.jpg"
                        : selectedButton === "btn4"
                        ? translatedProduct?.translations?.btn4?.image1 ||
                          "/default-image.jpg"
                        : "/default-image.jpg"
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
                      selectedButton === "btn1"
                        ? translatedProduct?.translations?.btn1?.image2 ||
                          "/default-image.jpg"
                        : selectedButton === "btn2"
                        ? translatedProduct?.translations?.btn2?.button1
                            ?.image || "/default-image.jpg"
                        : // trebu de facut gol
                        selectedButton === "btn3"
                        ? translatedProduct?.translations?.btn3?.button1
                            ?.image2 || "/default-image.jpg"
                        : selectedButton === "btn4"
                        ? translatedProduct?.translations?.btn4?.image2 ||
                          "/default-image.jpg"
                        : "/default-image.jpg"
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
                      selectedButton === "btn1"
                        ? translatedProduct?.translations?.btn1?.image3 ||
                          "/default-image.jpg"
                        : selectedButton === "btn2"
                        ? translatedProduct?.translations?.btn2?.button1
                            ?.image3 || "/default-image.jpg"
                        : selectedButton === "btn3"
                        ? translatedProduct?.translations?.btn3?.button1
                            ?.image3 || "/default-image.jpg"
                        : selectedButton === "btn4"
                        ? translatedProduct?.translations?.btn4?.image3 ||
                          "/default-image.jpg"
                        : "/default-image.jpg"
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
              <div className="flex justify-center">
                {showButton2 && (
                  <div className="mr-4">
                    <button onClick={Button1}>
                      {translatedProduct?.translations?.btn2?.button1?.name}
                    </button>
                  </div>
                )}
                {showButton2 && (
                  <div className="mr-4">
                    <button onClick={Button2}>
                      {translatedProduct?.translations?.btn2?.button2?.name}
                    </button>
                  </div>
                )}
              </div>
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
              {selectedDescription && (
                <div className="text-white mb-4">{selectedDescription}</div>
              )}
              <div className="flex items-end">
                <p className="mr-2">Total: </p>
                {selectedPrice !== null ? (
                  <>
                    {showButton3 && selectedDiscount ? (
                      <div className="flex flex-col items-center ml-1">
                        <p className="line-through text-gray-700 text-sm md:text-base">
                          {selectedPrice} Lei
                        </p>
                        <p className="text-sm md:text-base">
                          {selectedDiscount}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm md:text-base">{selectedPrice}</p>
                    )}
                  </>
                ) : (
                  <></>
                )}{" "}
                <p className="ml-1">Lei </p>
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
