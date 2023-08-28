/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Translation from "../translate.json";
import { useRouter } from "next/router";
import translateData from "../translate.json"; // Update the path as needed
import categoriesData from "../categories.json";
import Product from "../product";
import  useLanguage  from "../../public/LanguageContext";

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

const products: Product[] = translateData.products;

export function getTranslatedContent(language: string) {
  const translatedContent =
    language === "ro" ? Translation.data.ro : Translation.data.ru;
  return translatedContent;
}

export function getTranslatedArray(language: string) {
  const translatedArray = products.map((product) => ({
    ...product,
    translations:
      language === "ro" ? product.translations.ro : product.translations.ru,
  }));
  return translatedArray;
}

export function getTranslatedCategories(language: string) {
  const translatedCategories = categoriesData.map((category) => ({
    ...category,
    translations:
      language === "ro" ? category.translations.ro : category.translations.ru,
  }));
  return translatedCategories;
}

function TranslationRoToRu() {
  const { language, setLanguage } = useLanguage();
  const [content, setContent] = useState(Translation.data.ro);
  const [array, setArray] = useState(getTranslatedArray(language));
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    console.log("Language changed:", language);
    setContent(language === "ro" ? Translation.data.ro : Translation.data.ru);
    setArray(getTranslatedArray(language));
    setSelectedOption("");
  }, [language]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed. Content:", content);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [content, router.events]);

  useEffect(() => {
    const handleRouteChange1 = () => {
      console.log("Route changed. Content:", array);
    };

    router.events.on("routeChangeComplete", handleRouteChange1);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange1);
    };
  }, [array, router.events]);

  useEffect(() => {
    console.log("Selected Option:", selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    console.log("Language changed:", language);
  }, [language]);

  return (
    <div className="relative flex items-center mt-1">
      <label className="language-switcher">
        <input
          className="toggler"
          type="checkbox"
          checked={language === "ru"} // Assuming language is a state variable
          onChange={() => {
            if (language === "ro") {
              handleLanguageChange("ru");
            } else {
              handleLanguageChange("ro");
            }
          }}
        />
        <span className="slider round"></span>
        <span className="select-fr font-semibold">RO</span>
        <span className="select-en font-semibold">RU</span>
      </label>
    </div>
  );
}

export default TranslationRoToRu;
