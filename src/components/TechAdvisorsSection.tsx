import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import advisorPhoto from "@/assets/advisor-photo.png";
import ceoMarcelo from "@/assets/ceo-marcelo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const TechAdvisorsSection = () => {
  const { t } = useLanguage();

  const checkItems = [
    t("ta.check1"),
    t("ta.check2"),
    t("ta.check3"),
    t("ta.check4"),
  ];

  return (
    <section id="tech-advisors" className="bg-background py-12 md:py-16 px-4 md:px-8 text-foreground max-w-5xl mx-auto">
      
      {/* --- BLOCO SUPERIOR --- */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center mb-16 md:mb-24">
        
        <AnimatedSection className="w-full md:w-5/12" direction="left">
          <img
            src={advisorPhoto}
            alt="Tech Advisor"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-[20px] md:rounded-[24px]"
            loading="lazy"
            decoding="async"
          />
        </AnimatedSection>

        <AnimatedSection className="w-full md:w-7/12 flex flex-col items-start" direction="right" delay={0.15}>
          <h2 className="text-[24px] md:text-[32px] font-semibold mb-4 md:mb-6 text-foreground tracking-tight">
            {t("ta.heading")}
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: t("ta.p1").replace(/<strong>/g, '<strong class="text-foreground">') }} />
          <p className="text-muted-foreground mb-4 text-[15px]">{t("ta.p2")}</p>
          <ul className="space-y-3 mb-8">
            {checkItems.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              >
                <svg className="w-4 h-4 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="transparent"/>
                  <path d="M7 12L10.5 15.5L18 8" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-muted-foreground text-[15px]">{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="https://wa.me/5541996855782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-full transition-colors text-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("ta.cta")}
          </motion.a>
        </AnimatedSection>
      </div>

      {/* --- BLOCO INFERIOR (DEPOIMENTO) --- */}
      <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-20 items-center">
        
        <AnimatedSection className="w-full md:w-2/3" direction="left">
          <div className="text-primary mb-6">
            <svg width="80" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
          </div>
          <div className="text-muted-foreground text-[17px] md:text-[18px] leading-relaxed space-y-5">
            <p dangerouslySetInnerHTML={{ __html: t("ta.quote1").replace(/<strong>/g, '<strong class="text-foreground">').replace(/<span>/g, '<span class="text-primary font-semibold">') }} />
            <p>{t("ta.quote2")}</p>
          </div>
          <div className="mt-8">
            <p className="font-bold text-foreground text-[15px]">{t("ta.ceoName")}</p>
            <p className="text-muted-foreground text-[14px]">{t("ta.ceoTitle")}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full md:w-1/3 flex justify-center md:justify-end" direction="right" delay={0.15}>
          <img
            src={ceoMarcelo}
            alt="Marcelo Pedreira"
            className="w-56 h-56 md:w-[280px] md:h-[280px] rounded-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechAdvisorsSection;
