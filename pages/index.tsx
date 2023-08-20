import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import drop from "./images/drop.png";
import productsData from "./products.json";
import Footer from "./components/Footer";

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

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };

  return (
    <>
      <div className="flex flex-col mt-20 items-center text-center">
          <div className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 font-recoleta bg-cover bg-clip-text text-transparent bg-gradient-to-r from-dark_purple via-indigo to-dark_purple ">
            Explorând <br /> Universul Apicol
          </div>
          <div className="text-[#413f4a] text-lg md:text-base  font-medium mb-6 font-varela ">
            Bine ați venit la ApiSudex, locul unde pasiunea noastră{" "}
            <br className="hidden md:block" /> pentru albine și natură se
            întâlnește cu inovația.
          </div>
          <button
            className="text-white font-medium text-xs md:text-sm flex items-center w-fit bg-[#1c1e2b] px-3 md:px-4 py-1 md:py-2 rounded-[50px] relative font-varela leading-tight"
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 w-4 md:w-5 " />
          </button>
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:mt-20 bg-dark_purple p-4 md:p-10 items-center">
        {productsData.slice(0, 4).map((product: Product) => (
          <Link
            href={`/product?id=${product.id}`}
            key={product.id}
            className="mb-6 md:mb-0 md:mr-[5vw] flex flex-col items-center rounded-md p-2 md:p-5  md:w-[15%] md:h-80 bg-slate-100  hover:scale-105 transition-transform  duration-800 ease-in hover:bg-opacity-90"
          >
            <div className="h-[80%] w-full mb-2 md:mb-2 flex justify-center items-center">
              <Image
                src={product.image || "/default-image.jpg"}
                alt={product.name}
                width={150}
                height={150}
              />
            </div>
            <div className="font-bold text-base md:text-lg text-slate-600 mb-0 md:mb-1 font-varela">
              {product.reducere ? (
                <div className="flex flex-col items-center">
                  <p className="line-through text-gray-400">{product.pret1}</p>
                  <p>{product.reducere}</p>
                </div>
              ) : (
                product.pret1
              )}
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
