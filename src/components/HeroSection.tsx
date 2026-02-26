import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: "'Sansation', sans-serif" }} // Aplicação direta da fonte
    >
      <img
        src="/images/hero-woman.jpg"
        alt="Profissional sorrindo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      {/* Overlay mantido para garantir leitura do texto sobre a foto */}
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Aumentei o max-w de 2xl para 4xl para acomodar os textos gigantes */}
        <div className="max-w-4xl">
          <motion.h1
            // Aumento massivo da fonte: de lg:text-6xl para lg:text-[90px]
            // Ajuste do leading (espaço entre linhas) para 1.05 para ficar compacto e elegante
            className="text-5xl md:text-7xl lg:text-[90px] font-extrabold text-white leading-[1.05] mb-6 md:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Pessoas certas
            <br />
            no contexto certo
          </motion.h1>

          <motion.p
            // Subtítulo mais imponente: de text-lg para lg:text-3xl
            // Aumentei a largura máxima do texto de apoio para max-w-2xl
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Somos uma Tech Talent que conecta os melhores talentos de tecnologia com seu negócio para fortalecer
            resultados
          </motion.p>

          <motion.button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            // Botão proporcionalmente maior: h-14, px-10 e text-lg
            className="inline-flex items-center justify-center h-14 px-10 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
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
