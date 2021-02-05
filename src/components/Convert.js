import React, { useEffect, useState } from "react";
import translateGoogle from "../api/translateGoogle";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await translateGoogle.post(
        "",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslatedText(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return <h1 className="ui header">{translatedText}</h1>;
};

export default Convert;
