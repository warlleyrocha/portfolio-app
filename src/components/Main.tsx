import Step from "./Step";
import { useTranslation, Trans } from "react-i18next";
import { MdDownload } from "react-icons/md";

export default function Main() {
  const { t } = useTranslation();

  const steps = [
    {
      id: "1",
      key: "eden",
      github: "https://github.com/warlleyrocha/eden",
      deploy: "https://eden-generation.vercel.app/",
      techs: ["React", "TailwindCSS", "TypeScript", "Axios", "Sonar Scanner"],
    },
    {
      id: "2",
      key: "insucheck",
      github: "https://github.com/Ameglebm/AppPipocaAgil",
      deploy: "https://insu-check.vercel.app/",
      techs: ["React Native", "Expo", "JavaScript", "Redux", "Axios"],
    },
    {
      id: "3",
      key: "nucleo",
      github: "https://github.com/warlleyrocha/Nucleo-Corp",
      deploy: "https://warlleyrocha.github.io/Nucleo-Corp/",
      techs: ["React", "TailwindCSS"],
    },
    {
      id: "4",
      key: "maisa",
      github:
        "https://github.com/warlleyrocha/Maisa-Alves-Terapias-Integrativas",
      deploy: "https://maisa-alves-terapias-integrativas.vercel.app/",
      techs: ["Bootstrap", "HTML", "CSS"],
    },
  ];

  const benefits = [
    {
      id: "01",
      name: t("about.benefits.self_taught.name"),
      description: t("about.benefits.self_taught.description"),
    },
    {
      id: "02",
      name: t("about.benefits.clean_code.name"),
      description: t("about.benefits.clean_code.description"),
    },
    {
      id: "03",
      name: t("about.benefits.api_integration.name"),
      description: t("about.benefits.api_integration.description"),
    },
  ];

  return (
    <main className="flex flex-col flex-1 items-center">
      {/* Intro Section */}
      <section
        id="introPage"
        className="relative flex justify-center items-center w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
      >
        {/* Formas geométricas animadas */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#00A40D]/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-[#4ade80]/20 rounded-full blur-2xl animate-pulse opacity-80"></div>

        {/* Card central */}
        <div className="relative w-full max-w-4xl bg-slate-950/30 backdrop-blur-lg rounded-3xl shadow-2xl shadow-black/30 border border-slate-300/10 p-8 sm:p-12 md:p-16 flex flex-col items-center text-center gap-6 md:gap-8 transition-all duration-300">
          {/* Título com gradiente */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#00A40D] to-[#4ade80] bg-clip-text text-transparent">
            {t("intro.greeting")}
            <br />
            {t("intro.role")}
          </h2>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-xl text-slate-100/90">
            <Trans
              i18nKey="intro.description"
              components={{
                highlight: (
                  <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00A40D] to-green-400" />
                ),
              }}
            />
          </p>

          {/* Botão CV */}
          <a
            href="/CV-WARLLEY-ROCHA.pdf"
            download
            className="relative flex items-center gap-2 px-6 py-3 rounded-2xl
             bg-[#00A40D]/90 text-white font-semibold poppins
             shadow-lg shadow-[#00A40D]/30
             backdrop-blur-md border border-[#00A40D]/50
             transition-all duration-300 hover:scale-110 hover:shadow-[#00A40D]/60
             group overflow-hidden"
          >
            {/* Efeito hover de brilho */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#00A40D]/40 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
            />

            <MdDownload className="" />

            {/* Texto */}
            <span>{t("intro.download_cv")}</span>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative flex flex-col gap-24 max-w-7xl mx-auto pt-12 px-4 sm:px-8 lg:px-0"
      >
        {/* Títulos */}
        <div className="flex flex-col gap-2 text-center">
          <h6 className="text-lg sm:text-xl md:text-2xl text-slate-300">
            {t("projects.subtitle")}
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            <Trans
              i18nKey="projects.title"
              components={{
                highlight: (
                  <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00A40D] to-green-400" />
                ),
              }}
            />
          </h3>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step) => (
            <Step key={step.id} step={step} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 lg:pt-32 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
      >
        <div className="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-[#00A40D] after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-[#00A40D] py-4">
          <h6 className="text-lg sm:text-xl md:text-2xl">
            {t("about.subtitle")}
          </h6>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            <Trans
              i18nKey="about.title"
              components={{
                highlight: (
                  <span className="poppins text-transparent bg-clip-text bg-gradient-to-r from-[#00A40D] to-green-400" />
                ),
              }}
            />
          </h3>
        </div>
        <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
          {t("about.intro")}
        </p>
        <div className="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex gap-6 sm:gap-8">
              <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                {benefit.id}
              </p>
              <div className="flex flex-col gap-6 sm:gap-8">
                <h3 className="text-2xl sm:text-3xl md:text-5xl">
                  {benefit.name}
                </h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
