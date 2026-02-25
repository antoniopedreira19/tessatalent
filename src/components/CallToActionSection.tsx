const CallToActionSection = () => {
  return (
    <section className="bg-[#f5f5f7] py-20 px-6 font-sans text-center">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-normal text-black mb-16 tracking-tight">
          Dê uma <span className="font-bold">tessa</span> na sua empresa:
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-16">
          
          <div className="flex flex-col items-center max-w-[200px]">
            <div className="text-[#3b5ae5] mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="font-bold text-[15px] mb-2 text-black">Reunião</h3>
            <p className="text-[14px] text-gray-700 leading-snug">
              Agendamos uma conversa estratégica
            </p>
          </div>

          <div className="hidden md:block text-[#3b5ae5] opacity-80">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H58M58 12L48 4M58 12L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
            </svg>
          </div>

          <div className="flex flex-col items-center max-w-[200px]">
            <div className="text-[#3b5ae5] mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className="font-bold text-[15px] mb-2 text-black">Mapeamento</h3>
            <p className="text-[14px] text-gray-700 leading-snug">
              Entendemos suas dores e necessidades
            </p>
          </div>

          <div className="hidden md:block text-[#3b5ae5] opacity-80">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H58M58 12L48 4M58 12L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4"/>
            </svg>
          </div>

          <div className="flex flex-col items-center max-w-[200px]">
            <div className="text-[#3b5ae5] mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </div>
            <h3 className="font-bold text-[15px] mb-2 text-black">Entrega qualificada</h3>
            <p className="text-[14px] text-gray-700 leading-snug">
              Hunting, Alocação, As a Service e Tech Advisor
            </p>
          </div>
        </div>

        <button className="bg-[#3b5ae5] hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-md text-[16px]">
          Fale com o especialista
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
