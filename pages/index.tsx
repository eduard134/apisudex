import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Borcan from "./components/parallax_borcan";
import drop from "./images/drop.png";
import bee3 from "./images/bee3.png";
import bee4 from "./images/bee4.png";
import bee5 from "./images/bee5.png";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };
  return (
    <>
      <div>
        <Head>
          <title>ApiSudex</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
          <meta name="description" content="" />
        </Head>
      </div>
      <div className="flex justify-center ">
        <div className="items-center mr-[22.5%] mt-20">
          <div className="text-7xl text-[#1c1e2b] font-bold ">
            Miere <br /> Proaspătă
          </div>
          <div className="text-[#413f4a] py-3 font-medium ">
            Mierea crudă este un ingredient atât de simplu, <br /> conține polen
            și propolis
          </div>
          <button
            className="text-white font-medium text-sm flex leading-6 items-cemter w-fit flex sm:border-2 bg-[#1c1e2b] px-4 py-2 border-solid border-[#e6e5e2]-400 rounded-[50px] relative"
            onClick={handleClick}
          >
            Produse
            <Image src={drop} alt="" className="ml-2 mt-1 w-5 "></Image>
          </button>
        </div>
        <Borcan />
      </div>
      <Image src={bee3} alt="" className="float-right -mr-10 "></Image>
      <Image src={bee4} alt="" className="float-right"></Image>
      <Image
        src={bee5}
        alt="Albina"
        className="absolute top-0 left-0"
        height={0}
        width={0}
      ></Image>
    </>
  );
}
