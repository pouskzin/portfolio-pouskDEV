"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

const dictionary = {
  pt: {
    // Navbar
    navAbout: "Sobre",
    navProjects: "Projetos",
    navExperience: "Experiência",
    navLab: "Laboratório",
    navContact: "Contato",

    // Hero
    heroBadge: "Disponível para Estágio",
    heroTitleBase: "Construindo arquiteturas sólidas e ",
    heroTitleHighlight: "código inteligente.",
    heroDescription: "Estudante de Engenharia de Software especializado no ecossistema Back-end (Java, Spring Boot & PostgreSQL).",
    btnProjects: "Ver Projetos",
    btnResumeEN: "Currículo · EN",
    btnResumePT: "Currículo · PT",

    // About
    aboutTitle: "Soft Skills & Perfil",
    aboutP1Start: "Destaco-me pela ",
    aboutP1Comm: "boa comunicação interpessoal",
    aboutP1And: " e grande facilidade no ",
    aboutP1Team: "trabalho em equipe",
    aboutP1Mid: ". Mantenho uma ",
    aboutP1Pro: "atitude proativa",
    aboutP1Mid2: " diante de desafios e possuo um perfil fortemente voltado à ",
    aboutP1Learn: "aprendizagem contínua",
    aboutP1End: ".",
    aboutQuote: "\"A perfeição é alcançada não quando não há mais nada a acrescentar, mas quando não há mais nada a retirar.\"",
    aboutInfraTitle: "Infraestrutura",
    aboutInfraMaint: "Manutenção de PCs",

    // Tech
    techTitle: "Hard Skills",
    techSubtitle: "Tecnologias que utilizo para construir soluções robustas e escaláveis.",
    techCatBackend: "Back-end Core",
    techCatFrontend: "Front-end",
    techCatDb: "Banco de Dados",

    // Experience
    expTitle: "Trajetória",
    expSubtitle: "Minha evolução profissional e acadêmica ao longo do tempo.",
    expCourseTitle: "Formação Complementar",
    expItem1Title: "Graduação em Engenharia de Software",
    expItem1Date: "Presente - Jun/2030",
    expItem1Desc: "Formação superior com foco em arquitetura de software, engenharia de requisitos e desenvolvimento de sistemas.",
    expItem2Title: "Estágio em TI",
    expItem2Date: "Jun/2025 - Dez/2025",
    expItem2Desc: "Suporte técnico, manutenção de hardware e atendimento direto aos usuários, garantindo a disponibilidade da infraestrutura.",
    expItem3Title: "Repositor",
    expItem3Date: "Nov/2024 - Jan/2025",
    expItem3Desc: "Experiência com organização, trabalho em equipe e agilidade em ambiente dinâmico.",
    expItem4Title: "Técnico em Informática",
    expItem4Date: "Fev/2021 - Dez/2025",
    expItem4Desc: "Formação técnica abrangendo fundamentos da computação, lógica de programação e redes.",
    comp1Title: "Desenvolvimento Web Completo",
    comp2Title: "Excel Avançado",
    comp3Title: "Segurança Digital e LGPD",

    // Projects
    projectsTitle: "Estudos de Caso",
    projectsRepoBtn: "Repositório",
    projectsDeployBtn: "Deploy",
    projectsMockupImg: "Mockup Image",
    proj1Title: "Pkz-Sneakers",
    proj1Desc: "E-commerce Web construído com PHP, MySQL e estruturado rigorosamente no padrão MVC. Inclui sistema completo de login, catálogo interativo, carrinho de compras e integração direta com Discord via webhooks para notificação de vendas.",
    proj2Title: "API de Gerenciamento de Tarefas",
    proj2Desc: "API REST desenvolvida em Java voltada para o gerenciamento de tarefas. Implementa as principais operações CRUD (Create, Read, Update, Delete) com foco em desempenho, segurança e código limpo.",
    proj3Title: "Coitz Barbearia",
    proj3Desc: "Sistema web de agendamento preparado para ambiente de produção. Foco meticuloso em UX/UI e experiência do usuário para facilitar e alavancar a conversão de clientes finais, além de simplificar a gestão da barbearia.",
    proj4Title: "SempreSobra",
    proj4Desc: "Plataforma SaaS de gestão financeira pessoal focada em controle diário de gastos e previsibilidade. Conta com projeção financeira automática de 6 meses, gerenciamento de contas fixas recorrentes, fluxo de onboarding guiado e arquitetura voltada para segurança, performance e estabilidade.",

    // Contact
    contactTitle: "Vamos construir algo ",
    contactTitleHighlight: "juntos?",
    contactDesc: "Estou aberto a novas oportunidades e desafios. Sinta-se à vontade para me mandar uma mensagem sobre projetos, vagas ou apenas para dar um alô!",
    contactNameLabel: "Nome Completo",
    contactNamePlaceholder: "Seu nome",
    contactEmailLabel: "E-mail Profissional",
    contactEmailPlaceholder: "seu@email.com",
    contactMessageLabel: "Mensagem",
    contactMessagePlaceholder: "Como posso te ajudar?",
    contactSendBtn: "Enviar Mensagem",
    contactSecurityNote: "Seus dados estão seguros. Protegido por criptografia padrão.",

    // Footer
    footerQuoteAuthor: "— Antoine de Saint-Exupéry"
  },
  en: {
    // Navbar
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navLab: "Laboratory",
    navContact: "Contact",

    // Hero
    heroBadge: "Available for Internship",
    heroTitleBase: "Building solid architectures and ",
    heroTitleHighlight: "smart code.",
    heroDescription: "Software Engineering student specialized in the Back-end ecosystem (Java, Spring Boot & PostgreSQL).",
    btnProjects: "View Projects",
    btnResumeEN: "Resume · EN",
    btnResumePT: "Resume · PT",

    // About
    aboutTitle: "Soft Skills & Profile",
    aboutP1Start: "I stand out for my ",
    aboutP1Comm: "good interpersonal communication",
    aboutP1And: " and great ease in ",
    aboutP1Team: "teamwork",
    aboutP1Mid: ". I maintain a ",
    aboutP1Pro: "proactive attitude",
    aboutP1Mid2: " towards challenges and have a profile strongly oriented to ",
    aboutP1Learn: "continuous learning",
    aboutP1End: ".",
    aboutQuote: "\"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.\"",
    aboutInfraTitle: "Infrastructure",
    aboutInfraMaint: "PC Maintenance",

    // Tech
    techTitle: "Hard Skills",
    techSubtitle: "Technologies I use to build robust and scalable solutions.",
    techCatBackend: "Back-end Core",
    techCatFrontend: "Front-end",
    techCatDb: "Database",

    // Experience
    expTitle: "Journey",
    expSubtitle: "My professional and academic evolution over time.",
    expCourseTitle: "Complementary Education",
    expItem1Title: "Bachelor's in Software Engineering",
    expItem1Date: "Present - Jun/2030",
    expItem1Desc: "Higher education focused on software architecture, requirements engineering, and systems development.",
    expItem2Title: "IT Internship",
    expItem2Date: "Jun/2025 - Dec/2025",
    expItem2Desc: "Technical support, hardware maintenance, and direct user assistance, ensuring infrastructure availability.",
    expItem3Title: "Stock Clerk",
    expItem3Date: "Nov/2024 - Jan/2025",
    expItem3Desc: "Experience with organization, teamwork, and agility in a dynamic environment.",
    expItem4Title: "IT Technician",
    expItem4Date: "Feb/2021 - Dec/2025",
    expItem4Desc: "Technical education covering computing fundamentals, programming logic, and networking.",
    comp1Title: "Complete Web Development",
    comp2Title: "Advanced Excel",
    comp3Title: "Digital Security and LGPD",

    // Projects
    projectsTitle: "Case Studies",
    projectsRepoBtn: "Repository",
    projectsDeployBtn: "Deploy",
    projectsMockupImg: "Mockup Image",
    proj1Title: "Pkz-Sneakers",
    proj1Desc: "Web E-commerce built with PHP, MySQL, and strictly structured in the MVC pattern. Includes a complete login system, interactive catalog, shopping cart, and direct integration with Discord via webhooks for sales notifications.",
    proj2Title: "Task Management API",
    proj2Desc: "REST API developed in Java for task management. Implements major CRUD operations (Create, Read, Update, Delete) with a focus on performance, security, and clean code.",
    proj3Title: "Coitz Barbershop",
    proj3Desc: "Web scheduling system ready for production environment. Meticulous focus on UX/UI and user experience to facilitate and boost end-customer conversion, as well as simplify barbershop management.",
    proj4Title: "SempreSobra",
    proj4Desc: "Personal finance SaaS platform focused on daily expense tracking and financial predictability. Features automated 6-month financial forecasting, recurring fixed-bill management, guided user onboarding, and an architecture built for security, performance, and stability.",

    // Contact
    contactTitle: "Let's build something ",
    contactTitleHighlight: "together?",
    contactDesc: "I am open to new opportunities and challenges. Feel free to send me a message about projects, job openings, or just to say hi!",
    contactNameLabel: "Full Name",
    contactNamePlaceholder: "Your name",
    contactEmailLabel: "Professional E-mail",
    contactEmailPlaceholder: "your@email.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "How can I help you?",
    contactSendBtn: "Send Message",
    contactSecurityNote: "Your data is safe. Protected by standard encryption.",

    // Footer
    footerQuoteAuthor: "— Antoine de Saint-Exupéry"
  }
};

type DictionaryKeys = keyof typeof dictionary.pt;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: DictionaryKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: DictionaryKeys) => {
    return dictionary[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};