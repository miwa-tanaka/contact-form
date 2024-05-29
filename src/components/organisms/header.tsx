import styles from "@/styles/header.module.scss";
import i18n from "i18next";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <img
        src="/title-logo.png"
        alt="Logo: HELLO WORLD"
        width={256}
        height={114}
      />

      <div className={styles.linkWrapper}>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("ja")}>にほんご</button>
      </div>
    </header>
  );
}
