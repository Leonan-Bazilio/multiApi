import IPAddressFinder from "./components/IPAddressFinder";
import LanguageTranslator from "./components/LanguageTranlator";
import MovieSearch from "./components/MovieSearch";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  return (
    <>
      <LanguageTranslator />
      <MovieSearch />
      <QRCodeGenerator />
      <IPAddressFinder />
    </>
  );
}

export default App;
