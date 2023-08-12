import React, { useEffect, useState } from "react";
import Image from "next/image";
import back from "/public/images/borcan.jpg";
import borcan from "/public/images/bee1.png";

const Borcan = () => {
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newMarginTop = window.scrollY * -0.4;
      setMarginTop(newMarginTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const prlx = {
    marginTop: `${marginTop}px`,
  };
  return (
    <>
      <div
        className="h-1/5 w-1/5 bg-cover bg-center flex items-center justify-center rounded-[200px] overflow-hidden mt-[7.5%]"
        style={{ backgroundImage: `url('../borcan.jpg')` }}
      >
        <Image src={borcan} width={0} height={0} alt="" className="p-10 " />
      </div>
    </>
  );
};

export default Borcan;
