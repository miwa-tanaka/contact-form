import styles from "@/styles/radioField.module.scss";
import { useTranslation } from "react-i18next";

export type RadioItem = {
  value: string;
  id: string;
};

type RadioProps = {
  label: string;
  data: RadioItem[];
  radioFieldName: string;
  radioFieldId: string;
  errors?: {
    [key: string]: any;
  };
  onChange: (event: any) => void;
  isRequired: boolean;
};

export default function RadioField({
  label,
  data,
  radioFieldName,
  radioFieldId,
  errors,
  onChange,
  isRequired,
}: RadioProps) {
  const { t } = useTranslation("Common");

  const errorMessage: string | undefined =
    errors && errors[radioFieldName]?.message;

  const hasError: boolean = errorMessage ? true : false;

  return (
    <>
      <legend className="label">
        {label}
        {isRequired && <span className="required">{`* ${t("REQUIRED")}`}</span>}
      </legend>
      <div
        role="radiogroup"
        aria-invalid={hasError}
        className={styles.radioWrapper}
        aria-labelledby={`${radioFieldId}-legend`}
        aria-describedby={hasError ? `${radioFieldId}-error` : undefined}
      >
        {data.map((v, k) => {
          const radioId = `${radioFieldId}-${v.id}`;

          return (
            <label key={k} className={styles.radioLabel}>
              <input
                type="radio"
                id={radioId}
                name={radioFieldName}
                value={v.value}
                onChange={onChange}
              />
              <span className={styles.radioValue}>{v.value}</span>
            </label>
          );
        })}
      </div>
      {hasError ? (
        <p id={`${radioFieldId}-error`} role="alert" className="error">
          {errorMessage}
        </p>
      ) : null}
    </>
  );
}
