import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import TerminalCard from "@/components/TerminalCard";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/1752184730238.jpg";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
} from "lucide-react";

/* Brand-accurate WhatsApp glyph (lucide doesn't ship one) */
const WhatsAppIcon = ({ className = "", color }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color ?? "currentColor"}
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

/* ─────────────────────────  DATA  ───────────────────────── */

const projects = [
  {
    tag: "Full-Stack · NGO Client · Live",
    title: "Eagle's Wings Empowerment Platform",
    description:
      "Production platform for a cross-border humanitarian organization operating between Nigeria and Europe. Architected the complete backend from scratch on a stateless frontend — a 24-table headless CMS schema, 8 Supabase Edge Functions, role-based access control across 3 permission levels, and a Paystack donation pipeline. Zero custom server — all backend logic runs serverless.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "RLS",
      "Paystack",
      "Vercel",
    ],
    live: "https://eagleswing.vercel.app",
    repo: "https://github.com/Pinness/eagle-s-wings-bridge",
    liveBadge: true,
  },
  {
    tag: "Backend · API · Security",
    title: "Async JWT Authentication Service",
    description:
      "A microservice-ready, asynchronous user authentication backend built with FastAPI and MySQL. Implements the full auth lifecycle — secure registration with duplicate checks, bcrypt password hashing, JWT access and refresh token issuance, and Alembic-managed database migrations. Designed to be consumed by frontend apps or other microservices as a standalone identity layer.",
    stack: [
      "FastAPI",
      "Python",
      "MySQL",
      "SQLModel",
      "asyncmy",
      "JWT",
      "bcrypt",
      "Alembic",
      "Pydantic",
    ],
    repo: "https://github.com/Pinness/UserAuthentication_fastapi",
    note: "Async-first architecture · Swagger UI docs included · Production security practices",
  },
  {
    tag: "Frontend · Commercial Client",
    title: "Dexgen Electricals — Business Web Platform",
    description:
      "Commercial website for an electrical services business. Designed and built the complete frontend to establish the company's digital presence, communicate services clearly, and convert visitors to leads. A real client deliverable — not a demo project.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    repo: "https://github.com/Pinness/DexgenElectricals_frontend",
    note: "Client deployment",
  },
  {
    tag: "Full-Stack · Public Health · Social Impact",
    title: "Health Quest — HIV Education Quiz Platform",
    description:
      "An interactive web application built to educate users on HIV through quiz-based learning across 5 categories: Basics, Transmission, Prevention, Treatment, and Community Services. Built with a Flask backend, MySQL database, and server-rendered templates. A project built for public health impact — not just to demonstrate technical skill.",
    stack: ["Python", "Flask", "MySQL", "SQLAlchemy", "HTML", "CSS", "SCSS"],
    repo: "https://github.com/Pinness/Health_Quest",
  },
  {
    tag: "Backend · Open Source · Collaboration",
    title: "jechspace — Booking System Module",
    description:
      "Contributed the booking system module to jechspace — an open-source project built by a development team. Designed and implemented the reservation flow, backend booking endpoints, and availability logic within an existing codebase. Demonstrates the ability to onboard into unfamiliar code, collaborate with other engineers, and deliver a specific, scoped feature end-to-end.",
    stack: ["Python", "REST APIs", "Booking Logic", "Git Collaboration"],
    repo: "https://github.com/jechspace",
    note: "Team contribution · Feature ownership within collaborative codebase",
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "Flask", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    label: "Frontend",
    items: ["React", "Vite", "Tailwind CSS", "Next.js basics", "SCSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase", "SQLModel", "SQLAlchemy", "Alembic"],
  },
  {
    label: "Infra & DevOps",
    items: ["Vercel", "Supabase Edge Functions", "RLS", "Git", "GitHub Actions"],
  },
  {
    label: "Practice",
    items: [
      "System design",
      "Auth architecture",
      "API security",
      "Code reviews",
      "Mentorship",
    ],
  },
];

const quickFacts = [
  { icon: "🎓", text: "BSc Economics → Software Engineering" },
  { icon: "🏢", text: "Founder, PinessTech Studio" },
  { icon: "🌍", text: "Nigeria · Remote-First" },
  { icon: "🔧", text: "Backend-Focused · Full-Stack Capable" },
  { icon: "📦", text: "5 Production Projects Shipped" },
  { icon: "🤝", text: "Available for Freelance & Contract" },
];

/* ─────────────────────────  PAGE  ───────────────────────── */

const Home = () => {
  const location = useLocation();

  // Honor /#section navigation from other routes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
    <PageLayout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative max-w-[1100px] w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-7">
            <p className="section-eyebrow">
              <span className="text-success">●</span> Available for work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight">
              Happiness Adam
            </h1>
            <p className="text-lg sm:text-xl text-foreground/90 font-medium">
              Full-Stack Software Engineer{" "}
              <span className="text-muted-foreground">&</span> Backend Systems
              Builder
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              I build production-grade systems — not just websites. Backend
              architectures, authentication services, and full-stack platforms
              for real organizations and real users.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="gap-2 group"
              >
                See selected work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in touch
              </Button>
            </div>
            <div className="flex items-center gap-5 pt-3 text-muted-foreground">
              <a
                href="https://github.com/Pinness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pinessjw-adam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/LadyPiness"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: profile + terminal */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" aria-hidden="true" />
              <img
                src={profileImage}
                alt="Happiness Adam — Full-Stack Software Engineer"
                loading="eager"
                className="relative w-40 h-40 lg:w-[280px] lg:h-[280px] rounded-full object-cover ring-2 ring-primary/70 ring-offset-4 ring-offset-background shadow-xl"
              />
            </div>
            <TerminalCard />
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="section-eyebrow">ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              The Engineer Behind the Work.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base" style={{ lineHeight: 1.7 }}>
              <p>
                My career began with a BSc in Economics, where I developed strong
                analytical thinking, problem-solving ability, and the skill to
                break down complex ideas into clear, structured insights.
              </p>
              <p>
                My curiosity in tech eventually led me into Software Engineering,
                where I began applying that same analytical thinking and
                data-driven approach to designing and building real software
                products. I've since built backend systems, login and security
                features, and full web applications for real clients and users.
              </p>
              <p>
                I founded PinessTech to build practical software products and
                help engineers understand the systems behind the tools they use.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="section-eyebrow mb-4">quick facts</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {quickFacts.map((f) => (
                  <li key={f.text} className="flex items-start gap-3 leading-relaxed">
                    <span aria-hidden="true" className="text-base leading-none mt-0.5">
                      {f.icon}
                    </span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-border/60">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-mono text-primary no-underline hover:underline inline-flex items-center"
                >
                  → View my projects
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-12">
            <p className="section-eyebrow">Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Production systems built for real clients and real users.
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-lg border border-border bg-card p-6 flex flex-col gap-4 transition-colors hover:border-primary/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </p>
                  {p.liveBadge && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--success))] border border-[hsl(var(--success))]/40 rounded-full px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))] animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                {p.note && (
                  <p className="text-xs text-muted-foreground/80 italic">
                    {p.note}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-3 mt-auto border-t border-border/60">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live site
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-24 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-10">
            <p className="section-eyebrow">Technical Skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              What I build with — grouped by role, not alphabet.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((g) => (
              <div
                key={g.label}
                className="rounded-lg border border-border bg-card p-5"
              >
                <p className="text-[11px] font-mono uppercase tracking-wider text-primary mb-3">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PINESSTECH ─── */}
      <section id="pinesstech" className="py-24 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="section-eyebrow">The Studio</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              PinessTech — software products & engineering mentorship.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              PinessTech is a small software engineering studio I founded to
              build digital products and teach developers how real systems
              work. We design backend architectures, ship full-stack platforms,
              and break down the engineering behind them — so the next
              generation of builders understands the <em>why</em>, not just
              the <em>how</em>.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Work with the studio
              </Button>
              <a
                href="https://chat.whatsapp.com/L8k7rTVTky66Bzev3KjVK0?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 h-10 rounded-md border border-border text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Join the community ↗
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg border border-border bg-card p-10 w-full max-w-sm text-center">
              <div className="font-mono text-4xl font-bold tracking-tight">
                <span className="text-primary">Piness</span>
                <span className="text-foreground">Tech</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mt-3">
                build · ship · teach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="mb-10">
            <p className="section-eyebrow">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Let's build something.
            </h2>
            <p className="text-muted-foreground mt-3">
              Open to freelance projects, contract work, and full-time roles.
              Response time: within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <form
              action="mailto:hello@pinesstech.com"
              method="post"
              encType="text/plain"
              className="rounded-lg border border-border bg-card p-6 space-y-4"
            >
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  What are you building?
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>

            {/* Direct contact */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-wider text-primary">
                  Direct
                </p>
                <a
                  href="mailto:adamhappinessjw@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  adamhappinessjw@gmail.com
                </a>
                <a
                  href="https://github.com/Pinness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                  github.com/Pinness
                </a>
                <a
                  href="https://x.com/LadyPiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                  @LadyPiness
                </a>
                <a
                  href="https://www.linkedin.com/in/pinessjw-adam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  linkedin.com/in/pinessjw-adam
                </a>
              </div>

              <div className="rounded-lg border border-[hsl(var(--success))]/40 bg-[hsl(var(--success))]/5 p-5 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--success))] mt-1.5 animate-pulse" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">
                    Currently available
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    Taking on new freelance and contract work for Q1.
                    Full-time opportunities also welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
