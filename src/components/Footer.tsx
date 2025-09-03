import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full bg-slate-950/30 backdrop-blur-lg border-t border-[#00A40D]/20 py-5 flex flex-col items-center justify-center gap-6">
      {/* Título */}
      <p className="px-4 py-1 rounded-full bg-[#00A40D]/20 text-[#00A40D] font-medium text-sm tracking-wide">
        {t("footer.title")}
      </p>

      {/* Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
        {/* Email */}
        <a
          href="mailto:warlleyrocha@icloud.com"
          className="flex items-center gap-2 text-slate-100 hover:text-[#00A40D] transition-colors"
        >
          <FaEnvelope className="text-lg" />
          <span>warlleyrocha@icloud.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/warlleyrocha"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-100 hover:text-[#00A40D] transition-colors"
        >
          <FaGithub className="text-lg" />
          <span>warlleyrocha</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/warlley-rossmann-rocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-100 hover:text-[#00A40D] transition-colors"
        >
          <FaLinkedin className="text-lg" />
          <span>Warlley Rossmann Rocha</span>
        </a>
      </div>

      {/* Linha de copyright */}
      <div className="w-full border-t border-slate-700/40 mt-8 pt-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Warlley Rocha
      </div>
    </footer>
  );
}
