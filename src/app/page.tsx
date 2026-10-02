import Header from "@/components/Header";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import {
  certifications,
  content,
  education,
  experience,
  interests,
  languages,
  profile,
  projects,
  skills,
  softSkills,
  stats,
} from "@/data/portfolio";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function Home() {
  const socials = Object.entries(profile.links).filter(([, url]) => url);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Header />

      <main id="top">
        {/* ---------------------------------------------------------------- Hero */}
        <section className="grain relative overflow-hidden pt-32 sm:pt-40">
          <div className="mx-auto max-w-page px-5 pb-20 sm:px-8 sm:pb-28">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </p>
            </Reveal>

            <div className="mt-8 grid items-end gap-8 sm:grid-cols-[1fr_auto]">
              <Reveal delay={80}>
                <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] font-medium leading-[0.95] tracking-tight">
                  {profile.firstName}
                  <br />
                  <span className="italic text-accent">{profile.lastName}</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative w-52 sm:w-60 lg:w-72">
                  <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-accent-soft" aria-hidden="true" />
                  <ImageSlot
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    hint="Profile photo"
                    priority
                    sizes="(min-width: 1024px) 288px, 240px"
                    className="aspect-[4/5] rounded-[1.75rem] bg-surface"
                  />
                </div>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
              <Reveal delay={160}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {profile.role} — {profile.specialization}
                </p>
                <p className="mt-4 max-w-xl text-xl leading-relaxed sm:text-2xl">{profile.headline}</p>
              </Reveal>

              <Reveal delay={240} className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                >
                  View projects
                </a>
                <a
                  href={profile.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
                >
                  Download CV <Arrow />
                </a>
              </Reveal>
            </div>

            <Reveal delay={320}>
              <dl className="mt-16 grid grid-cols-2 border-y border-line sm:grid-cols-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-1 py-6 sm:px-6 ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${
                      i > 0 ? "sm:border-l sm:border-line" : ""
                    } ${i >= 2 ? "border-t border-line sm:border-t-0" : ""}`}
                  >
                    <dt className="text-sm text-muted">{s.label}</dt>
                    <dd className="mt-1 font-display text-3xl font-medium sm:text-4xl">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* --------------------------------------------------------------- About */}
        <Section id="about" index="01" title="About me">
          <div className="grid gap-12 md:grid-cols-[12rem_1fr]">
            <Reveal className="hidden md:block">
              <ImageSlot
                src={profile.aboutImage}
                alt={`${profile.name} at work`}
                hint="About image"
                sizes="192px"
                className="aspect-[3/4] rounded-2xl bg-surface"
              />
            </Reveal>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
              <Reveal className="space-y-5 text-lg leading-relaxed text-ink/85">
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Reveal>
              <Reveal delay={120} className="space-y-8">
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Languages</h3>
                  <ul className="divide-y divide-line border-y border-line">
                    {languages.map((l) => (
                      <li key={l.name} className="flex justify-between py-3">
                        <span>{l.name}</span>
                        <span className="text-muted">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {interests.length > 0 && (
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((i) => (
                        <Tag key={i}>{i}</Tag>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ---------------------------------------------------------- Experience */}
        <Section
          id="experience"
          index="02"
          title="Experience"
          kicker={content.experienceKicker}
        >
          <div className="space-y-6">
            {experience.map((exp) => (
              <Reveal key={exp.company + exp.title}>
                <article className="grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:p-10 md:grid-cols-[12rem_1fr]">
                  <div>
                    <ImageSlot
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      compact
                      sizes="64px"
                      className="mb-4 h-16 w-16 rounded-2xl bg-paper"
                    />
                    <p className="font-display text-2xl font-medium leading-tight text-accent">{exp.company}</p>
                    <p className="mt-2 text-sm text-muted">{exp.period}</p>
                    {exp.location && <p className="text-sm text-muted">{exp.location}</p>}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {exp.points.map((pt) => (
                        <li key={pt} className="flex gap-3 leading-relaxed text-ink/85">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------ Projects */}
        <Section
          id="projects"
          index="03"
          title="Selected projects"
          kicker={content.projectsKicker}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 100} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-25px_rgb(var(--accent)/0.45)] sm:p-8">
                  <ImageSlot
                    src={p.image}
                    alt={`${p.title} — screenshot`}
                    hint="Project screenshot"
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="-mx-6 -mt-6 mb-6 aspect-[16/10] rounded-t-3xl sm:-mx-8 sm:-mt-8"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-5xl font-medium text-line transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium sm:text-3xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.period}</p>
                  <p className="mt-4 leading-relaxed">{p.summary}</p>
                  {p.points && p.points.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 h-px w-3 shrink-0 bg-muted" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
                    >
                      View project <Arrow />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {others.length > 0 && (
            <Reveal className="mt-16">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">{content.otherProjectsTitle}</h3>
              <ul className="divide-y divide-line border-y border-line">
                {others.map((p) => (
                  <li key={p.title} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-6">
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{p.period}</span>
                    <div>
                      <p className="font-medium">
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                            {p.title}
                          </a>
                        ) : (
                          p.title
                        )}
                      </p>
                      <p className="mt-1 text-sm text-muted">{p.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Section>

        {/* -------------------------------------------------------------- Skills */}
        <Section id="skills" index="04" title="Skills & toolbox">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group} className="bg-surface p-6 sm:p-8">
                <h3 className="font-display text-xl font-medium">{g.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
            <div className={`bg-ink p-6 text-paper sm:p-8 ${skills.length % 3 === 1 ? "lg:col-span-2" : ""}`}>
              <h3 className="font-display text-xl font-medium">Soft skills</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-paper/80">
                {softSkills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ----------------------------------------------------------- Education */}
        <Section id="education" index="05" title="Education & certifications">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <ol className="relative border-l border-line">
                {education.map((e) => (
                  <li key={e.degree} className="relative pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent" />
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{e.period}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">{e.degree}</h3>
                    <p className="mt-1 text-muted">
                      {[e.school, e.place].filter(Boolean).join(" — ")}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
              <ul className="divide-y divide-line border-y border-line">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 py-4">
                    {c.link ? (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="leading-snug underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent">
                        {c.name}
                      </a>
                    ) : (
                      <span className="leading-snug">{c.name}</span>
                    )}
                    {c.issuer && <span className="shrink-0 text-sm text-muted">{c.issuer}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* ------------------------------------------------------------- Contact */}
        <section id="contact" className="border-t border-line bg-ink py-24 text-paper sm:py-32">
          <div className="mx-auto max-w-page px-5 sm:px-8">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
                <span className="text-accent">06</span> / contact
              </p>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1] tracking-tight">
                {content.contactTitle} <span className="italic text-accent-soft">{content.contactHighlight}</span>?
              </h2>
              <p className="mt-6 max-w-xl text-lg text-paper/70">
                {content.contactText}
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-paper/15 sm:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="group bg-ink p-6 transition-colors hover:bg-paper/5 sm:p-8">
                <p className="text-sm text-paper/60">Email</p>
                <p className="mt-2 flex items-center gap-2 break-all text-lg font-medium group-hover:text-accent">
                  {profile.email}
                </p>
              </a>
              <a href={`tel:${profile.phoneHref}`} className="group bg-ink p-6 transition-colors hover:bg-paper/5 sm:p-8">
                <p className="text-sm text-paper/60">Phone</p>
                <p className="mt-2 text-lg font-medium group-hover:text-accent">{profile.phone}</p>
              </a>
              <div className="bg-ink p-6 sm:p-8">
                <p className="text-sm text-paper/60">Location</p>
                <p className="mt-2 text-lg font-medium">{profile.location}</p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}?subject=PFE%20internship%20opportunity`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Send an email <Arrow />
              </a>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium transition-colors hover:border-paper"
              >
                Download CV
              </a>
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium capitalize transition-colors hover:border-paper"
                >
                  {name === "github" ? "GitHub" : name === "linkedin" ? "LinkedIn" : name} <Arrow />
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="hover:text-ink">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
