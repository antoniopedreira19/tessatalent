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
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={teamWorking}
            alt="Equipe trabalhando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <h2 className="text-[100px] md:text-[140px] font-bold text-white leading-none mb-4 tracking-tighter">
              82%
            </h2>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-lg">
              é o aumento em retenção das empresas que adotam processos estruturados de onboarding, segundo a <span className="font-bold text-gray-200">Brandon Hall Group</span>
            </p>
          </div>
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
