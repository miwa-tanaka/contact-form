import { useRecoilState } from "recoil";
import { contactFormCheckFlagState } from "@/services/store";
import ArrowIcon from "@/components/atoms/arrowIcon";
import Button from "@/components/atoms/button";
import { useTranslation } from "react-i18next";

type ThanksTopProps = {};

export default function ThanksTop({}: ThanksTopProps): JSX.Element {
  const [isValid, setIsValid] = useRecoilState(contactFormCheckFlagState);

  const handleClick = () => {
    setIsValid(false);
  };

  const { t } = useTranslation("Common");

  return (
    <div style={containerStyle}>
      <Button
        type="button"
        disabled={false}
        onClick={handleClick}
        text={t("BACK_TO_TOP")}
        icon={<ArrowIcon fillColor="#fff" />}
        aria-label={t("BACK_TO_TOP")}
      />
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: " flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "3rem 0",
};
