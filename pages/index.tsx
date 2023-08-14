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
      <div className="flex justify-center ">
        <div className="items-center mr-[22%] mt-20">
          <div className="text-7xl text-[#1c1e2b] font-bold ">
            Miere <br /> Proaspătă
          </div>
          <div className="text-[#413f4a] py-3 font-medium ">
            Mierea crudă este un ingredient atât de simplu, <br /> conține polen
            și propolis
          </div>
          <button
            className="text-white font-medium text-sm flex leading-6 items-center w-fit sm:border-2 bg-[#1c1e2b] px-4 py-2 border-solid border-[#e6e5e2]-400 rounded-[50px] relative"
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 mt-1 w-5 " />
          </button>
        </div>
        <Borcan />
      </div>
      <div className="flex mt-40 justify-center bg-dark_purple p-10 items-center">
        {productsData.slice(0, 4).map((product: Product) => (
          <div
            key={product.id}
            className="mr-[5vw] justify-center items-center rounded-[5px] p-5 h-[40vh] bg-slate-100"
          >
            <Link href={`/product/${product.id}`}>
              <div className="h-[80%] justify-center flex items-center">
                <Image
                  src={`${product.image}`}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="font-bold text-lg text-slate-600">
                {product.pret1}
              </div>
              <div className="font-medium text-slate-600">{product.name}</div>
            </Link>
          </div>
        ))}
        <p className="text-center text-6xl leading-normal text-white">
          Produsele <br /> Noastre <br /> Populare
        </p>
      </div>
      <Footer />
    </>
  );
}
