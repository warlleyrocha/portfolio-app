import React from "react";
import { useTranslation } from "react-i18next";

export function MyComponent() {
  const { t, i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')
  // or const [t, i18n] = useTranslation();

  return <p>{t(($) => $["my translated text"])}</p>;
}
