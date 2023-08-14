import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Borcan from "./components/parallax_borcan";
import drop from "./images/drop.png";
import bee3 from "./images/bee3.png";
import bee4 from "./images/bee4.png";
import bee5 from "./images/bee5.png";
import productsData from "./products.json";
import Footer from "./components/Footer";

interface Product {
  id: number;
  categoryId: number;
  image: string;
  name: string;
  pret1: string;
}

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mt-10 md:mt-20">
        <div className="md:items-center md:mr-[22%] text-center md:text-left">
          <div className="text-4xl md:text-7xl bg-cover bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 font-bold mb-4 md:mb-6">
            Miere <br /> Proaspătă
          </div>
          <div className="text-[#413f4a] text-sm md:text-base py-3 font-medium mb-6">
            Mierea crudă este un ingredient atât de simplu,{" "}
            <br className="hidden md:block" /> conține polen și propolis
          </div>
          <button
            className="text-white font-medium text-xs md:text-sm flex leading-6 items-center w-fit bg-[#1c1e2b] px-3 md:px-4 py-1 md:py-2 rounded-[50px] relative "
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 mt-1 w-4 md:w-5 " />
          </button>
        </div>
        <Borcan />
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-40 bg-dark_purple p-4 md:p-10 items-center">
        {productsData.slice(0, 4).map((product: Product) => (
          <div
            key={product.id}
            className="mb-6 md:mb-0 md:mr-6 flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[40vh] md:w-[20%] bg-slate-100"
          >
            <Link href={`/product/${product.id}`}>
              <div className="h-[60%] w-full mb-2 md:mb-4 flex justify-center items-center">
                <Image
                  src={`${product.image}`}
                  alt={product.name}
                  width={150}
                  height={150}
                />
              </div>
              <div className="font-bold text-base md:text-lg text-slate-600 mb-1 md:mb-2">
                {product.pret1}
              </div>
              <div className="font-medium text-slate-600 text-sm md:text-base">
                {product.name}
              </div>
            </Link>
          </div>
        ))}
        <p className="text-center text-4xl md:text-6xl font-bold leading-normal mt-6 md:mt-0 bg-cover bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400">
          Produsele <br className="hidden md:block " /> Noastre <br /> Populare
        </p>
      </div>
      <Footer />
    </>
  );
}
