export type Language = "pt-BR" | "en" | "es";

export const translations: Record<Language, Record<string, string>> = {
  "pt-BR": {
    // Nav
    "nav.services": "Serviços",
    "nav.techAdvisors": "Tech Advisors",
    "nav.method": "Método",
    "nav.cases": "Cases",
    "nav.content": "Conteúdos",

    // Hero
    "hero.title1": "Pessoas certas",
    "hero.title2": "no contexto certo",
    "hero.subtitle": "Somos uma Tech Talent que conecta os melhores talentos de tecnologia com seu negócio para fortalecer resultados",
    "hero.cta": "Conheça",
    "hero.imgAlt": "Profissional sorrindo",

    // Services
    "services.heading": "Mais cuidado. Mais performance.",
    "services.p1": "Somos vibrados em formar times de tecnologia que crescem de forma sustentável e com humanidade orientada a resultado.",
    "services.p2": "Reduzimos turnover, desalinhamentos e desperdício financeiro com acompanhamento antes, durante e depois da contratação.",
    "services.subheading": "Tudo com 3 modelos flexíveis:",
    "services.hunting.title": "Hunting",
    "services.hunting.desc": "Identificamos e atraímos talentos para posições críticas ou não. Cada processo é personalizado para encontrar o profissional ideal para a vaga e cultura da empresa.",
    "services.alocacao.title": "Alocação",
    "services.alocacao.desc": "Montamos equipes inteiras prontas para operar. Desde desenvolvedores até tech leads, formamos times alinhados tecnicamente e culturalmente com seu projeto.",
    "services.asaservice.title": "As a Service",
    "services.asaservice.desc": "Profissionais sênior como CTO, DevOps ou DBA disponíveis para demandas pontuais. Expertise de alto nível sem o custo fixo de uma contratação permanente.",

    // Tech Advisors
    "ta.heading": "Conheça nossos Tech Advisors",
    "ta.p1": "A <strong>tessa</strong> possui uma rede de Advisors que tomam decisões em momentos críticos e de escala, com impacto direto em pessoas e nas dinâmicas de empresas como <strong>Creditas, iFood, EBX, Dafiti e Olist.</strong>",
    "ta.p2": "São advisors com:",
    "ta.check1": "Histórico real como CTOs e CIOs",
    "ta.check2": "Experiência prática em crescimento, crise, correção de rota e escala",
    "ta.check3": "Visão de tecnologia aplicada a negócio",
    "ta.check4": "Atuação independente, sem conflito de interesse",
    "ta.cta": "Saiba mais",
    "ta.quote1": "Os <strong>tessa</strong> advisors entram antes da execução para avaliar cenários, mapear riscos e orientar decisões. Oferecemos mentorias para líderes e entregamos uma opinião técnica estratégica, conectando <span>tecnologia à estratégia de negócio</span>.",
    "ta.quote2": 'Nossos advisors vão ajudar sua empresa com arquitetura, estrutura de time, liderança técnica, organização das prioridades e investimentos, traduzindo com clareza os problemas estruturais e ruídos operacionais para CEOs, CFOs e conselheiros."',
    "ta.ceoName": "Marcelo Pedreira",
    "ta.ceoTitle": "CEO da Tessa Talent",

    // Methodology
    "method.heading": "Método <bold>tessa</bold>",
    "method.p1": "Dê adeus à falta de suporte, processos lentos, desalinhamento e custos ocultos. Nós garantimos fit cultural e técnico, reduzindo turnover com validação rigorosa.",
    "method.p2": "São seis passos divididos em consultoria e acompanhamento:",
    "method.consultoria": "Consultoria",
    "method.consultoriaTitle": "Consultoria\nestratégica",
    "method.consultoriaDesc": "Antes de iniciar o processo, mergulhamos no contexto do seu negócio para entender não apenas a vaga, mas o impacto que ela terá na organização.",
    "method.acompanhamentoTitle": "Acompanhamento\ncontínuo",
    "method.acompanhamentoDesc": "Nosso trabalho não termina na contratação. Mantemos rituais de feedback e métricas de performance para garantir o sucesso do profissional na nova posição.",
    "method.step1.title": "Kick-off Aprofundado",
    "method.step1.desc": "Reunião estratégica para entender desafios, cultura e expectativas do time.",
    "method.step2.title": "Alinhamento de perfil",
    "method.step2.desc": "Definição clara do perfil técnico, comportamental e cultural.",
    "method.step3.title": "Hunting",
    "method.step3.desc": "Busca ativa e curada dos talentos mais aderentes ao contexto.",
    "method.step4.title": "Avaliação do parecer",
    "method.step4.desc": "Avaliação técnica e comportamental com recomendação consultiva.",
    "method.step5.title": "Entrevistas e validação",
    "method.step5.desc": "Entrevistas conduzidas pelo cliente para decisão final.",
    "method.step6.title": "Onboarding & Acompanhamento",
    "method.step6.desc": "Acompanhamento da entrada e adaptação do profissional.",

    // Case
    "case.heading": "Case iForense",
    "case.subtitle": "Entregamos velocidade sem comprometer a qualidade técnica em uma contratação crítica",
    "case.challenge": "Desafio",
    "case.challengeText": "Hunting urgente de desenvolvedor híbrido com requisitos técnicos muito específicos e SLA agressivo de menos de uma semana.",
    "case.approach": "Abordagem tessa",
    "case.approachText": "Procura direcionada à nossa rede de profissionais somada a uma triagem técnica rigorosa e validação comportamental aprofundada.",
    "case.result": "Resultado",
    "case.resultText": "Profissional aprovado e onboarding concluído em apenas 5 dias. Velocidade sem comprometer a qualidade.",
    "case.sla": "5 dias",
    "case.slaLabel": "SLA de entrega",

    // CTA
    "cta.heading": "Dê uma <bold>tessa</bold> na sua empresa:",
    "cta.step1.title": "Reunião",
    "cta.step1.desc": "Agendamos uma conversa estratégica",
    "cta.step2.title": "Mapeamento",
    "cta.step2.desc": "Entendemos suas dores e necessidades",
    "cta.step3.title": "Entrega qualificada",
    "cta.step3.desc": "Hunting, Alocação, As a Service e Tech Advisor",
    "cta.button": "Fale com o especialista",

    // Stats
    "stats.value": "82%",
    "stats.text": "é o aumento em retenção das empresas que adotam processos estruturados de onboarding, segundo a <bold>Brandon Hall Group</bold>",

    // Content
    "content.heading": "Conteúdos <bold>tessa</bold> talent",
    "content.blog1": "\u201COnboarding especializado reduz 70% do turnover das contratações",
    "content.blog2": "iForense sobre tessa talent: \u201CConsultoria foi fundamental para nosso negócio\u201D",
    "content.blog3": "Tech Advisor: a contratação que pode fortalece sua empresa",

    // Footer
    "footer.heading": "Fale com a <bold>tessa</bold> Talent",
    "footer.subtitle": "Somos a parceria estratégica que dá eficiência aos recursos humanos, tecnológicos e financeiros da sua empresa.",
    "footer.whatsapp": "Chame no WhatsApp",
    "footer.rights": "Tessa Talent | 2026 | Todos direitos reservados",
  },

  en: {
    // Nav
    "nav.services": "Services",
    "nav.techAdvisors": "Tech Advisors",
    "nav.method": "Method",
    "nav.cases": "Cases",
    "nav.content": "Content",

    // Hero
    "hero.title1": "Right people",
    "hero.title2": "in the right context",
    "hero.subtitle": "We are a Tech Talent company that connects the best technology talents with your business to strengthen results",
    "hero.cta": "Learn more",
    "hero.imgAlt": "Professional smiling",

    // Services
    "services.heading": "More care. More performance.",
    "services.p1": "We are passionate about building technology teams that grow sustainably with humanity oriented to results.",
    "services.p2": "We reduce turnover, misalignments and financial waste with support before, during and after hiring.",
    "services.subheading": "All with 3 flexible models:",
    "services.hunting.title": "Hunting",
    "services.hunting.desc": "We identify and attract talent for critical or non-critical positions. Each process is customized to find the ideal professional for the role and company culture.",
    "services.alocacao.title": "Staff Augmentation",
    "services.alocacao.desc": "We assemble complete teams ready to operate. From developers to tech leads, we build teams technically and culturally aligned with your project.",
    "services.asaservice.title": "As a Service",
    "services.asaservice.desc": "Senior professionals like CTO, DevOps or DBA available for specific demands. High-level expertise without the fixed cost of a permanent hire.",

    // Tech Advisors
    "ta.heading": "Meet our Tech Advisors",
    "ta.p1": "<strong>tessa</strong> has a network of Advisors who make decisions at critical and scaling moments, with direct impact on people and the dynamics of companies like <strong>Creditas, iFood, EBX, Dafiti and Olist.</strong>",
    "ta.p2": "Advisors with:",
    "ta.check1": "Real track record as CTOs and CIOs",
    "ta.check2": "Hands-on experience in growth, crisis, course correction and scaling",
    "ta.check3": "Technology vision applied to business",
    "ta.check4": "Independent action, free of conflicts of interest",
    "ta.cta": "Learn more",
    "ta.quote1": "<strong>tessa</strong> advisors step in before execution to assess scenarios, map risks and guide decisions. We offer mentorship for leaders and deliver strategic technical opinions, connecting <span>technology to business strategy</span>.",
    "ta.quote2": 'Our advisors will help your company with architecture, team structure, technical leadership, priority and investment organization, clearly translating structural problems and operational noise for CEOs, CFOs and board members."',
    "ta.ceoName": "Marcelo Pedreira",
    "ta.ceoTitle": "CEO of Tessa Talent",

    // Methodology
    "method.heading": "<bold>tessa</bold> Method",
    "method.p1": "Say goodbye to lack of support, slow processes, misalignment and hidden costs. We guarantee cultural and technical fit, reducing turnover with rigorous validation.",
    "method.p2": "Six steps divided into consulting and follow-up:",
    "method.consultoria": "Consulting",
    "method.consultoriaTitle": "Strategic\nconsulting",
    "method.consultoriaDesc": "Before starting the process, we dive into your business context to understand not just the role, but the impact it will have on the organization.",
    "method.acompanhamentoTitle": "Continuous\nfollow-up",
    "method.acompanhamentoDesc": "Our work doesn't end at hiring. We maintain feedback rituals and performance metrics to ensure the professional's success in the new position.",
    "method.step1.title": "Deep Kick-off",
    "method.step1.desc": "Strategic meeting to understand challenges, culture and team expectations.",
    "method.step2.title": "Profile Alignment",
    "method.step2.desc": "Clear definition of the technical, behavioral and cultural profile.",
    "method.step3.title": "Hunting",
    "method.step3.desc": "Active and curated search for the most relevant talents.",
    "method.step4.title": "Assessment Review",
    "method.step4.desc": "Technical and behavioral assessment with consultative recommendation.",
    "method.step5.title": "Interviews & Validation",
    "method.step5.desc": "Interviews conducted by the client for final decision.",
    "method.step6.title": "Onboarding & Follow-up",
    "method.step6.desc": "Follow-up on entry and adaptation of the professional.",

    // Case
    "case.heading": "iForense Case",
    "case.subtitle": "We delivered speed without compromising technical quality in a critical hire",
    "case.challenge": "Challenge",
    "case.challengeText": "Urgent hunting for a hybrid developer with very specific technical requirements and an aggressive SLA of less than one week.",
    "case.approach": "tessa Approach",
    "case.approachText": "Targeted search in our network of professionals combined with rigorous technical screening and in-depth behavioral validation.",
    "case.result": "Result",
    "case.resultText": "Professional approved and onboarding completed in just 5 days. Speed without compromising quality.",
    "case.sla": "5 days",
    "case.slaLabel": "Delivery SLA",

    // CTA
    "cta.heading": "Give your company a <bold>tessa</bold>:",
    "cta.step1.title": "Meeting",
    "cta.step1.desc": "We schedule a strategic conversation",
    "cta.step2.title": "Mapping",
    "cta.step2.desc": "We understand your pains and needs",
    "cta.step3.title": "Qualified Delivery",
    "cta.step3.desc": "Hunting, Staff Augmentation, As a Service and Tech Advisor",
    "cta.button": "Talk to an expert",

    // Stats
    "stats.value": "82%",
    "stats.text": "is the increase in retention for companies that adopt structured onboarding processes, according to <bold>Brandon Hall Group</bold>",

    // Content
    "content.heading": "<bold>tessa</bold> talent Content",
    "content.blog1": "\u201CSpecialized onboarding reduces 70% of hiring turnover",
    "content.blog2": "iForense on tessa talent: \u201CConsulting was fundamental for our business\u201D",
    "content.blog3": "Tech Advisor: the hire that can strengthen your company",

    // Footer
    "footer.heading": "Talk to <bold>tessa</bold> Talent",
    "footer.subtitle": "We are the strategic partnership that brings efficiency to your company's human, technological and financial resources.",
    "footer.whatsapp": "Chat on WhatsApp",
    "footer.rights": "Tessa Talent | 2026 | All rights reserved",
  },

  es: {
    // Nav
    "nav.services": "Servicios",
    "nav.techAdvisors": "Tech Advisors",
    "nav.method": "Método",
    "nav.cases": "Casos",
    "nav.content": "Contenidos",

    // Hero
    "hero.title1": "Personas correctas",
    "hero.title2": "en el contexto correcto",
    "hero.subtitle": "Somos una Tech Talent que conecta los mejores talentos de tecnología con tu negocio para fortalecer resultados",
    "hero.cta": "Conoce más",
    "hero.imgAlt": "Profesional sonriendo",

    // Services
    "services.heading": "Más cuidado. Más rendimiento.",
    "services.p1": "Nos apasiona formar equipos de tecnología que crecen de forma sostenible y con humanidad orientada a resultados.",
    "services.p2": "Reducimos rotación, desalineamientos y desperdicio financiero con acompañamiento antes, durante y después de la contratación.",
    "services.subheading": "Todo con 3 modelos flexibles:",
    "services.hunting.title": "Hunting",
    "services.hunting.desc": "Identificamos y atraemos talentos para posiciones críticas o no. Cada proceso es personalizado para encontrar al profesional ideal para el puesto y la cultura de la empresa.",
    "services.alocacao.title": "Asignación",
    "services.alocacao.desc": "Montamos equipos completos listos para operar. Desde desarrolladores hasta tech leads, formamos equipos alineados técnica y culturalmente con tu proyecto.",
    "services.asaservice.title": "As a Service",
    "services.asaservice.desc": "Profesionales senior como CTO, DevOps o DBA disponibles para demandas puntuales. Expertise de alto nivel sin el costo fijo de una contratación permanente.",

    // Tech Advisors
    "ta.heading": "Conoce a nuestros Tech Advisors",
    "ta.p1": "<strong>tessa</strong> tiene una red de Advisors que toman decisiones en momentos críticos y de escala, con impacto directo en personas y en las dinámicas de empresas como <strong>Creditas, iFood, EBX, Dafiti y Olist.</strong>",
    "ta.p2": "Son advisors con:",
    "ta.check1": "Historial real como CTOs y CIOs",
    "ta.check2": "Experiencia práctica en crecimiento, crisis, corrección de rumbo y escala",
    "ta.check3": "Visión de tecnología aplicada al negocio",
    "ta.check4": "Actuación independiente, sin conflicto de intereses",
    "ta.cta": "Saber más",
    "ta.quote1": "Los advisors de <strong>tessa</strong> entran antes de la ejecución para evaluar escenarios, mapear riesgos y orientar decisiones. Ofrecemos mentorías para líderes y entregamos una opinión técnica estratégica, conectando <span>tecnología con estrategia de negocio</span>.",
    "ta.quote2": 'Nuestros advisors ayudarán a su empresa con arquitectura, estructura de equipo, liderazgo técnico, organización de prioridades e inversiones, traduciendo con claridad los problemas estructurales y ruidos operacionales para CEOs, CFOs y consejeros."',
    "ta.ceoName": "Marcelo Pedreira",
    "ta.ceoTitle": "CEO de Tessa Talent",

    // Methodology
    "method.heading": "Método <bold>tessa</bold>",
    "method.p1": "Diga adiós a la falta de soporte, procesos lentos, desalineamiento y costos ocultos. Garantizamos fit cultural y técnico, reduciendo rotación con validación rigurosa.",
    "method.p2": "Son seis pasos divididos en consultoría y acompañamiento:",
    "method.consultoria": "Consultoría",
    "method.consultoriaTitle": "Consultoría\nestratégica",
    "method.consultoriaDesc": "Antes de iniciar el proceso, nos sumergimos en el contexto de tu negocio para entender no solo el puesto, sino el impacto que tendrá en la organización.",
    "method.acompanhamentoTitle": "Acompañamiento\ncontinuo",
    "method.acompanhamentoDesc": "Nuestro trabajo no termina en la contratación. Mantenemos rituales de feedback y métricas de rendimiento para garantizar el éxito del profesional en la nueva posición.",
    "method.step1.title": "Kick-off Profundo",
    "method.step1.desc": "Reunión estratégica para entender desafíos, cultura y expectativas del equipo.",
    "method.step2.title": "Alineamiento de perfil",
    "method.step2.desc": "Definición clara del perfil técnico, conductual y cultural.",
    "method.step3.title": "Hunting",
    "method.step3.desc": "Búsqueda activa y curada de los talentos más adherentes al contexto.",
    "method.step4.title": "Evaluación del dictamen",
    "method.step4.desc": "Evaluación técnica y conductual con recomendación consultiva.",
    "method.step5.title": "Entrevistas y validación",
    "method.step5.desc": "Entrevistas conducidas por el cliente para decisión final.",
    "method.step6.title": "Onboarding y Acompañamiento",
    "method.step6.desc": "Acompañamiento de la entrada y adaptación del profesional.",

    // Case
    "case.heading": "Caso iForense",
    "case.subtitle": "Entregamos velocidad sin comprometer la calidad técnica en una contratación crítica",
    "case.challenge": "Desafío",
    "case.challengeText": "Hunting urgente de desarrollador híbrido con requisitos técnicos muy específicos y SLA agresivo de menos de una semana.",
    "case.approach": "Enfoque tessa",
    "case.approachText": "Búsqueda dirigida a nuestra red de profesionales sumada a una selección técnica rigurosa y validación conductual profunda.",
    "case.result": "Resultado",
    "case.resultText": "Profesional aprobado y onboarding concluido en solo 5 días. Velocidad sin comprometer la calidad.",
    "case.sla": "5 días",
    "case.slaLabel": "SLA de entrega",

    // CTA
    "cta.heading": "Dale una <bold>tessa</bold> a tu empresa:",
    "cta.step1.title": "Reunión",
    "cta.step1.desc": "Agendamos una conversación estratégica",
    "cta.step2.title": "Mapeo",
    "cta.step2.desc": "Entendemos tus dolores y necesidades",
    "cta.step3.title": "Entrega calificada",
    "cta.step3.desc": "Hunting, Asignación, As a Service y Tech Advisor",
    "cta.button": "Habla con el especialista",

    // Stats
    "stats.value": "82%",
    "stats.text": "es el aumento en retención de las empresas que adoptan procesos estructurados de onboarding, según <bold>Brandon Hall Group</bold>",

    // Content
    "content.heading": "Contenidos <bold>tessa</bold> talent",
    "content.blog1": "\u201COnboarding especializado reduce 70% de la rotación en contrataciones",
    "content.blog2": "iForense sobre tessa talent: \u201CLa consultoría fue fundamental para nuestro negocio\u201D",
    "content.blog3": "Tech Advisor: la contratación que puede fortalecer tu empresa",

    // Footer
    "footer.heading": "Habla con <bold>tessa</bold> Talent",
    "footer.subtitle": "Somos la alianza estratégica que da eficiencia a los recursos humanos, tecnológicos y financieros de tu empresa.",
    "footer.whatsapp": "Escríbenos en WhatsApp",
    "footer.rights": "Tessa Talent | 2026 | Todos los derechos reservados",
  },
};
