import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CallToActionSection = () => {
  return (
    <section className="bg-[#f5f5f7] py-14 md:py-20 px-4 md:px-6 font-sans text-center">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl font-normal text-black mb-10 md:mb-16 tracking-tight">
            Dê uma <span className="font-bold">tessa</span> na sua empresa:
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 mb-10 md:mb-16">
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" />
                </svg>
              ),
              title: "Reunião",
              desc: "Agendamos uma conversa estratégica",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              ),
              title: "Mapeamento",
              desc: "Entendemos suas dores e necessidades",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
                </svg>
              ),
              title: "Entrega qualificada",
              desc: "Hunting, Alocação, As a Service e Tech Advisor",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center max-w-[200px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="text-[#3b5ae5] mb-4">{step.icon}</div>
              <h3 className="font-bold text-[15px] mb-2 text-black">{step.title}</h3>
              <p className="text-[14px] text-gray-700 leading-snug">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden md:block absolute" style={{ display: "none" }} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://wa.me/5541996855782"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#3b5ae5] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-md text-[16px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Fale com o especialista
        </motion.a>
      </div>
    </section>
  );
};

export default CallToActionSection;
