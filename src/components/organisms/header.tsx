import styles from "@/styles/header.module.scss";

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
        <a href="/en">English</a>
        <a href="/ja">にほんご</a>
      </div>
    </header>
  );
}
