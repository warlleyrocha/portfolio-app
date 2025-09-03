import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt-BR" ? "en-US" : "pt-BR";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-[4px] rounded border-green-800 border text-white bg-transparent text-xs
             transition-all duration-300 hover:bg-green-800 hover:shadow-lg hover:translate-y-[-2px]"
    >
      {i18n.language === "pt-BR" ? (
        <>
          <span className="text-[10px]">EN</span>{" "}
          <span className="text-sm font-light">US</span>
        </>
      ) : (
        <>
          <span className="text-[10px]">PT</span>{" "}
          <span className="text-sm font-light">BR</span>
        </>
      )}
    </button>
  );
}
