interface TitlePropsType {
  text: string;
}

export default function Title({ text }: TitlePropsType) {
  return <h1 className="text-primary-font text-3xl font-bold">{text}</h1>;
}
