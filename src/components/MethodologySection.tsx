import { Lightbulb, RefreshCw, CheckCircle2 } from "lucide-react";

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Nossa Metodologia
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos advisory estratégico com acompanhamento contínuo para garantir o sucesso de cada contratação.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Advisory Estratégico */}
          <div className="group">
            <div className="bg-background rounded-2xl p-8 lg:p-10 border border-border/40 hover:border-accent/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Advisory Estratégico
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Antes de iniciar qualquer processo, mergulhamos no contexto do seu negócio para entender não apenas a vaga, mas o impacto que ela terá na organização.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Kick-off Aprofundado</h4>
                    <p className="text-sm text-muted-foreground">Reunião estratégica para entender desafios, cultura e expectativas do time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mapeamento de Cultura</h4>
                    <p className="text-sm text-muted-foreground">Análise detalhada do fit cultural necessário para sucesso na posição.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Definição de Perfil Ideal</h4>
                    <p className="text-sm text-muted-foreground">Construção colaborativa do perfil técnico e comportamental.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acompanhamento Contínuo */}
          <div className="group">
            <div className="bg-background rounded-2xl p-8 lg:p-10 border border-border/40 hover:border-accent/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Acompanhamento Contínuo
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nosso trabalho não termina na contratação. Mantemos rituais de feedback e métricas para garantir o sucesso do profissional na nova posição.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Rituais de Feedback</h4>
                    <p className="text-sm text-muted-foreground">Check-ins regulares com empresa e profissional durante o período de garantia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Métricas de Performance</h4>
                    <p className="text-sm text-muted-foreground">Acompanhamento de indicadores de adaptação e produtividade.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Suporte ao Onboarding</h4>
                    <p className="text-sm text-muted-foreground">Apoio durante a integração para maximizar as chances de sucesso.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;