import Title from "@/components/atoms/title";
import Form from "../organisms/form";
import { useLocale } from "@/services/hook/useLocale";

type FormTopProps = {};

export default function FormTop({}: FormTopProps) {
  const trans = useLocale();

  return (
    <>
      <Title value={trans.CONTACT_FORM} />
      <Form />
    </>
  );
}
