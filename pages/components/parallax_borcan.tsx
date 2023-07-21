import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="bg-['/public/image/borcan.jpg'] h-10 w-10">das</div>
    </>
  );
};

export default Borcan;
