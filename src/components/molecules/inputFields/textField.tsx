import { UseFormRegisterReturn } from "react-hook-form";
import styles from "@/styles/textField.module.scss";
import { useTranslation } from "react-i18next";

type textFieldProps = {
  type?: string;
  label: string;
  isRequired: boolean;
  rule?: string;
  textFieldName: string;
  textFieldId: string;
  autocomplete?: string;
  inputMode?:
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
  register?: UseFormRegisterReturn;
  errors?: {
    [key: string]: any;
  };
};

export default function TextField({
  type = "text",
  label,
  isRequired,
  rule,
  textFieldName,
  textFieldId,
  autocomplete = "off",
  inputMode = "text",
  register,
  errors,
}: textFieldProps): JSX.Element {
  const { t } = useTranslation("Common");

  const errorMessage: string | undefined =
    errors && errors[textFieldName]?.message;

  const hasError: boolean = errorMessage ? true : false;

  return (
    <>
      <label htmlFor={textFieldId} className="label">
        {label}
        {rule && <span className="rule">({rule})</span>}
        {isRequired && <span className="required">{`* ${t("REQUIRED")}`}</span>}
      </label>

      <input
        className={`${styles.input} ${hasError ? styles.inputError : ""}`}
        type={type}
        id={textFieldId}
        name={textFieldName}
        autoComplete={autocomplete}
        inputMode={inputMode}
        required={isRequired}
        aria-invalid={hasError}
        aria-describedby={`${textFieldId}-error`}
        {...register}
      />
      {errorMessage ? (
        <p id={`${textFieldId}-error`} role="alert" className="error">
          {errorMessage}
        </p>
      ) : null}
    </>
  );
}
