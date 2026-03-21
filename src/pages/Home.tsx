import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/1752184730238.jpg";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Layout,
  Server,
  Rocket,
  Target,
  Youtube,
  MessageCircle,
  Github,
  Shield,
  Heart,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

const featuredProjects = [
  {
    title: "Dexgen Engineering Solutions",
    subtitle: "Full-Stack Business Platform",
    description:
      "A complete digital platform for an engineering services company — professional web presence with CMS, admin auth, and SEO optimization.",
    tech: ["React", "TypeScript", "Supabase", "Vercel"],
    icon: Globe,
  },
  {
    title: "HealthQuest",
    subtitle: "Interactive Public Health Quiz Platform",
    description:
      "Gamified HIV and public health education — dynamic quiz engine with progress tracking, scoring, and achievement systems.",
    tech: ["Python", "Flask", "MySQL", "SQLAlchemy"],
    icon: Heart,
  },
  {
    title: "AI Character Conversation Platform",
    subtitle: "FastAPI AI Backend Architecture",
    description:
      "A pure API backend for AI-powered character conversations — clean service composition with LLM stub mode for offline development.",
    tech: ["Python", "FastAPI", "Pydantic", "Groq API"],
    icon: MessageCircle,
  },
];

const serviceSummary = [
  {
    icon: Globe,
    title: "Modern Websites",
    desc: "High-performance business websites and responsive platforms",
  },
  {
    icon: Layout,
    title: "Web Applications",
    desc: "Dashboards, SaaS platforms, and custom digital tools",
  },
  {
    icon: Server,
    title: "Backend Systems",
    desc: "Secure APIs, authentication architecture, and scalable backends",
  },
  {
    icon: Target,
    title: "Landing Pages",
    desc: "High-conversion pages for product launches and campaigns",
  },
  {
    icon: Rocket,
    title: "Startup MVPs",
    desc: "Rapid product development with production-grade architecture",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    desc: "Authentication systems, encryption, and data protection",
  },
];

const Home = () => (
  <PageLayout>
    {/* ─── Hero ─── */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/3 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <p className="text-sm font-display text-primary tracking-widest uppercase animate-fade-in">
              PinessTech Studio
            </p>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-fade-in">
              I Build Backend Systems That Scale
              <br />
              and Frontend Experiences
              <br />
              <span className="text-gradient">That Sell</span>
            </h1>

            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              You focus on the vision; I'll handle the engineering. From secure
              backend architecture to seamless frontend interfaces, I build
              high-performance websites and digital products that scale with
              your business.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Button size="lg" asChild className="font-display text-base gap-2 group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* ✅ Added: About me CTA (inserted between existing CTAs) */}
              <Button variant="outline" size="lg" asChild className="font-display text-base">
                <Link to="/about">About me</Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="font-display text-base">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://chat.whatsapp.com/L8k7rTVTky66Bzev3KjVK0?mode=gi_t",
                    "_blank"
                  )
                }
                className="font-display text-base text-primary hover:text-primary"
              >
                Join the Mentorship Community
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="shrink-0 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-accent rounded-2xl opacity-20 blur group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src={avatarImg}
                alt="Happiness Adam – Founder of PinessTech Studio"
                className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-[420px] lg:h-[480px] rounded-2xl object-cover shadow-card"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("what-i-build")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>

    {/* ✅ Added: Personal intro strip (immediately below hero) */}
    <section className="mt-12 px-4">
  <div className="max-w-4xl mx-auto text-center space-y-4">
    <Link to="/about" className="text-primary font-medium hover:underline">
      Learn more about me →
    </Link>
  </div>
</section>
    {/* ─── What I Build ─── */}
    <section id="what-i-build" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              What I Build
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Digital Platforms That Help Businesses{" "}
              <span className="text-gradient">Launch, Operate & Grow</span>
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-14">
            <p>
              Through PinessTech Studio, I design and build digital platforms
              that help businesses launch, operate, and grow online with
              confidence.
            </p>
            <p>
              But building software isn't just about writing code. It's about
              understanding what a business actually needs from its technology
              — speed, reliability, security, and the ability to grow without
              breaking the system.
            </p>
            <p>
              Every product I build is engineered with a strong focus on clean
              architecture, performance, scalability, and long-term
              maintainability — so the platform doesn't just launch
              successfully, it continues to support the business as it grows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceSummary.map((s) => (
              <div key={s.title} className="group glass glass-hover rounded-xl p-5 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild className="font-display gap-2">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Featured Projects ─── */}
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-display text-primary tracking-widest uppercase mb-2">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Engineering Stories
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Real projects, real problems, real engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.title} className="group glass glass-hover rounded-xl p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-xs font-display text-primary">{p.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="font-display gap-2 group">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Mentorship Preview ─── */}
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-sm font-display text-primary tracking-widest uppercase">
            Learn & Grow
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Mentorship & Engineering Insights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            PinessTech Studio isn't just about building — it's about helping
            people understand the technology they use every day. I share
            engineering insights, break down real systems, and mentor aspiring
            developers through practical lessons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://youtube.com/@pinesstech?si=rpPNoK21VqtXP2rB",
                  "_blank"
                )
              }
              className="font-display text-base gap-2"
            >
              <Youtube className="w-5 h-5" />
              Follow on YouTube
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/L8k7rTVTky66Bzev3KjVK0?mode=gi_t",
                  "_blank"
                )
              }
              className="font-display text-base gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join the Community
            </Button>
            <Button variant="outline" size="lg" asChild className="font-display text-base gap-2">
              <Link to="/mentorship">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Final CTA ─── */}
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Ready to build something{" "}
            <span className="text-gradient">that actually works?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            If you're building a startup, business platform, or digital product
            and want it engineered properly — not just thrown together —
            PinessTech Studio can help you build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="font-display text-base gap-2 group">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="font-display text-base gap-2">
              <Link to="/contact">Discuss Your Idea</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Home;
