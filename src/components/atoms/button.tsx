import style from "@/styles/button.module.scss";

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  disabled: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
};

export default function Button({
  text,
  icon,
  disabled,
  type,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type ? type : "button"}
      disabled={disabled}
      className={style.button}
      onClick={onClick}
    >
      {text}
      {icon && icon}
    </button>
  );
}
