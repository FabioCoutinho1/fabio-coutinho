interface TitlePropsType {
  text: string;
}

export default function Title({ text }: TitlePropsType) {
  return <h2 className="text-3xl font-bold tracking-tight text-primary-font sm:text-4xl">{text}</h2>;
}
