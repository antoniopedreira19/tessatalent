import teamWorking from "@/assets/team-working.jpg";

const blogPosts = [
  { title: "Como estruturar um time tech do zero" },
  { title: "Os erros mais comuns no recrutamento de devs" },
  { title: "Por que o fit cultural importa mais do que o currículo" },
];

const StatsAndContentSection = () => {
  return (
    <>
      {/* Stats */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamWorking})` }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-7xl md:text-8xl font-extrabold text-white mb-4">82%</p>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            das empresas com processos estruturados de onboarding retêm seus talentos por mais tempo.
          </p>
          <p className="text-white/50 text-sm mt-4">Fonte: Brandon Hall Group</p>
        </div>
      </section>

      {/* Content/Blog */}
      <section id="content" className="py-20 lg:py-28 bg-blue-strong">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conteúdos tessa talent
            </h2>
            <p className="text-white/70">Insights sobre recrutamento tech e gestão de talentos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((post, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-40 bg-secondary" />
                <div className="p-6">
                  <h3 className="font-bold text-foreground leading-snug">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-semibold bg-white text-foreground hover:bg-white/90 transition-colors">
              Acesse o blog
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndContentSection;
