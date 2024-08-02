import styles from "@/styles/footer.module.scss";

type FooterProps = {};

export default function Footer({}: FooterProps): JSX.Element {
  return (
    <footer className={styles.footer}>
      <small>&#169; Miwa Tanaka</small>
    </footer>
  );
}
