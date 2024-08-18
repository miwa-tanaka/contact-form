import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.scss";
import i18n from "i18next";

type HeaderProps = {};

export default function Header({}: HeaderProps): JSX.Element {
  const router = useRouter();
  const basePath = router.basePath;
  const [announcement, setAnnouncement] = useState<string>("");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);
    setAnnouncement(
      lng === "en"
        ? "Language switched to English"
        : "言語が日本語に切り替わりました",
    );
  };

  return (
    <header className={styles.header}>
      <img
        src={`${basePath}/title-logo.png`}
        alt="Logo: HELLO WORLD"
        width={256}
        height={114}
      />

      <div className={styles.linkWrapper}>
        <button
          onClick={() => changeLanguage("en")}
          lang="en"
          aria-label="Switch language to English"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ja")}
          lang="ja"
          aria-label="言語を日本語に切り替える"
        >
          にほんご
        </button>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={styles.announcement}
      >
        {announcement}
      </div>
    </header>
  );
}
