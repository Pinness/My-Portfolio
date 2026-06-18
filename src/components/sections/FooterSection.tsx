import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Pinness", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pinessjw-adam", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/LadyPiness", label: "X / Twitter" },
];

const FooterSection = () => (
  <footer className="border-t border-border py-10 mt-12">
    <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Happiness Adam · Built with intent.
      </p>
      <div className="flex items-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default FooterSection;
