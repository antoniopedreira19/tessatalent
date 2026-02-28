import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-8 md:pt-10 pb-6 px-4 md:px-6" style={{ fontFamily: "'Sansation', sans-serif" }}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="mb-6 md:mb-8">
          <h2 className="text-[36px] md:text-[52px] font-medium text-black mb-3 md:mb-4 tracking-tight leading-tight" dangerouslySetInnerHTML={{ __html: t("footer.heading").replace(/<bold>/g, '<span class="font-bold">').replace(/<\/bold>/g, '</span>') }} />
          
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mb-6 leading-relaxed">
            {t("footer.subtitle")}
          </p>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://wa.me/5541996855782"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b5ae5] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all inline-flex items-center gap-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t("footer.whatsapp")}
            </motion.a>

            <a 
              href="https://linkedin.com/company/tessait" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[#3b5ae5] hover:opacity-80 transition-opacity"
            >
              <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-1.8.7-2.1 1.2v-1h-2.5v7.8h2.5v-4.1c0-.2 0-.4.1-.6.1-.4.5-.8 1.1-.8.7 0 1 .6 1 1.4v4.1h2.5zM8.1 18.5V10.7H5.7v7.8h2.4zM6.9 9.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8z"/>
              </svg>
            </a>
          </div>
        </AnimatedSection>

        <div className="text-center pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-900 font-medium">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
