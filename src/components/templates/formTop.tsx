import Title from "@/components/atoms/title";
import Form from "../organisms/form";
import { useTranslation } from "react-i18next";

type FormTopProps = {};

export default function FormTop({}: FormTopProps): JSX.Element {
  const { t } = useTranslation("Common");

  return (
    <>
      <Title value={t("CONTACT_FORM")} />
      <Form />
    </>
  );
}
