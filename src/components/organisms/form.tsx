import { useState, useRef } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRecoilState } from "recoil";
import AlertIcon from "@/components/atoms/alertIcon";
import TextField from "@/components/molecules/inputFields/textField";
import RadioField from "@/components/molecules/inputFields/radioField";
import Button from "@/components/atoms/button";
import styles from "@/styles/form.module.scss";
import type { RadioItem } from "@/components/molecules/inputFields/radioField";
import { contactFormCheckFlagState } from "@/services/store";
import { useTranslation } from "react-i18next";

type FormProps = {};

export type FormInputs = {
  name: string;
  name_kana?: string;
  email: string;
  tel: string | number;
  contact_method: "email" | "tel";
};

export default function Form({}: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>();

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isValid, setIsValid] = useRecoilState(contactFormCheckFlagState);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    setIsDisabled(true);
    setIsValid(true);
  };

  const { t, i18n } = useTranslation("Common");
  const currentLanguage = i18n.language;

  const preferredContactData: RadioItem[] = [
    { value: t("EMAIL"), id: "Email" },
    { value: t("TEL"), id: "Tel" },
  ];

  const handleError = (errors: any) => {
    if (errorMessageRef.current) {
      errorMessageRef.current.focus();
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit, handleError)}
    >
      <fieldset>
        <TextField
          label={t("NAME")}
          isRequired={true}
          textFieldName="name"
          textFieldId="name"
          autocomplete="name"
          register={register("name", {
            required: t("ERROR_MSG_NAME"),
            maxLength: {
              value: 50,
              message: t("ERROR_MSG_NAME_MAX_LENGTH"),
            },
          })}
          errors={errors}
        />
      </fieldset>
      {currentLanguage === "ja" && (
        <fieldset>
          <TextField
            label="お名前（ふりがな）"
            isRequired={true}
            textFieldName="name_kana"
            textFieldId="name_kana"
            autocomplete="on"
            register={register("name_kana", {
              required: "ふりがなをご入力ください",
              maxLength: {
                value: 50,
                message: "ふりがなは50字以内でご入力ください",
              },
            })}
            errors={errors}
          />
        </fieldset>
      )}
      <fieldset>
        <TextField
          type="email"
          label={t("EMAIL_ADDRESS")}
          isRequired={true}
          textFieldName="email"
          textFieldId="email"
          autocomplete="email"
          inputMode="email"
          register={register("email", {
            required: t("ERROR_MSG_EMAIL"),
            pattern: {
              value:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
              message: t("ERROR_MSG_EMAIL_FORMAT"),
            },
          })}
          errors={errors}
        />
      </fieldset>
      <fieldset>
        <TextField
          type="tel"
          label={t("PHONE_NUMBER")}
          isRequired={true}
          textFieldName="tel"
          textFieldId="tel"
          autocomplete="tel"
          inputMode="tel"
          register={register("tel", {
            required: t("ERROR_MSG_PHONE"),
            pattern: {
              value: /^[０-９0-9\-]+$/,
              message: t("ERROR_MSG_PHONE_FORMAT"),
            },
          })}
          errors={errors}
        />
      </fieldset>
      <fieldset>
        <Controller
          name="contact_method"
          control={control}
          rules={{
            required: t("ERROR_MSG_PICK"),
          }}
          render={({ field: { onChange } }) => (
            <RadioField
              label={t("PREFERRED_CONTACT_METHOD")}
              data={preferredContactData}
              radioFieldName="contact_method"
              radioFieldId="contact_method"
              errors={errors}
              isRequired={true}
              onChange={onChange}
            />
          )}
        />
      </fieldset>
      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          ref={errorMessageRef}
          className={styles.errorWrapper}
        >
          <p className={styles.errorMessage}>
            <AlertIcon />
            {t("ERROR_MSG")}
          </p>
          <ul className={styles.errorList}>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>
                <a href={`#${field}`} className={styles.errorLink}>
                  {error?.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Button text={t("SUBMIT")} type="submit" disabled={isDisabled} />
    </form>
  );
}
