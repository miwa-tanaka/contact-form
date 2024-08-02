import Head from "next/head";
import { useRecoilValue } from "recoil";
import Header from "@/components/organisms/header";
import FormTop from "@/components/templates/formTop";
import ThanksTop from "@/components/templates/thanks";
import Footer from "@/components/organisms/footer";
import styles from "@/styles/body.module.scss";
import { contactFormCheckFlagState } from "@/services/store";
import { useTranslation } from "react-i18next";

export default function Home(): JSX.Element {
  const isValid = useRecoilValue(contactFormCheckFlagState);

  const { t } = useTranslation("Common");

  return (
    <>
      <Head>
        <title>{t("CONTACT_FORM")} | HELLO WORLD</title>
      </Head>
      <Header />
      <main className={styles.main}>
        {!isValid ? <FormTop /> : <ThanksTop />}
      </main>
      <Footer />
    </>
  );
}
