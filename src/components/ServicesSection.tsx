import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    image: "/images/service-hunting-v2.svg",
    title: "Hunting",
    description:
      "Identificamos e atraímos talentos para posições críticas ou não. Cada processo é personalizado para encontrar o profissional ideal para a vaga e cultura da empresa.",
  },
  {
    image: "/images/service-alocacao-v2.png",
    title: "Alocação",
    description:
      "Montamos equipes inteiras prontas para operar. Desde desenvolvedores até tech leads, formamos times alinhados tecnicamente e culturalmente com seu projeto.",
  },
  {
    image: "/images/service-ondemand-v2.svg",
    title: "As a Service",
    description:
      "Profissionais sênior como CTO, DevOps ou DBA disponíveis para demandas pontuais. Expertise de alto nível sem o custo fixo de uma contratação permanente.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[hsl(231,68%,40%)] to-[hsl(231,80%,16%)] py-12 md:py-16 px-4 md:px-8 text-white min-h-[auto] md:min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedSection className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            Mais cuidado. Mais performance.
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-[15px] md:text-base text-blue-50 font-medium">
            <p>
              Somos vibrados em formar times de tecnologia que crescem de forma sustentável e com humanidade orientada a
              resultado.
            </p>
            <p>
              Reduzimos turnover, desalinhamentos e desperdício financeiro com acompanhamento antes, durante e depois da
              contratação.
            </p>
          </div>
          <h3 className="text-xl md:text-3xl font-bold mt-8 md:mt-10 tracking-tight">Tudo com 3 modelos flexíveis:</h3>
        </AnimatedSection>

        {/* Adicionado items-stretch para forçar todas as colunas a terem a mesma altura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative rounded-2xl overflow-hidden h-[540px] md:h-[640px] group transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Full-bleed image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay - dark at bottom */}
              {/* Text at the bottom with blurred dark background */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 backdrop-blur-md bg-black/50">
                <h4 className="text-2xl md:text-3xl font-bold mb-3 text-white">{service.title}</h4>
                <p className="text-[15px] md:text-base text-gray-200 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
