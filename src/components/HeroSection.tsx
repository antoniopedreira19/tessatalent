import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[100svh] md:min-h-[600px] lg:min-h-[700px] flex items-end md:items-center overflow-hidden"
      style={{ fontFamily: "'Sansation', sans-serif" }}
    >
      <img
        src="/images/hero-woman.jpg"
        alt={t("hero.imgAlt")}
        className="absolute inset-0 w-full h-full object-cover object-[70%_20%] md:object-[75%_top] lg:object-right"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-10 pt-[55vh] md:pt-24 md:pb-16">
        <div className="max-w-2xl lg:max-w-[750px] mr-auto">
          <motion.h1
            className="text-[36px] md:text-[50px] lg:text-[63px] font-bold text-white leading-[1.05] mb-5 md:mb-8 tracking-tight drop-shadow-lg"
            style={{ fontFamily: "'Sansation', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl lg:text-[28px] text-white/90 mb-8 md:mb-10 max-w-[600px] leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center h-14 px-10 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {t("hero.cta")}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
