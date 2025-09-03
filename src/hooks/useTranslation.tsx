import { useTranslation } from "react-i18next";

export function MyComponent() {
  const { t } = useTranslation();

  return <p>{t("my translated text")}</p>;
}
