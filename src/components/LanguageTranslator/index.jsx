import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function LanguageTranslator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("pt");
  async function translate() {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text,
            langpair: `${sourceLanguage}|${targetLanguage}`,
          },
        }
      );

      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Erro ao traduzir o texto: ", error);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Language Translator</h1>
      <div>
        <label>
          Source Language
          <select
            value={sourceLanguage}
            onChange={(event) => {
              setSourceLanguage(event.target.value);
            }}
          >
            <option value="pt">Portugues</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">italiano</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Target Language
          <select
            value={targetLanguage}
            onChange={(event) => {
              setTargetLanguage(event.target.value);
            }}
          >
            <option value="pt">Portugues</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">italiano</option>
          </select>
        </label>
      </div>

      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button onClick={translate}>Tranlate</button>

      {translatedText && <p>{translatedText}</p>}
    </div>
  );
}
