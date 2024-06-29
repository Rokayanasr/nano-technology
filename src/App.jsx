import { useTranslation } from "react-i18next";
import "./utils/i18n";
import Navbar from "./components/Navbar";

function App() {
  const { t } = useTranslation();

  return (
      <>
          <Navbar></Navbar>
          <h2>{t("Welcome to React")}</h2>
      </>
  );
}

export default App;
