import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import teamWorking from "@/assets/team-working.jpg";
import blogTechAdvisor from "@/assets/blog-tech-advisor.png";
import blogOnboarding from "@/assets/blog-onboarding.png";
import blogIforense from "@/assets/blog-iforense.png";

const blogPosts = [
  { image: blogOnboarding, title: "\u201COnboarding especializado reduz 70% do turnover das contratações" },
  { image: blogIforense, title: "iForense sobre tessa talent: \u201CConsultoria foi fundamental para nosso negócio\u201D" },
  { image: blogTechAdvisor, title: "Tech Advisor: a contratação que pode fortalece sua empresa" },
];

const StatsAndContentSection = () => {
  return (
    <>
      {/* Stats */}
      <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={teamWorking} alt="Equipe trabalhando" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 w-full">
          <AnimatedSection className="max-w-2xl">
            <motion.h2
              className="text-[100px] md:text-[140px] font-bold text-white leading-none mb-4 tracking-tighter"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              82%
            </motion.h2>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-lg">
              é o aumento em retenção das empresas que adotam processos estruturados de onboarding, segundo a <span className="font-bold text-gray-200">Brandon Hall Group</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content/Blog */}
      <section id="content" className="bg-gradient-to-b from-[#1a3abf] to-[#0d1f8a] py-20 px-6 font-sans text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-normal mb-12 tracking-tight">
              Conteúdos <span className="font-bold">tessa</span> talent
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden rounded-[20px] mb-6 aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-medium leading-snug hover:text-blue-200 transition-colors">
                  {post.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndContentSection;
