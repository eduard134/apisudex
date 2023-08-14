import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Borcan from "./components/parallax_borcan";
import drop from "/public/images/drop.png";
import bee3 from "/public/images/bee3.png";
import bee4 from "/public/images/bee4.png";
import bee5 from "/public/images/bee5.png";
import productsData from "../public/products.json";

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
            className="text-white font-medium text-sm flex leading-6 items-cemter w-fit sm:border-2 bg-[#1c1e2b] px-4 py-2 border-solid border-[#e6e5e2]-400 rounded-[50px] relative"
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 mt-1 w-5 "></Image>
          </button>
        </div>
        <Borcan />
      </div>
      <div className=" w-1/2 -ml-10 grid place-items-center mt-[20vh] ">
        <Image
          src={bee3}
          alt=""
          className=" w-[30%] bg-white mb-1 p-5 rounded-[20px]"
        ></Image>
        <div className="w-[30%] mb-10 bg-white rounded-[15px] flex">
          <button>
            <Link href="/shop">
              <span className=" pl-4 pr-5  text-black font-semibold text-lg">
                Reduceri
              </span>
            </Link>
          </button>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
