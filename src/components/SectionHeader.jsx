export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--gold-dark)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold text-[var(--navy)] sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
