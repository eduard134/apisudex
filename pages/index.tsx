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
          <div className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 font-recoleta bg-cover bg-clip-text text-transparent bg-gradient-to-r from-dark_purple via-indigo to-dark_purple ">
            Explorând <br /> Universul Apicol
          </div>
          <div className="text-[#413f4a] text-lg md:text-base py-3 font-medium mb-6 font-varela ">
            Bine ați venit la ApiSudex, locul unde pasiunea noastră{" "}
            <br className="hidden md:block" /> pentru albine și natură se întâlnește cu inovația.
          </div>
          <button
            className="text-white font-medium text-xs md:text-sm flex items-center w-fit bg-[#1c1e2b] px-3 md:px-4 py-1 md:py-2 rounded-[50px] relative font-varela leading-tight"
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 w-4 md:w-5 " />
          </button>
        </div>
        <Borcan />
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-40 bg-dark_purple p-4 md:p-10 items-center">
        {productsData.slice(0, 4).map((product: Product) => (
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
              <p className="leading-5 text-center">{product.name}</p>
            </div>
          </Link>
        ))}
        <p className="text-center text-2xl md:text-6xl font-bold leading-loose mt-6 md:mt-0 bg-cover bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 font-recoleta">
          Produsele <br className="hidden md:block " /> Noastre <br />
          Populare
        </p>
      </div>
      <Footer />
    </>
  );
}
