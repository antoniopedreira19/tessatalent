import { Building2, Clock, Search, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CaseSection = () => {
  return (
    // CORREÇÃO: Alterado de bg-card para bg-background para alternar com a seção anterior
    <section id="case" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Case iForense</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Inteligência Forense</h2>
          <p className="text-lg text-muted-foreground">
            Como entregamos velocidade sem comprometer a qualidade técnica em uma contratação crítica.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: O Desafio */}
          {/* CORREÇÃO: Cards agora usam bg-card/50 para contrastar com o fundo da seção */}
          <Card
            className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-accent/30 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">O Desafio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hunting urgente de desenvolvedor híbrido com requisitos técnicos muito específicos e SLA agressivo de
                menos de uma semana.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: A Nossa Abordagem */}
          <Card
            className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-accent/30 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <Search className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">A Nossa Abordagem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sourcing direcionado somado a uma triagem técnica rigorosa e validação comportamental aprofundada.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: O Resultado */}
          {/* Mantido um destaque sutil, mas baseada em card */}
          <Card
            className="bg-card backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 group animate-slide-up shadow-lg"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors shadow-glow">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">O Resultado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Profissional aprovado e onboarding concluído em{" "}
                <span className="text-foreground font-semibold">apenas 5 dias</span>. Velocidade sem comprometer a
                qualidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
