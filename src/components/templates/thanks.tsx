import Link from "next/link";
import { useRecoilState } from "recoil";
import Title from "@/components/atoms/title";
import { contactFormCheckFlagState } from "@/services/store";
import styles from "@/styles/button.module.scss";
import ArrowIcon from "@/components/atoms/arrowIcon";
import { useLocale } from "@/services/hook/useLocale";

type ThanksTopProps = {};

export default function ThanksTop({}: ThanksTopProps) {
  const [isValid, setIsValid] = useRecoilState(contactFormCheckFlagState);

  const handleClick = () => {
    setIsValid(false);
  };

  const trans = useLocale();

  return (
    <>
      <Title value={trans.CONFIRMATION_MSG} />
      <div style={containerStyle}>
        <Link href="/" passHref legacyBehavior>
          <a onClick={handleClick} className={styles.button}>
            {trans.BACK_TO_TOP}
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
