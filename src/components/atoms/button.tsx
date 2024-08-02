import style from "@/styles/button.module.scss";

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  disabled: boolean;
  type?: "submit" | "reset";
};

export default function Button({
  text,
  disabled,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      className={style.button}
    >
      {text}
    </button>
  );
}
