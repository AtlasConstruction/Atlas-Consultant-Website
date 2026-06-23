export function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-gold-700">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black leading-tight text-navy-950 md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-navy-700">{text}</p> : null}
    </div>
  );
}
