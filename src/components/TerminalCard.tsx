const TerminalCard = () => (
  <div className="w-full max-w-md rounded-lg border border-border bg-card shadow-card overflow-hidden">
    {/* window chrome */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      <span className="ml-3 text-[11px] font-mono text-muted-foreground">
        engineer.ts
      </span>
    </div>

    <pre className="px-5 py-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
      <code>
        <span className="text-muted-foreground">{`// what I actually build`}</span>{"\n"}
        <span className="text-[#ff7b72]">const</span>{" "}
        <span className="text-[#79c0ff]">engineer</span>{" "}={" "}{"{"}
        {"\n"}
        {"  "}<span className="text-[#7ee787]">name</span>:{" "}
        <span className="text-[#a5d6ff]">'Happiness Adam'</span>,{"\n"}
        {"  "}<span className="text-[#7ee787]">role</span>:{" "}
        <span className="text-[#a5d6ff]">'Full-Stack Engineer'</span>,{"\n"}
        {"  "}<span className="text-[#7ee787]">focus</span>: [{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'backend systems'</span>,{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'auth & APIs'</span>,{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'scalable web apps'</span>,{"\n"}
        {"  "}],{"\n"}
        {"  "}<span className="text-[#7ee787]">stack</span>: [{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'Python · FastAPI · Django'</span>,{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'TypeScript · React · Vite'</span>,{"\n"}
        {"    "}<span className="text-[#a5d6ff]">'PostgreSQL · MySQL · Supabase'</span>,{"\n"}
        {"  "}],{"\n"}
        {"  "}<span className="text-[#7ee787]">ships</span>:{" "}
        <span className="text-[#79c0ff]">true</span>,{"\n"}
        {"  "}<span className="text-[#7ee787]">available</span>:{" "}
        <span className="text-[#79c0ff]">true</span>,{"\n"}
        {"}"};{"\n"}
        {"\n"}
        <span className="text-muted-foreground">{`// production-grade. not just demos.`}</span>
      </code>
    </pre>
  </div>
);

export default TerminalCard;
