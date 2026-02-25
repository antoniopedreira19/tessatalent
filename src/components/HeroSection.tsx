import { motion } from "framer-motion";
import heroWoman from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <img
        src={heroWoman}
        alt="Profissional sorrindo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Pessoas certas<br />no contexto certo
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Somos uma Tech Talent que conecta os melhores talentos de tecnologia com seu negócio para fortalecer resultados
          </motion.p>
          <motion.button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Conheça
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
