"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from "motion/react";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Globe,
  Mail,
  MapPin,
  Moon,
  Phone,
  Smartphone,
  Sun,
  Workflow,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useApp } from "./providers";
import tasuLogo from "@/assets/logos/tasu.png";
import qoimaLogo from "@/assets/logos/qoima.png";
import imagLogo from "@/assets/logos/imag.png";
import damuLogo from "@/assets/logos/damu.png";
import nurLogo from "@/assets/logos/nur.svg";
import tokLogo from "@/assets/logos/tok.png";
import sozqorLogo from "@/assets/logos/sozqor.png";
import { CONTACT, LANGS, NAME, type Lang } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  const { lang } = useApp();
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  const fmt = new Intl.NumberFormat(lang === "en" ? "en-US" : "ru-RU").format(n);
  return (
    <span ref={ref} className="tabular-nums">
      {fmt}
      {suffix}
    </span>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["#work", t.nav.work],
    ["#experience", t.nav.experience],
    ["#skills", t.nav.skills],
    ["#contact", t.nav.contact],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled ? "border-line bg-bg/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,.5)] backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-fg text-[13px] font-bold text-bg">MZ</span>
          <span className="hidden text-sm sm:block">{NAME[lang]}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg px-3 py-1.5 text-sm text-fg-2 transition-colors hover:bg-card hover:text-fg">
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="relative flex rounded-xl border border-line bg-card p-0.5">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as Lang)}
                className={`relative z-10 rounded-lg px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  lang === l ? "text-bg" : "text-fg-2 hover:text-fg"
                }`}
                aria-pressed={lang === l}
              >
                {lang === l && (
                  <motion.span layoutId="lang-pill" className="absolute inset-0 -z-10 rounded-lg bg-fg" transition={{ type: "spring", stiffness: 500, damping: 35 }} />
                )}
                {l === "kk" ? "ҚАЗ" : l}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid size-9 place-items-center overflow-hidden rounded-xl border border-line bg-card text-fg-2 transition-colors hover:text-fg"
          >
            <motion.span key={theme} initial={{ rotate: -90, scale: 0.5, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} transition={{ duration: 0.4, ease }}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { t, lang } = useApp();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const spot = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, var(--glow), transparent 70%)`;

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="bg-grid absolute inset-0" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <motion.div style={{ y, opacity }} className="relative mx-auto w-full max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs text-fg-2 backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-lime" />
          </span>
          {t.hero.status}
        </motion.div>

        <motion.p
          key={`role-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase"
        >
          {t.hero.role}
        </motion.p>

        <h1 key={`h-${lang}`} className="max-w-5xl text-[clamp(2.6rem,7.5vw,6.6rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          {t.hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={`block ${i === 1 ? "text-gradient" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease, delay: 0.35 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          key={`lead-${lang}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-2 sm:text-xl"
        >
          {t.hero.lead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#work" className="group inline-flex items-center gap-2 rounded-xl bg-fg px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5">
            {t.hero.ctaPrimary}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-line-strong px-5 py-3 text-sm font-semibold transition-colors hover:bg-card">
            {t.hero.ctaSecondary}
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-fg-3">
            <MapPin size={14} /> {t.hero.location}
          </span>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {t.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.9 + i * 0.08 }}
              className="bg-bg/80 p-5 backdrop-blur sm:p-6"
            >
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-fg-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Services + marquee ---------------- */
function Services() {
  const { t } = useApp();
  const icons = [Smartphone, Globe, Bot, Workflow];
  const tech = ["Flutter", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Firebase", "React", "Dart", "Python", "Kaspi Pay", "Cloudflare", "Telegram Bot API", "Tailwind CSS", "Realtime"];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="mb-8 text-sm font-medium tracking-wider text-fg-3 uppercase">{t.services.title}</h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-card p-5 transition-colors hover:border-line-strong">
                  <div className="mb-8 grid size-10 place-items-center rounded-xl border border-line bg-card-strong text-accent transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-fg-2">{s.text}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="relative mt-16 overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {[...tech, ...tech].map((x, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm text-fg-2">
              {x}
              <span className="size-1 rounded-full bg-fg-3" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */
const VISUALS: Record<string, { from: string; to: string; logo: StaticImageData; tile?: string }> = {
  tasu: { from: "#1a1a1a", to: "#f5c400", logo: tasuLogo },
  qoima: { from: "#0b4d33", to: "#2fa36b", logo: qoimaLogo },
  imag: { from: "#1146d6", to: "#5f8dff", logo: imagLogo },
  damu: { from: "#0f2347", to: "#b58a3c", logo: damuLogo, tile: "#ffffff" },
  nur: { from: "#0b1830", to: "#7d1a35", logo: nurLogo },
  tok: { from: "#c2410c", to: "#ff8a1f", logo: tokLogo },
  sozqor: { from: "#5b5bd6", to: "#a35bd0", logo: sozqorLogo },
};

function ProjectCard({ p, i, big }: { p: ReturnType<typeof useApp>["t"]["work"]["projects"][number]; i: number; big?: boolean }) {
  const v = VISUALS[p.id];
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const shine = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(255,255,255,.10), transparent 60%)`;
  return (
    <Reveal delay={(i % 3) * 0.07} className={big ? "lg:col-span-2" : ""}>
      <motion.article
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          ry.set((px - 0.5) * 6);
          rx.set(-(py - 0.5) * 6);
          gx.set(px * 100);
          gy.set(py * 100);
        }}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card"
      >
        <motion.div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: shine }} />
        <div className={`relative overflow-hidden ${big ? "h-64 sm:h-72" : "h-48"}`} style={{ background: `linear-gradient(135deg, ${v.from}, ${v.to})` }}>
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="absolute -right-10 -bottom-10 size-56 rounded-full bg-white/15 blur-2xl transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute inset-0 grid place-items-center transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
            <div className={`overflow-hidden rounded-[28%] shadow-[0_24px_50px_-12px_rgba(0,0,0,.55)] ring-1 ring-white/20 ${big ? "size-32 sm:size-36" : "size-24"}`} style={{ background: v.tile }}>
              <Image src={v.logo} alt={`${p.name} logo`} className="size-full object-cover" sizes="144px" />
            </div>
          </div>
          {p.stores && (
            <div className="absolute top-4 left-4 flex gap-1.5">
              {["App Store", "Google Play"].map((s) => (
                <span key={s} className="rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-0.5 text-sm text-fg-3">{p.tag}</p>
            </div>
            <ArrowUpRight className="shrink-0 text-fg-3 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" size={20} />
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{p.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.metrics.map((m) => (
              <span key={m} className="rounded-lg border border-lime/30 bg-lime/10 px-2.5 py-1 text-xs font-semibold text-lime">
                {m}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-6 font-mono text-xs text-fg-3">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function Work() {
  const { t } = useApp();
  return (
    <section id="work" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead kicker={t.work.kicker} title={t.work.title} text={t.work.text} />
        <div className="grid gap-4 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3">
          {t.work.projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} big={p.id === "tasu" || p.id === "tok"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-accent uppercase">{kicker}</p>
      <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-fg-2">{text}</p>}
    </Reveal>
  );
}

/* ---------------- Experience ---------------- */
function Experience() {
  const { t } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="experience" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead kicker={t.experience.kicker} title={t.experience.title} />
        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-line sm:left-[calc(30%+7px)]" />
          <motion.div style={{ height: h }} className="absolute top-0 left-[7px] w-px bg-gradient-to-b from-accent to-lime sm:left-[calc(30%+7px)]" />
          <div className="space-y-12">
            {t.experience.items.map((e, i) => (
              <Reveal key={i}>
                <div className="relative grid gap-4 pl-10 sm:grid-cols-[30%_1fr] sm:gap-10 sm:pl-0">
                  <div className="sm:pr-10 sm:text-right">
                    <div className="text-sm font-medium text-fg-3">{e.period}</div>
                  </div>
                  <span className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-accent bg-bg sm:left-[30%]" />
                  <div className="sm:pl-10">
                    <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                    <p className="mt-1 text-sm text-fg-2">{e.org}</p>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-fg-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills + Education ---------------- */
function Skills() {
  const { t } = useApp();
  return (
    <section id="skills" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead kicker={t.skills.kicker} title={t.skills.title} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-card p-6">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
                  <Code2 size={16} className="text-accent" /> {g.name}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-lg border border-line bg-card-strong px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Reveal>
            <InfoCard title={t.education.title}>
              <div className="font-semibold">{t.education.uni}</div>
              <p className="mt-1 text-sm leading-relaxed text-fg-2">{t.education.degree}</p>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.06}>
            <InfoCard title={t.education.langsTitle}>
              <ul className="space-y-1 text-sm text-fg-2">
                {t.education.langs.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
          <Reveal delay={0.12}>
            <InfoCard title={t.education.extraTitle}>
              <p className="text-sm leading-relaxed text-fg-2">{t.education.extra}</p>
            </InfoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-2xl border border-line bg-card p-6">
      <div className="mb-3 text-xs font-semibold tracking-[0.14em] text-fg-3 uppercase">{title}</div>
      {children}
    </div>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const { t, lang } = useApp();
  const items = [
    { icon: Phone, label: t.contact.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: t.contact.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: GithubIcon, label: t.contact.github, value: CONTACT.github, href: `https://${CONTACT.github}` },
  ];
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/25 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-accent uppercase">{t.contact.kicker}</p>
          <h2 className="text-[clamp(2.4rem,6vw,4.8rem)] leading-[1] font-semibold tracking-[-0.04em]">{t.contact.title}</h2>
          <p className="mt-5 text-lg text-fg-2">{t.contact.text}</p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
          {items.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-line-strong"
              >
                <div className="flex items-center justify-between">
                  <Icon size={18} className="text-accent" />
                  <ArrowUpRight size={16} className="text-fg-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-6 text-xs text-fg-3">{label}</div>
                <div className="mt-0.5 font-medium break-all">{value}</div>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-fg-3">{t.contact.format}</p>
      </div>
      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-line px-5 pt-8 text-sm text-fg-3 sm:flex-row">
        <span>
          © 2026 {NAME[lang]}
        </span>
        <span>{t.footer}</span>
      </footer>
    </section>
  );
}

/* ---------------- Scroll progress ---------------- */
function Progress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-accent to-lime" />;
}

export default function Site() {
  return (
    <div className="noise">
      <Progress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0012 .5z" />
    </svg>
  );
}
