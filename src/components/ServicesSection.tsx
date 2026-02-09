import { Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Hunting",
    subtitle: "Contratação Cirúrgica",
    description: "Identificamos e atraímos talentos especializados para posições críticas. Cada processo é personalizado, focado em encontrar o profissional ideal para a vaga e cultura da empresa.",
    features: ["Mapeamento de mercado", "Entrevistas técnicas", "Validação cultural"],
  },
  {
    icon: Users,
    title: "Alocação",
    subtitle: "Squads Completos",
    description: "Montamos equipes inteiras prontas para operar. Desde desenvolvedores até tech leads, formamos squads alinhados tecnicamente e culturalmente com seu projeto.",
    features: ["Time completo", "Ramp-up acelerado", "Gestão integrada"],
  },
  {
    icon: Zap,
    title: "On-Demand",
    subtitle: "Especialistas Fracionados",
    description: "Profissionais sênior como CTO, DevOps ou DBA disponíveis para demandas pontuais. Expertise de alto nível sem o custo fixo de uma contratação permanente.",
    features: ["CTO as a Service", "DevOps fracionado", "DBA especialista"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções Para Cada Necessidade
          </h2>
          <p className="text-lg text-muted-foreground">
            Três modelos flexíveis para atender desde contratações pontuais até a formação de times completos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative bg-card border-border/30 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/25 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className="text-sm text-accent font-medium mb-2">{service.subtitle}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;