import { Clock, UserX, DollarSign, HeartOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Clock,
    title: "Processos Lentos",
    description: "Recrutamento genérico e demorado que atrasa projetos críticos e aumenta o custo de oportunidade.",
  },
  {
    icon: UserX,
    title: "Desalinhamento",
    description: "Profissionais que não entendem a cultura da empresa, gerando conflitos e baixa produtividade.",
  },
  {
    icon: DollarSign,
    title: "Custos Ocultos",
    description: "Alto turnover e desperdício financeiro com contratações que não dão certo nos primeiros meses.",
  },
  {
    icon: HeartOff,
    title: "Falta de Suporte",
    description: "Sem acompanhamento pós-contratação, deixando empresa e profissional à deriva no onboarding.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card connection-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">O Problema</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            O Desafio do Recrutamento Tradicional
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas de tecnologia enfrentam obstáculos que impedem o crescimento e drenam recursos valiosos.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className="group bg-background/50 backdrop-blur-sm border-border/30 hover:border-destructive/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center mb-5 group-hover:bg-destructive/30 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;