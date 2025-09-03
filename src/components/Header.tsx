import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [y, setY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const tabs = [
    { id: "1", name: t("header.tabs.projects"), link: "#projects" },
    { id: "2", name: t("header.tabs.about"), link: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[10] px-6 py-4 rounded-t-xl transition-all duration-300 border-b border-solid
        ${
          y > 0
            ? "bg-slate-950/50 backdrop-blur-md border-[#00A40D] shadow-md shadow-black/30"
            : "bg-slate-950/20 backdrop-blur-sm border-transparent shadow-inner shadow-black/10"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Nome */}
        <h1 className="font-medium text-white">
          <b className="font-bold poppins">Warlley</b> <span>Rocha</span>
        </h1>

        {/* Tabs centralizadas (desktop) */}
        <nav className="hidden sm:flex flex-1 justify-center items-center gap-6">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.link}
              className="duration-200 hover:text-[#00A40D]"
            >
              {tab.name}
            </a>
          ))}
        </nav>

        {/* Botões e ícones à direita (desktop) */}
        <div className="hidden sm:flex ml-auto items-center gap-4">
          <a
            href="https://github.com/warlleyrocha"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00A40D] text-xl transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/warlley-rossmann-rocha/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00A40D] text-xl transition-colors"
          >
            <FaLinkedin />
          </a>

          <a
            href="/Warlley_Rocha_CV.pdf"
            download
            className="relative overflow-hidden flex items-center gap-3 px-3 py-[6.5px] rounded-md bg-[#1d7524] text-white group"
          >
            <div className="absolute top-0 right-full w-full h-full bg-[#04d115] opacity-20 group-hover:translate-x-full duration-200 z-0" />
            <MdDownload className="relative z-10" />
            <h4 className="relative z-10 text-[12px]">{t("header.resume")}</h4>
          </a>

          <LanguageSwitcher />
        </div>

        {/* Botão hamburguer (mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden flex flex-col items-center bg-slate-950/90 backdrop-blur-md mt-2 rounded-b-xl p-4 gap-4">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.link}
              className="text-white hover:text-[#00A40D]"
            >
              {tab.name}
            </a>
          ))}

          <div className="flex flex-col items-center gap-4 mt-2">
            <a
              href="https://github.com/warlleyrocha"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00A40D] text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/warlley-rossmann-rocha/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00A40D] text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="/Warlley_Rocha_CV.pdf"
              download
              className="flex items-center gap-2 px-3 py-2 bg-[#1d7524] rounded-md text-white"
            >
              <MdDownload />
              {t("header.resume")}
            </a>
          </div>

          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
