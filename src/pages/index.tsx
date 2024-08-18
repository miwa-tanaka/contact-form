import { useEffect, useState } from "react";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import Title from "@/components/atoms/title";
import Header from "@/components/organisms/header";
import FormTop from "@/components/templates/formTop";
import ThanksTop from "@/components/templates/thanks";
import Footer from "@/components/organisms/footer";
import styles from "@/styles/body.module.scss";
import { contactFormCheckFlagState } from "@/services/store";
import { useTranslation } from "react-i18next";

export default function Home(): JSX.Element {
  const isValid = useRecoilValue(contactFormCheckFlagState);
  const [announcement, setAnnouncement] = useState<string>("");
  const { t } = useTranslation("Common");

  useEffect(() => {
    setAnnouncement(isValid ? t("CONFIRMATION_MSG") : t("CONTACT_FORM"));
  }, [isValid, t]);

  return (
    <>
      <Head>
        <title>{t("CONTACT_FORM")} | HELLO WORLD</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Title value={announcement} ariaLive={isValid ? "polite" : "off"} />
        {isValid ? <ThanksTop /> : <FormTop />}
      </main>
      <Footer />
    </>
  );
}
