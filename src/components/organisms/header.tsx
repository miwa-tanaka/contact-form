import { useRouter } from "next/router";
import styles from "@/styles/header.module.scss";
import i18n from "i18next";

type HeaderProps = {};

export default function Header({}: HeaderProps): JSX.Element {
  const router = useRouter();
  const basePath = router.basePath;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("preferredLanguage", lng);
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
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ja")}>にほんご</button>
      </div>
    </header>
  );
}
