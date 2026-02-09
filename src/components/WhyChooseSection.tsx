import { Cpu, Settings, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Expertise em Tech",
    description: "Profundo conhecimento do mercado de tecnologia e das suas dinâmicas.",
  },
  {
    icon: Settings,
    title: "Customização Total",
    description: "Cada solução calibrada ao contexto real e cultura do seu negócio.",
  },
  {
    icon: Handshake,
    title: "Parceria Contínua",
    description: "Advisory estratégico e acompanhamento que vão além da contratação.",
  },
];

const WhyChooseSection = () => {
  return (
    // Fundo #0B1D3D (bg-card)
    <section id="why-choose" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Por Que Escolher a TESSA?
          </h2>
        </div>

        {/* Reasons Grid - Ajustado para 3 colunas para acomodar os 3 itens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              // bg-background/50 para contraste sutil sobre o bg-card
              className="group p-6 rounded-2xl bg-background/50 border border-border/30 hover:border-accent/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
