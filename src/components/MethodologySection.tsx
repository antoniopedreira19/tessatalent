import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { RefreshCw } from "lucide-react";

const consultoriaSteps = [
  { title: "Kick-off Aprofundado", description: "Reunião estratégica para entender desafios, cultura e expectativas do time." },
  { title: "Alinhamento de perfil", description: "Definição clara do perfil técnico, comportamental e cultural." },
  { title: "Hunting", description: "Busca ativa e curada dos talentos mais aderentes ao contexto." },
];

const acompanhamentoSteps = [
  { title: "Avaliação do parecer", description: "Avaliação técnica e comportamental com recomendação consultiva." },
  { title: "Entrevistas e validação", description: "Entrevistas conduzidas pelo cliente para decisão final." },
  { title: "Onboarding & Acompanhamento", description: "Acompanhamento da entrada e adaptação do profissional." },
];

const TimelineStep = ({ step, index, totalOffset }: { step: { title: string; description: string }; index: number; totalOffset: number }) => (
  <motion.div
    className="flex items-start gap-5 relative"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: totalOffset * 0.1, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="flex flex-col items-center flex-shrink-0">
      <div className="w-[14px] h-[14px] rounded-full bg-white/90 relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
    </div>
    <div className="-mt-1">
      <h4 className="font-bold text-[15px] md:text-base mb-1">{step.title}</h4>
      <p className="text-[13px] md:text-[14px] text-white/70 leading-snug">{step.description}</p>
    </div>
  </motion.div>
);

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-gradient-to-b from-[hsl(231,68%,42%)] to-[hsl(231,80%,11%)] py-14 md:py-20 px-4 md:px-6 text-white">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-normal tracking-tight">
            Método <span className="font-bold">tessa</span>
          </h2>
          <p className="text-[14px] md:text-base text-white/80 leading-relaxed">
            Dê adeus à falta de suporte, processos lentos, desalinhamento e custos
            ocultos. Nós garantimos fit cultural e técnico, reduzindo turnover com
            validação rigorosa.
          </p>
          <p className="text-[14px] md:text-base text-white/80">
            São seis passos divididos em consultoria e acompanhamento:
          </p>
        </AnimatedSection>

        {/* Content: Left labels + Right timeline */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Left Column */}
          <AnimatedSection className="w-full md:w-5/12 flex flex-col" direction="left">
            {/* Consultoria */}
            <div className="mb-8 md:mb-0 md:flex-1">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] mb-4">
                Consultoria<br />estratégica
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                Antes de iniciar o processo, mergulhamos no contexto do seu negócio para entender não apenas a vaga, mas o impacto que ela terá na organização.
              </p>
            </div>

            {/* Transition icon */}
            <div className="flex justify-center md:justify-start md:pl-12 my-8 md:my-10">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <RefreshCw className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </div>
            </div>

            {/* Acompanhamento */}
            <div className="md:flex-1">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] mb-4">
                Acompanhamento<br />contínuo
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                Nosso trabalho não termina na contratação. Mantemos rituais de feedback e métricas de performance para garantir o sucesso do profissional na nova posição.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column - Timeline */}
          <div className="w-full md:w-7/12 relative">
            {/* Vertical line for consultoria group */}
            <div className="absolute left-[6px] top-[10px] w-[2px] bg-white/25 z-0" style={{ height: 'calc(50% - 40px)' }} />
            {/* Vertical line for acompanhamento group */}
            <div className="absolute left-[6px] bottom-[10px] w-[2px] bg-white/25 z-0" style={{ height: 'calc(50% - 40px)' }} />

            <div className="flex flex-col h-full">
              {/* Consultoria steps */}
              <div className="space-y-7 md:space-y-8 flex-1">
                {consultoriaSteps.map((step, index) => (
                  <TimelineStep key={index} step={step} index={index} totalOffset={index} />
                ))}
              </div>

              {/* Gap between groups */}
              <div className="h-10 md:h-14" />

              {/* Acompanhamento steps */}
              <div className="space-y-7 md:space-y-8 flex-1">
                {acompanhamentoSteps.map((step, index) => (
                  <TimelineStep key={index} step={step} index={index} totalOffset={index + 3} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
