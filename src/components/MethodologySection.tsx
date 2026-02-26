import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { title: "Kick-off Aprofundado", description: "Reunião estratégica para entender desafios, cultura e expectativas do time." },
  { title: "Mapeamento de Cultura", description: "Análise detalhada do fit cultural necessário para sucesso na posição." },
  { title: "Definição de Perfil Ideal", description: "Construção do perfil técnico e comportamental necessário para o contexto." },
  { title: "Suporte ao Onboarding", description: "Apoio durante a integração para maximizar as chances de sucesso." },
  { title: "Métricas de Performance", description: "Acompanhamento de indicadores de adaptação e produtividade." },
  { title: "Rituais de Feedback", description: "Check-ins regulares com empresa e profissional." },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="bg-gradient-to-b from-[hsl(231,68%,42%)] to-[hsl(231,80%,11%)] py-12 md:py-16 px-4 md:px-6 text-white min-h-[auto] md:min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-4xl font-normal tracking-tight">
            Método <span className="font-bold">tessa</span> talent
          </h2>
          <p className="text-[15px] md:text-base text-gray-100 leading-relaxed font-medium">
            Dê adeus à falta de suporte, processos lentos, desalinhamento e custos
            ocultos. Nós garantimos fit cultural e técnico, reduzindo turnover com
            validação rigorosa.
          </p>
          <p className="text-[15px] md:text-base text-gray-100 font-medium">
            São seis passos divididos em consultoria e acompanhamento:
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20">
          <AnimatedSection className="w-full md:w-5/12 flex flex-col justify-between py-2" direction="left">
            <div>
              <h3 className="text-[26px] md:text-[32px] font-medium leading-[1.1] mb-4 md:mb-5">Consultoria<br />estratégica</h3>
              <p className="text-[15px] text-gray-200 leading-relaxed font-medium">
                Antes de iniciar o processo, mergulhamos no contexto do seu negócio para entender não apenas a vaga, mas o impacto que ela terá na organização.
              </p>
            </div>
            <div className="flex justify-center md:justify-start md:pl-16 my-10 opacity-60">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M4 8L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                <path d="M4 16L12 24L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                <path d="M4 24L12 32L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="1" />
              </svg>
            </div>
            <div>
              <h3 className="text-[26px] md:text-[32px] font-medium leading-[1.1] mb-4 md:mb-5">Acompanhamento<br />contínuo</h3>
              <p className="text-[15px] text-gray-200 leading-relaxed font-medium">
                Nosso trabalho não termina na contratação. Mantemos rituais de feedback e métricas para garantir o sucesso do profissional na nova posição.
              </p>
            </div>
          </AnimatedSection>

          <div className="w-full md:w-7/12 relative">
            <div className="absolute left-[11px] top-2 w-px bg-white/30 z-0 hidden md:block" style={{ height: 'calc(42% - 8px)' }} />
            <div className="absolute left-[11px] bottom-4 w-px bg-white/30 z-0 hidden md:block" style={{ height: 'calc(42% - 8px)' }} />
            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div key={index}>
                  {/* Gap between the two groups (after step 3) */}
                  {index === 3 && <div className="h-8 md:h-12" />}
                  <motion.div
                    className="flex items-start gap-6 relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#e5e7eb] flex-shrink-0 mt-1 relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                    {index !== steps.length - 1 && index !== 2 && (
                      <div className="absolute left-[11px] top-7 bottom-[-2rem] w-px bg-white/30 z-0 md:hidden" />
                    )}
                    {index === 2 && (
                      <div className="absolute left-[11px] top-7 bottom-[-4.5rem] md:bottom-[-5.5rem] w-px bg-white/30 z-0 md:hidden" />
                    )}
                    <div>
                      <h4 className="font-bold text-[15px] mb-1.5">{step.title}</h4>
                      <p className="text-[14px] text-gray-200 leading-snug">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
