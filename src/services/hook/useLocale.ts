import { useRouter } from "next/router";
import LOCALES from "@/constants/locales";
import nextConfig from "../../../next.config.mjs";

const locales = ["en", "ja"] as const;
type LocaleType = (typeof locales)[number];

function isLocaleType(value: unknown): value is LocaleType {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}

export function useCurrentLocale() {
  const { locale } = useRouter();
  const i18n = nextConfig.i18n;
  const defaultLocale: LocaleType = i18n
    ? (i18n.defaultLocale as LocaleType)
    : "en";
  const currentLocale: LocaleType = isLocaleType(locale)
    ? (locale as LocaleType)
    : defaultLocale;

  return currentLocale;
}

export function useLocale() {
  const currentLocale = useCurrentLocale();
  const trans = LOCALES[currentLocale];

  return trans;
}
