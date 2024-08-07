import style from "@/styles/title.module.scss";

type TitleProps = {
  value: string;
};

export default function Title({ value }: TitleProps): JSX.Element {
  return <h1 className={style.title}>{value}</h1>;
}
