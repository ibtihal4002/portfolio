import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal className="mb-12 grid gap-4 sm:mb-16 md:grid-cols-[12rem_1fr]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">{index}</span> / {id}
          </p>
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">{title}</h2>
            {kicker && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{kicker}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
