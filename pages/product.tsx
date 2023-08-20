import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";
import Footer from "./components/Footer";
import { useState } from "react";

interface Product {
  id: number;
  categoryId: number;
  image?: string;
  image1?: string;
  name: string;
  opt1?: string;
  opt2?: string;
  opt3?: string;
  pret1: string;
  pret2?: string;
  pret3?: string;
  reducere?: string;
  descriere: string;
}

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;

  const product: Product | undefined = productsData.find(
    (p) => p.id === parseInt(productId as string)
  );

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    product?.opt1 // Set initial selected option
  );

  const selectedPrice = (() => {
    if (selectedOption === product?.opt1) {
      return product?.reducere || product?.pret1; // Use discounted price if available
    }
    if (selectedOption === product?.opt2) {
      return product?.pret2;
    }
    if (selectedOption === product?.opt3) {
      return product?.pret3;
    }
    return product?.pret1;
  })();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {product ? (
        <>
          <div className="flex justify-center justify-evenly mt-20 mb-20 relative ">
            <div className="w-80 h-80 relative mb-4">
              <Image
                src={product.image || "/default-image.jpg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className="bg-gradient-to-br via-orange-400 from-yellow-500 
            to-yellow-500 p-10 h-full w-[25%] rounded-xl shadow-lg"
            >
              <h1 className="text-2xl font-bold font-point font-extrabold mb-4 text-white">
                {product.name}
              </h1>
              <div className="flex gap-2 leading-5">
                {product.opt1 && (
                  <button
                    onClick={() =>
                      product.opt1 && handleOptionChange(product.opt1)
                    }
                    className={`${
                      selectedOption === product.opt1
                        ? "bg-[#0077ff] text-white"
                        : "bg-white text-black"
                    } py-2 px-3 rounded-md anim`}
                  >
                    {product.opt1}
                  </button>
                )}
                {product.opt2 && (
                  <button
                    onClick={() =>
                      product.opt2 && handleOptionChange(product.opt2)
                    }
                    className={`${
                      selectedOption === product.opt2
                        ? "bg-[#0077ff] text-white"
                        : "bg-white text-black"
                    } py-2 px-3 rounded-md anim`}
                  >
                    {product.opt2}
                  </button>
                )}
                {product.opt3 && (
                  <button
                    onClick={() =>
                      product.opt3 && handleOptionChange(product.opt3)
                    }
                    className={`${
                      selectedOption === product.opt3
                        ? "bg-[#0077ff] text-white"
                        : "bg-white text-black"
                    } py-2 px-3 rounded-md anim`}
                  >
                    {product.opt3}
                  </button>
                )}
              </div>
              <p className="text-sm font-varela leading-4 text-white mt-8">
                <p className="font-semibold">Descriere: </p>
                {product.descriere}
              </p>
              <div className="float-right mt-2">
                {product.reducere && (
                  <p className="text-md line-through text-gray-300">
                    {product.pret1}
                  </p>
                )}
              </div>
              <p className="text-md font-varela mt-8 text-white flex leading-4 justify-between">
                <p className="leading-4">Total </p>

                <p className=" text-lg font-semibold leading-4">
                  {selectedPrice}
                </p>
              </p>
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
