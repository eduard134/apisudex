import Image from "next/image";
import Head from "next/head";

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
        <div className="text-7xl text-[#1c1e2b] font-bold">Mierea <br /> Proaspătă</div>
        <div className="text-[#413f4a] py-3 font-medium ">Mierea crudă este un ingredient atât de simplu, <br /> conține polen și propolis</div>
        <div>
          <button className="sm:border-2 bg-[#1c1e2b] text-white font-medium text-sm p-3 border-solid border-[#e6e5e2]-400 rounded-[50px]">Produse <span className="bg-[#d9b306] rounded-[50px] "> > </span></button>
        </div>
      </div>
    </>
  );
}
