import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { about, certificates, contacts, education, exploring, profile, projects, skills } from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jackson J — AI & Machine Learning Student" },
      { name: "description", content: "Portfolio of Jackson J, B.Sc. Artificial Intelligence and Machine Learning student: projects, skills and certificates." },
      { property: "og:title", content: "Jackson J — AI & Machine Learning Student" },
      { property: "og:description", content: "Curious mind. Building what's next." },
    ],
  }),
  component: Index,
});

const nav = [
  ["about", "About"], ["education", "Education"], ["skills", "Skills"], ["projects", "Projects"],
  ["certificates", "Certificates"], ["contact", "Contact"],
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Section({ id, num, label, children }: { id: string; num: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12">
        <Reveal className="md:col-span-3"><p className="eyebrow">{num} — {label}</p></Reveal>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

function Index() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % certificates.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + certificates.length) % certificates.length);
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);

  const cert = open !== null ? certificates[open] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl italic text-primary">Jackson J.</a>
          <nav className="hidden gap-8 md:flex" aria-label="Main">
            {nav.map(([id, l]) => <a key={id} href={`#${id}`} className="link-underline text-sm">{l}</a>)}
          </nav>
          <button className="md:hidden text-sm" aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>
            {menu ? "Close" : "Menu"}
          </button>
        </div>
        {menu && (
          <nav id="mobile-nav" className="border-t border-border px-6 py-4 md:hidden" aria-label="Mobile">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)} className="block py-3 font-display text-2xl">{l}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-24 pt-16 md:grid-cols-12 md:pt-28">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-8">{profile.role}</p>
            <h1 className="text-6xl leading-[0.95] text-primary md:text-8xl">{profile.name}</h1>
            <p className="mt-6 font-display text-2xl italic md:text-3xl">{profile.tagline}</p>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className={`${btn} bg-primary text-primary-foreground hover:-translate-y-0.5`}>Explore My Work →</a>
              <a href="#contact" className={`${btn} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`}>Contact Me</a>
            </div>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-sage">
              {profile.portrait ? (
                <img src={profile.portrait} alt="Portrait of Jackson J" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-end justify-center pb-10 eyebrow">Portrait</div>
              )}
            </div>
          </Reveal>
        </section>

        <Section id="about" num="01" label="About">
          <Reveal>
            <h2 className="max-w-2xl text-4xl leading-tight md:text-5xl">Learning out loud, one model at a time.</h2>
            <div className="mt-10 grid gap-6 text-muted-foreground leading-relaxed md:grid-cols-2">
              {about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Reveal>
        </Section>

        <Section id="education" num="02" label="Education">
          {education.map((e) => (
            <Reveal key={e.title} className="grid gap-2 border-b border-border py-8 first:pt-0 md:grid-cols-3">
              <h3 className="text-2xl md:col-span-2">{e.title}<span className="mt-1 block font-sans text-sm text-muted-foreground">{e.place}</span></h3>
              <p className="eyebrow md:text-right">{e.status}</p>
            </Reveal>
          ))}
        </Section>

        <Section id="skills" num="03" label="Skills">
          <div className="grid gap-12 md:grid-cols-2">
            {Object.entries(skills).map(([cat, list]) => (
              <Reveal key={cat}>
                <h3 className="text-2xl">{cat}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {list.map((s, i) => <li key={i} className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:bg-sage">{s}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects" num="04" label="Projects">
          <div className="space-y-20">
            {projects.map((p, i) => (
              <Reveal key={i} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="group aspect-[4/3] overflow-hidden bg-sage">
                  {p.image ? <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    : <div className="flex h-full items-center justify-center eyebrow">Project image</div>}
                </div>
                <div>
                  <p className="eyebrow">0{i + 1}</p>
                  <h3 className="mt-3 text-3xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
                  <p className="mt-4 text-sm">{p.tech.join(" · ")}</p>
                  <div className="mt-6 flex gap-6 text-sm font-medium text-primary">
                    <a href={p.github} className="link-underline">GitHub ↗</a>
                    <a href={p.demo} className="link-underline">Live demo ↗</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="certificates" num="05" label="Certificates">
          <Reveal><h2 className="mb-12 text-4xl md:text-5xl">Things I've completed.</h2></Reveal>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {certificates.map((c, i) => (
              <Reveal key={c.title} className={i === 0 ? "sm:col-span-2" : ""}>
                <button onClick={() => setOpen(i)} className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" aria-label={`View ${c.title} certificate`}>
                  <div className="overflow-hidden border border-border bg-card p-3 transition-shadow group-hover:shadow-xl">
                    <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                  </div>
                  <h3 className="mt-5 text-2xl">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.org}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </Section>

        <section className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <p className="eyebrow !text-primary-foreground/60">06 — Currently exploring</p>
            <ul className="mt-10">
              {exploring.map((x) => (
                <Reveal key={x}><li className="border-b border-primary-foreground/20 py-5 font-display text-4xl italic transition-transform hover:translate-x-3 md:text-6xl">{x}</li></Reveal>
              ))}
            </ul>
          </div>
        </section>

        <Section id="contact" num="07" label="Contact">
          <Reveal><h2 className="text-4xl md:text-6xl">Let's talk.</h2></Reveal>
          <div className="mt-12">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} className="group flex items-baseline justify-between border-b border-border py-5 transition-colors hover:text-primary">
                <span className="eyebrow">{c.label}</span>
                <span className="font-display text-xl md:text-2xl">{c.value} <span className="inline-block transition-transform group-hover:translate-x-1">↗</span></span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        Designed &amp; built with curiosity by Jackson J. © {new Date().getFullYear()}
      </footer>

      {scrolled && (
        <a href="#top" aria-label="Back to top" className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-1">↑</a>
      )}

      {cert && (
        <div role="dialog" aria-modal="true" aria-label={cert.title} className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4" onClick={() => setOpen(null)}>
          <div className="flex max-h-full w-full max-w-5xl flex-col bg-background" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
              <div><p className="font-display text-lg">{cert.title}</p><p className="text-xs text-muted-foreground">{cert.org}</p></div>
              <div className="flex gap-4 text-sm">
                {cert.file && <a href={cert.file} download target="_blank" rel="noreferrer" className="link-underline text-primary">Download</a>}
                <button autoFocus onClick={() => setOpen(null)} className="link-underline">Close ✕</button>
              </div>
            </div>
            <div className="overflow-auto p-4"><img src={cert.image} alt={`${cert.title} certificate`} className="mx-auto max-h-[78vh] w-auto object-contain" /></div>
          </div>
        </div>
      )}
    </div>
  );
}
