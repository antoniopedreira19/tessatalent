import { Trophy, Ban, Shield, Coins } from "lucide-react";
const pricingFeatures = [{
  icon: Trophy,
  title: "Success Fee",
  description: "Pague apenas quando a contratação for efetivada. Zero risco para sua empresa.",
  highlight: "100% Success Fee"
}, {
  icon: Ban,
  title: "Sem Mensalidades",
  description: "Sem custos iniciais, taxas de setup ou cobranças ocultas. Transparência total.",
  highlight: "Zero custos ocultos"
}, {
  icon: Shield,
  title: "Garantia de 60 Dias",
  description: "Se o profissional sair nos primeiros 60 dias, fazemos a substituição sem custo adicional.",
  highlight: "1 substituição gratuita"
}, {
  icon: Coins,
  title: "Investimento Claro",
  description: "Valor correspondente a 1x o primeiro salário bruto do profissional contratado.",
  highlight: "1x salário bruto"
}];
const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modelo de Preços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparência total no nosso modelo de cobrança
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <p className="text-accent text-sm font-semibold mb-2">{feature.highlight}</p>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;