import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
          <path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/>
        </svg>
      ),
      title: t("case.challenge"),
      text: t("case.challengeText"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6"/><path d="M10 22h4"/>
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.34.52 2.62 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>
        </svg>
      ),
      title: t("case.approach"),
      text: t("case.approachText"),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/>
        </svg>
      ),
      title: t("case.result"),
      text: t("case.resultText"),
    },
  ];

  return (
    <section id="case" className="bg-white py-12 md:py-16 px-4 md:px-8 font-sans text-gray-900 max-w-5xl mx-auto">
      <AnimatedSection className="mb-10 md:mb-14">
        <h2 className="text-[36px] md:text-[52px] font-medium mb-4 tracking-tight text-black">
          {t("case.heading")}
        </h2>
        <p className="text-base md:text-lg text-gray-800 max-w-2xl leading-relaxed">
          {t("case.subtitle")}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-14">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="text-[#3b5ae5] mb-5">
              <div className="[&_svg]:w-10 [&_svg]:h-10">{item.icon}</div>
            </div>
            <h3 className="font-bold text-lg mb-3 text-black">{item.title}</h3>
            <p className="text-[15px] md:text-base leading-relaxed text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-[#3b5ae5] text-white rounded-xl p-6 w-full md:w-[260px] flex flex-col justify-center shadow-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-[40px] font-bold leading-none mb-1 tracking-tight">{t("case.sla")}</span>
        <span className="text-[14px] font-medium opacity-90">{t("case.slaLabel")}</span>
      </motion.div>
    </section>
  );
};

export default CaseSection;
