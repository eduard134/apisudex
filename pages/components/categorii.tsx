import React from "react";
import categoriesData from "../categories.json";
import Link from "next/link";
import Image from "next/image";
import useLanguage from "../../public/LanguageContext";
import {
  getTranslatedContent,
  getTranslatedCategories,
} from "./TranslateRoToRu"; // Import the function

const Categorii = () => {
  const { language } = useLanguage();
  const content = getTranslatedContent(language);
  const translatedCategories = getTranslatedCategories(language);
  return (
    <div className="mt-[-15vh] sm:mt-10 mb-20 text-center">
      <hr className="sm:bg-yellow-500 sm:h-[3px] sm:mr-6 sm:ml-8 sm:mb-8 invisible" />
      <h2 className="sm:mb-6 mb-3 text-4xl font-bold font-volkron">
        {content.Categorii}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-6 ">
        {translatedCategories.map((category) => (
          <Link
            href={`/products?categoryId=${category.id}`}
            key={category.id}
            className="sm:mt-8 sm:mb-8 mt-5 sm:mx-0 mx-5 md:mb-0 md:mr-5 flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[250px] sm:h-[full] md:w-[25%] bg-gradient-to-br via-orange-400 from-yellow-500 
        to-yellow-500 transition-shadow-transform duration-150 ease-linear hover:shadow-xl hover:scale-105 font-nunito"
          >
            <div className="h-[80%] w-full mb-2 md:mb-4 flex justify-center items-center">
              <Image
                src={category.img || ""}
                alt={category.translations.denumire}
                width={150}
                height={150}
              />
            </div>
            <span className="mt-2 text-lg font-semibold text-white">
              {category.translations.denumire}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorii;
