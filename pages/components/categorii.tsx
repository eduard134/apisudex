import React from "react";
import categoriesData from "../categories.json";
import Link from "next/link";
import Image from "next/image";

const Categorii = () => {
  return (
    <div className="mt-10 mb-20 text-center">
      <hr className="bg-yellow-500 h-[3px] mr-6 ml-8 mb-8" />
      <h2 className="mb-6 text-4xl font-bold font-recoleta">Categorii:</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {categoriesData.map((category) => (
          <Link
          href={`/products?categoryId=${category.id}`}
            key={category.id}
            className="mt-8 mb-8 md:mb-0 md:mr-5 flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[full] md:w-[15%] bg-gradient-to-br via-orange-400 from-yellow-500 
        to-yellow-500 transition-shadow-transform duration-150 ease-linear hover:shadow-xl hover:scale-105 font-varela"
          >
            <div className="h-[80%] w-full mb-2 md:mb-4 flex justify-center items-center">
              <Image
                src={category.img}
                alt={category.denumire}
                width={150}
                height={150}
              />
            </div>
            <span className="mt-2 text-lg font-semibold text-white">
              {category.denumire}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorii;
