import React from "react";
import productsData from "./products.json";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  categoryId: number;
  image: string;
  name: string;
  pret1: string;
}

const products = () => {
  return (
    <>
      {productsData.map((product: Product) => (
        <Link
          href={`/product?id=${product.id}`}
          key={product.id}
          className="mb-6 md:mb-0 md:mr-[5vw] flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[40vh] md:w-[12.5%] bg-slate-100"
        >
          <div className="h-[80%] w-full mb-2 md:mb-4 flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
            />
          </div>
          <div className="font-bold text-base md:text-lg text-slate-600 mb-0 md:mb-1 font-varela">
            {product.pret1}
          </div>
          <div className="font-medium text-slate-600 text-sm md:text-base font-varela">
            {product.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default products;
