import React from "react";
import Slider from "./components/Slider";
import Categorii from "./components/categorii";
import Footer from "./components/Footer";
import { getTranslatedContent } from "./components/TranslateRoToRu";

const shop = () => {
  return (
    <>
      <Slider />
      <Categorii />
      <Footer />
    </>
  );
};

export default shop;
