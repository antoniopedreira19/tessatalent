import { Check } from "lucide-react";
import advisorPhoto from "@/assets/advisor-photo.png";
import ceoMarcelo from "@/assets/ceo-marcelo.png";

const checkItems = [
  "Validação técnica em processos seletivos",
  "Mentoria para novos líderes tech",
  "Consultoria para estruturação de times",
  "Apoio em decisões de arquitetura e stack",
];

const TechAdvisorsSection = () => {
  return (
    <section id="tech-advisors" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={advisorPhoto}
              alt="Tech Advisor"
              className="w-full max-w-md mx-auto rounded-2xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça nossos Tech Advisors
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nossa rede conta com profissionais que passaram por empresas como{" "}
              <strong className="text-foreground">Creditas</strong>,{" "}
              <strong className="text-foreground">iFood</strong>,{" "}
              <strong className="text-foreground">EBX</strong>,{" "}
              <strong className="text-foreground">Dafiti</strong> e{" "}
              <strong className="text-foreground">Olist</strong>. Eles trazem experiência prática para validar e acelerar seu processo.
            </p>
            <ul className="space-y-3 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Saiba mais
            </button>
          </div>
        </div>

        {/* CEO Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
          <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
            Acreditamos que contratar bem é uma forma de cuidar. Por isso, cada processo é tratado com a profundidade que ele merece.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src={ceoMarcelo}
              alt="Marcelo Pedreira"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-foreground">Marcelo Pedreira</p>
              <p className="text-sm text-muted-foreground">CEO, Tessa Talent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAdvisorsSection;
