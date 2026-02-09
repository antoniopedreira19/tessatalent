import { FileCheck, Receipt, CreditCard, ShieldCheck } from "lucide-react";
const steps = [{
  number: "1",
  icon: FileCheck,
  title: "Contratação",
  description: "Profissional aprovado e aceita a proposta"
}, {
  number: "2",
  icon: Receipt,
  title: "NF Emitida",
  description: "1º dia de atividade do profissional"
}, {
  number: "3",
  icon: CreditCard,
  title: "Pagamento",
  description: "Até 5 dias corridos após emissão"
}];
const PaymentFlowSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fluxo de Pagamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-3">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <span className="text-accent font-bold text-sm mb-1">Passo {step.number}</span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PaymentFlowSection;