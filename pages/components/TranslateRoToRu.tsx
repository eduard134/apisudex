/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Translation from "../translate.json";
import { useRouter } from "next/router";

export function getTranslatedContent(language: string) {
  const translatedContent = language === "ro" ? Translation.ro : Translation.ru;
  return translatedContent;
}

function TranslationRoToRu() {
  const [language, setLanguage] = useState("ro");
  const [content, setContent] = useState(Translation.ro);
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect triggered with language:", language);
    if (language === "ro") {
      setContent(Translation.ro);
    } else if (language === "ru") {
      setContent(Translation.ru);
    }
    console.log("Content:", content);
  }, [language]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed. Content:", content);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [content, router.events]);

  return (
    <div>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="ro">Ro</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  );
}

export default TranslationRoToRu;
