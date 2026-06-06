import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" aria-hidden="true" />
    </Reveal>
  );
}
