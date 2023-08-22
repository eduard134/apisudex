/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Translation from "../translate.json";

function TranslationRoToRu() {
  const [language, setLanguage] = useState("ro");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language == "ro") {
      setContent(Translation.ro);
    } else if (language == "ru") {
      setContent(Translation.ru);
    }
  });

  return (
    <div>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option>Ro</option>
        <option>Ru</option>
      </select>
    </div>
  );
}
export default TranslationRoToRu;
