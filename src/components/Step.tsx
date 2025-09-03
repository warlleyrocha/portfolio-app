import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type StepProps = {
  step: {
    id: string; // id único
    key: string; // chave para tradução

    techs?: string[];
    github?: string;
    deploy?: string;
  };
};

export default function Step({ step }: Readonly<StepProps>) {
  const { t } = useTranslation();
  return (
    <div
      className="relative flex flex-col gap-4 p-6 sm:p-8 rounded-3xl 
    border border-[#00A40D]/20 bg-slate-950/30 backdrop-blur-lg shadow-2xl 
    shadow-black/20 hover:shadow-green-500/10 transition-all duration-300 
    text-center group cursor-pointer overflow-hidden hover:scale-[1.03]"
    >
      {/* Glow no fundo */}

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00A40D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/* Nome do projeto */}
      <h3 className="relative z-10 font-semibold text-xl sm:text-2xl md:text-3xl pt-4">
        {t(`projects.list.${step.key}.name`)}
      </h3>

      {/* Descrição */}
      <p className="relative z-10 text-sm sm:text-base md:text-lg text-slate-100/90">
        {t(`projects.list.${step.key}.description`)}
      </p>

      {/* Techs */}
      {step.techs && (
        <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-2">
          {step.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm rounded-full 
              bg-[#00A40D]/15 text-[#00A40D] font-medium border border-[#00A40D]/30"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Botões */}
      <div className="relative z-10 flex justify-center gap-4 mt-4">
        {step.github && (
          <a
            href={step.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md 
            bg-[#00A40D]/90 text-slate-950 font-medium text-sm 
            hover:bg-[#00A40D] hover:shadow-md transition-all duration-300"
          >
            <FaGithub /> {t("buttons.code")}
          </a>
        )}
        {step.deploy && (
          <a
            href={step.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md 
            bg-slate-800/40 border border-[#00A40D]/40 text-sm text-[#00A40D] 
            font-medium hover:bg-[#00A40D] hover:text-slate-950 transition-all duration-300"
          >
            <FaExternalLinkAlt /> {t("buttons.demo")}
          </a>
        )}
      </div>
    </div>
  );
}
