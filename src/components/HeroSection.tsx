import heroWoman from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <img
        src={heroWoman}
        alt="Profissional sorrindo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Pessoas certas<br />no contexto certo
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            Somos uma Tech Talent que conecta os melhores talentos de tecnologia com seu negócio para fortalecer resultados
          </p>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Conheça
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
