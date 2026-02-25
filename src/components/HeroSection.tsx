import heroWoman from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Pessoas certas<br />no contexto certo
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Recrutamento tech com profundidade técnica e entendimento real do seu negócio. Encontramos talentos que fazem diferença desde o primeiro dia.
            </p>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Conheça
            </button>
          </div>

          {/* Photo */}
          <div className="animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <img
              src={heroWoman}
              alt="Profissional sorrindo"
              className="w-full h-auto rounded-2xl object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
