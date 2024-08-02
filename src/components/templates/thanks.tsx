import Link from "next/link";
import { useRecoilState } from "recoil";
import Title from "@/components/atoms/title";
import { contactFormCheckFlagState } from "@/services/store";
import styles from "@/styles/button.module.scss";
import ArrowIcon from "@/components/atoms/arrowIcon";
import { useTranslation } from "react-i18next";

type ThanksTopProps = {};

export default function ThanksTop({}: ThanksTopProps): JSX.Element {
  const [isValid, setIsValid] = useRecoilState(contactFormCheckFlagState);

  const handleClick = () => {
    setIsValid(false);
  };

  const { t } = useTranslation("Common");

  return (
    <>
      <Title value={t("CONFIRMATION_MSG")} />
      <div style={containerStyle}>
        <Link href="/" passHref legacyBehavior>
          <a onClick={handleClick} className={styles.button}>
            {t("BACK_TO_TOP")}
            <ArrowIcon fillColor="#fff" />
          </a>
        </Link>
      </div>
    </>
  );
}

const containerStyle: React.CSSProperties = {
  display: " flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "3rem 0",
};
