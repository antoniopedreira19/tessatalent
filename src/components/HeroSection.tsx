import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
      style={{ fontFamily: "'Sansation', sans-serif" }}
    >
      <img
        src="/images/hero-woman.jpg"
        alt="Profissional sorrindo"
        // Move o foco da imagem para a direita, protegendo o rosto de cortes
        className="absolute inset-0 w-full h-full object-cover object-[75%_top] sm:object-right"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* O SEGREDO: Gradiente que escurece apenas a esquerda para a leitura, 
          deixando a direita (rosto) livre de filtro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 pb-12 md:pt-24 md:pb-16">
        {/* Limitamos a largura e forçamos o alinhamento total à esquerda com mr-auto */}
        <div className="max-w-2xl lg:max-w-[750px] mr-auto">
          <motion.h1
            // Adicionado drop-shadow para garantir a leitura caso a imagem redimensione
            className="text-5xl md:text-7xl lg:text-[85px] font-extrabold text-white leading-[1.05] mb-6 md:mb-8 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Pessoas certas
            <br />
            no contexto certo
          </motion.h1>

          <motion.p
            // A largura deste texto de apoio foi travada em 600px para não invadir a direita
            className="text-xl md:text-2xl lg:text-[28px] text-white/95 mb-10 max-w-[600px] leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Somos uma Tech Talent que conecta os melhores talentos de tecnologia com seu negócio para fortalecer
            resultados
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
            Conheça
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
