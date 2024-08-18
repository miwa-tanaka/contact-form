import style from "@/styles/title.module.scss";

type TitleProps = {
  value: string;
  ariaLive?: "off" | "assertive" | "polite" | undefined;
};

export default function Title({ value, ariaLive }: TitleProps): JSX.Element {
  return (
    <h1 aria-live={ariaLive ? ariaLive : "off"} className={style.title}>
      {value}
    </h1>
  );
}
