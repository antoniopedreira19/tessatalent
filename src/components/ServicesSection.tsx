import serviceHunting from "@/assets/service-hunting.svg";
import serviceAlocacao from "@/assets/service-alocacao.svg";
import serviceOndemand from "@/assets/service-ondemand.svg";

const services = [
  {
    image: serviceHunting,
    title: "Hunting",
    description: "Identificamos e atraímos talentos especializados para posições críticas com processos personalizados.",
  },
  {
    image: serviceAlocacao,
    title: "Alocação",
    description: "Montamos squads completos, alinhados tecnicamente e culturalmente ao seu projeto.",
  },
  {
    image: serviceOndemand,
    title: "As a Service",
    description: "Profissionais sênior como CTO, DevOps ou DBA disponíveis para demandas pontuais.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-blue-strong">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mais cuidado. Mais performance.
          </h2>
          <p className="text-white/80 text-lg mb-2">
            Combinamos conhecimento técnico com sensibilidade humana para entregar resultados reais.
          </p>
          <p className="text-white/70 text-base font-medium mt-6">
            Tudo com 3 modelos flexíveis:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
