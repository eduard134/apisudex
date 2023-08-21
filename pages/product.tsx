import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

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
    product?.opt1 || product?.opt2 || product?.opt3
  );

  const selectedPrice = (() => {
    if (selectedOption === product?.opt1) {
      return product?.reducere || product?.pret1;
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

  useEffect(() => {
    setSelectedOption(product?.opt1 || product?.opt2 || product?.opt3);
  }, [product]);

  return (
    <div>
      {product ? (
        <>
          <div className="flex lg:flex-row flex-col justify-center items-center justify- mt-20 mb-20 relative">
            <div className="w-96 h-80 relative overflow-hidden mb-6  ">
              <Image
                src={product.image || "/default-image.jpg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="bg-gradient-to-br via-orange-400 from-yellow-500 to-yellow-500 p-6 rounded-xl shadow-lg h-full lg:w-[50%] w-[90%]">
              <h1 className="text-3xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <div className="flex gap-3 font-varela ">
                {product.opt1 && (
                  <button
                    onClick={() =>
                      product.opt1 && handleOptionChange(product.opt1)
                    }
                    className={`anim w-full py-1 ${
                      selectedOption === product.opt1
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {product.opt1}
                  </button>
                )}
                {product.opt2 && (
                  <button
                    onClick={() =>
                      product.opt2 && handleOptionChange(product.opt2)
                    }
                    className={`anim w-full py-1 ${
                      selectedOption === product.opt2
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {product.opt2}
                  </button>
                )}
                {product.opt3 && (
                  <button
                    onClick={() =>
                      product.opt3 && handleOptionChange(product.opt3)
                    }
                    className={`anim w-full py-1 ${
                      selectedOption === product.opt3
                        ? "bg-white text-black"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {product.opt3}
                  </button>
                )}
              </div>
              <div className="bg-yellow-50 mt-6 shadow-md p-6 rounded-lg text-gray-800">
                <p className="text-sm font-semibold text-yellow-500 mb-2">
                  Descriere:
                </p>
                <p className="text-sm font-varela mb-6">{product.descriere}</p>
                <div className="flex items-center justify-end mb-1">
                  {product.reducere && (
                    <p className="text-base line-through text-gray-400">
                      {product.pret1}
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
