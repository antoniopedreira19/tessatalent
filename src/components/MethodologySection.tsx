import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();

  const consultoriaSteps = [
    { title: t("method.step1.title"), description: t("method.step1.desc") },
    { title: t("method.step2.title"), description: t("method.step2.desc") },
    { title: t("method.step3.title"), description: t("method.step3.desc") },
  ];

  const acompanhamentoSteps = [
    { title: t("method.step4.title"), description: t("method.step4.desc") },
    { title: t("method.step5.title"), description: t("method.step5.desc") },
    { title: t("method.step6.title"), description: t("method.step6.desc") },
  ];

  return (
    <section id="methodology" className="bg-gradient-to-b from-[hsl(231,68%,42%)] to-[hsl(231,80%,11%)] py-14 md:py-20 px-4 md:px-6 text-white">
      <div className="max-w-5xl mx-auto w-full">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-normal tracking-tight">
            Método <span className="font-bold">tessa</span>
          </h2>
          <p className="text-[14px] md:text-base text-white/80 leading-relaxed">
            {t("method.p1")}
          </p>
          <p className="text-[14px] md:text-base text-white/80">
            {t("method.p2")}
          </p>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <AnimatedSection className="w-full md:w-5/12 flex flex-col" direction="left">
            <div className="mb-8 md:mb-0 md:flex-1">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] mb-4 whitespace-pre-line">
                {t("method.consultoriaTitle")}
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                {t("method.consultoriaDesc")}
              </p>
            </div>

            <div className="flex justify-center md:justify-start md:pl-12 my-8 md:my-10">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <RefreshCw className="w-8 h-8 text-white/70" strokeWidth={1.5} />
              </div>
            </div>

            <div className="md:flex-1">
              <h3 className="text-[28px] md:text-[34px] font-semibold leading-[1.1] mb-4 whitespace-pre-line">
                {t("method.acompanhamentoTitle")}
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed">
                {t("method.acompanhamentoDesc")}
              </p>
            </div>
          </AnimatedSection>

          <div className="w-full md:w-7/12 relative">
            <div className="absolute left-[6px] top-[10px] w-[2px] bg-white/25 z-0" style={{ height: 'calc(50% - 40px)' }} />
            <div className="absolute left-[6px] bottom-[10px] w-[2px] bg-white/25 z-0" style={{ height: 'calc(50% - 40px)' }} />

            <div className="flex flex-col h-full">
              <div className="space-y-7 md:space-y-8 flex-1">
                {consultoriaSteps.map((step, index) => (
                  <TimelineStep key={index} step={step} index={index} totalOffset={index} />
                ))}
              </div>
              <div className="h-10 md:h-14" />
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
