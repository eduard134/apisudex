import Image from "next/image";
import Link from "next/link";

import Head from "next/head";
import Borcan from "./components/parallax_borcan";
import drop from "./images/drop.png";
import bee3 from "./images/bee3.png";
import bee4 from "./images/bee4.png";
import bee5 from "./images/bee5.png";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>ApiSudex</title>
          <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
          <meta name="description" content="" />
        </Head>
      </div>
      <div className="sm:w-8/12 items-center m-auto mt-20">
        <div className="text-7xl text-[#1c1e2b] font-bold ">
          Miere <br /> Proaspătă
        </div>
        <div className="text-[#413f4a] py-3 font-medium ">
          Mierea crudă este un ingredient atât de simplu, <br /> conține polen
          și propolis
        </div>
        <div className=" items-cemter w-fit flex sm:border-2 bg-[#1c1e2b] px-4 py-2 border-solid border-[#e6e5e2]-400 rounded-[50px] relative">
          <button className="text-white font-medium text-sm ">
            <Link href="/shop">Produse</Link>
          </button>
          <Image src={drop} alt="" className="ml-2 mt-1 w-5 "></Image>
        </div>
      </div>
        <Image src={bee3} alt="" className="float-right -mr-10 "></Image>
        <Image src={bee4} alt="" className="float-right mr-[20] "></Image>
        <Image src={bee5} alt="" className="float-right"></Image>

      <Borcan />
    </>
  );
}
