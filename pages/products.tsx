import React from "react";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import categoriesData from "./categories.json";
import useLanguage from "../public/LanguageContext";
import translateData from "./translate.json";
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

interface CategoryTranslations {
  ro: {
    denumire: string;
  };
  ru: {
    denumire: string;
  };
}

interface CategoryData {
  id: number;
  img: string;
  translations: {
    ro: {
      denumire: string;
    };
    ru: {
      denumire: string;
    };
  };
}

const ProductsComponent = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId;
  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  const array = getTranslatedArray(language);

  const filteredProducts = categoryId
    ? translateData.products.filter(
        (product: Product) => product.categoryId === +categoryId
      )
    : translateData.products;

  const categoryName = categoryId
    ? categoriesData.find((category) => category.id === +categoryId)
        ?.translations[language as keyof CategoryTranslations].denumire
    : "All Products";
  return (
    <>
      <p className="text-center mt-10 text-4xl font-volkron font-bold">
        {categoryName}
      </p>
      <div className="flex flex-wrap justify-center mt-10 lg:gap-8 gap-4">
        {filteredProducts.map((product: Product) => (
          <Link
            href={`/product?id=${product.id}`}
            key={product.id}
            className="mb-6 md:mb-0 md:mr-[5vw] flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[full] lg:w-[15%] md:w-[35%] w-[45%] bg-gradient-to-br from-yellow-300 to-yellow-500 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 product-box"
          >
            <div className="h-[80%] w-full mb-2 md:mb-4 flex justify-center items-center">
              <Image
                src={product.image || "/default-image.jpg"}
                alt={
                  product.translations[language as keyof CategoryTranslations]
                    ?.name
                }
                width={150}
                height={150}
              />
            </div>
            <div className="font-bold text-base md:text-lg text-slate-600 mb-0 md:mb-1 font-nunito">
              {product.translations[language as keyof CategoryTranslations]
                ?.reducere ? (
                <div className="flex flex-col items-center">
                  <p className="line-through text-[#f2f2f2] ">
                    {
                      product.translations[
                        language as keyof CategoryTranslations
                      ]?.pret1
                    }
                  </p>
                  <p>
                    {
                      product.translations[
                        language as keyof CategoryTranslations
                      ]?.reducere
                    }
                  </p>
                </div>
              ) : (
                product.translations[language as keyof CategoryTranslations]
                  .pret1
              )}
            </div>
            <div className="font-semibold text-slate-600 text-sm md:text-base font-nunito text-center">
              {
                product.translations[language as keyof CategoryTranslations]
                  .name
              }
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductsComponent;
