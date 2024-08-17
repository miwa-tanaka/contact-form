import { useState, ChangeEvent } from "react";
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
}: RadioProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const { t } = useTranslation("Common");

  const errorMessage: string | undefined =
    errors && errors[radioFieldName]?.message;

  const hasError: boolean = errorMessage ? true : false;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
    if (onChange) onChange(e);
  };

  return (
    <>
      <legend className="label">
        {label}
        {isRequired && <span className="required">{`* ${t("REQUIRED")}`}</span>}
      </legend>
      <div
        role="radiogroup"
        aria-required={isRequired}
        aria-invalid={hasError}
        className={styles.radioWrapper}
        aria-labelledby={`${radioFieldId}-legend`}
        aria-describedby={hasError ? `${radioFieldId}-error` : undefined}
      >
        {data.map((v, k) => {
          const radioId = `${radioFieldId}-${v.id}`;
          const isChecked = selectedValue === v.value;

          return (
            <label key={k} className={styles.radioLabel} htmlFor={radioId}>
              <input
                type="radio"
                id={radioId}
                name={radioFieldName}
                value={v.value}
                onChange={handleChange}
                aria-checked={isChecked}
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
