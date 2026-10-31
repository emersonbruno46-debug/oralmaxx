/**
 * DADOS CENTRAIS DA CLÍNICA ORALMAXX
 * -------------------------------------------------------------
 * Todas as informações institucionais, tratamentos, equipe,
 * contatos, FAQ e configurações de conversão estão centralizadas aqui.
 *
 * Itens marcados com `status: "pendente"` ou `status: "confirmado"`
 * facilitam a revisão e validação formal junto à equipe da clínica.
 */

export interface TreatmentItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  status: 'confirmado' | 'pendente_validacao';
  whatsappMessage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  registration: string;
  photoUrl?: string;
  bio?: string;
  isTechnicalDirector?: boolean;
  status: 'confirmado' | 'pendente_validacao';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const ORALMAXX_CONFIG = {
  brand: {
    name: 'OralMaxx',
    fullName: 'Clínica Odontológica OralMaxx',
    eyebrow: 'CLÍNICA ODONTOLÓGICA ORALMAXX',
    tagline: 'Cuidado com a saúde e a beleza do seu sorriso, em cada etapa do seu tratamento.',
    headline: 'Seu sorriso merece esse cuidado.',
    technicalDirector: {
      name: 'Dr. Leonardo S. Santos',
      cro: 'CRO-MG 35235',
      title: 'Responsável Técnico',
      status: 'confirmado',
    },
  },

  contact: {
    whatsappNumber: '5538992177190',
    phoneDisplay: '(38) 99217-7190',
    instagramUrl: 'https://www.instagram.com/oral_maxx/',
    instagramDisplay: '@oral_maxx',
    email: 'contato@oralmaxx.com.br',
    emailStatus: 'pendente_validacao',
    defaultMessage: 'Olá! Conheci a OralMaxx pelo site e gostaria de saber mais sobre o agendamento de uma consulta.',
  },

  location: {
    // Dados para verificação com a clínica
    city: 'Montes Claros / Norte de Minas Gerais',
    address: 'Endereço oficial em confirmação com a recepção da clínica',
    status: 'pendente_validacao',
    googleMapsUrl: 'https://maps.google.com/?q=OralMaxx',
    hours: [
      { days: 'Segunda a Sexta-feira', time: '08:00 às 18:00 (Consulte horários disponíveis)' },
      { days: 'Sábado', time: 'Consulte disponibilidade prévia' },
    ],
    note: 'O endereço exato e os horários específicos de atendimento estão sujeitos a confirmação direta com a recepção via WhatsApp.',
  },

  navigation: [
    { label: 'A clínica', href: '#clinica' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Nossa equipe', href: '#equipe' },
    { label: 'Localização', href: '#localizacao' },
  ],
};

/**
 * Gera URL oficial de redirecionamento para o WhatsApp da OralMaxx
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || ORALMAXX_CONFIG.contact.defaultMessage;
  return `https://wa.me/${ORALMAXX_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Tratamentos disponíveis na OralMaxx
 * Nota: Os tratamentos abaixo refletem a comunicação visual da fachada real
 * ("Implantes, Ortodontia, Harmonização, Clínica Geral, Estética, Endodontia, Periodontia, Cirurgia Bucomaxilofacial")
 */
export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'implantes',
    name: 'Implantodontia',
    shortDescription: 'Reabilitação do sorriso com dentes fixos, segurança e estabilidade funcional.',
    fullDescription: 'Recupere a mastigação e a confiança com soluções modernas em implantes dentários, com planejamento digital e acompanhamento próximo em todas as fases.',
    iconName: 'Sparkles',
    status: 'confirmado',
    whatsappMessage: 'Olá! Gostaria de tirar dúvidas e saber mais sobre implantes dentários na OralMaxx.',
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    shortDescription: 'Alinhamento dos dentes e correção da mordida para harmonia e saúde bucal.',
    fullDescription: 'Opções em aparelhos modernos, transparentes e convencionais para crianças, jovens e adultos, priorizando conforto e resultados harmônicos.',
    iconName: 'Smile',
    status: 'confirmado',
    whatsappMessage: 'Olá! Gostaria de consultar sobre opções de ortodontia e alinhamento na OralMaxx.',
  },
  {
    id: 'harmonizacao',
    name: 'Harmonização Facial',
    shortDescription: 'Proporções equilibradas e sutis que valorizam seus traços naturais.',
    fullDescription: 'Procedimentos seguros e personalizados com foco na naturalidade, integrando o sorriso à estética facial de forma equilibrada e elegante.',
    iconName: 'HeartHandshake',
    status: 'confirmado',
    whatsappMessage: 'Olá! Tenho interesse em saber mais sobre harmonização orofacial na OralMaxx.',
  },
  {
    id: 'clinica-geral',
    name: 'Clínica Geral & Prevenção',
    shortDescription: 'Limpeza, restaurações, check-up preventivo e diagnóstico precoce.',
    fullDescription: 'A base da saúde bucal: acompanhamento regular, profilaxia profissional e tratamentos restauradores para manter seu sorriso saudável por toda a vida.',
    iconName: 'ShieldCheck',
    status: 'confirmado',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta de avaliação / clínica geral na OralMaxx.',
  },
  {
    id: 'estetica',
    name: 'Estética Dental',
    shortDescription: 'Clareamento dental, facetas e restaurações que realçam a luminosidade.',
    fullDescription: 'Tratamentos estéticos minimamente invasivos planejados para renovar a cor, forma e equilíbrio do seu sorriso com máxima naturalidade.',
    iconName: 'Gem',
    status: 'confirmado',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre clareamento e estética dental na OralMaxx.',
  },
  {
    id: 'endodontia-cirurgia',
    name: 'Endodontia & Cirurgias',
    shortDescription: 'Tratamento de canal preciso, periodontia e cirurgias bucomaxilofaciais.',
    fullDescription: 'Cuidado especializado para alívio de desconfortos, preservação da estrutura dental, cirurgias de terceiros molares (siso) e saúde gengival.',
    iconName: 'Activity',
    status: 'confirmado',
    whatsappMessage: 'Olá! Preciso de orientações sobre tratamento de canal / cirurgias na OralMaxx.',
  },
];

/**
 * Equipe Profissional
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'leonardo-s-santos',
    name: 'Dr. Leonardo S. Santos',
    role: 'Responsável Técnico & Cirurgião-Dentista',
    registration: 'CRO-MG 35235',
    isTechnicalDirector: true,
    bio: 'Coordenação clínica focada na excelência técnica, acolhimento individualizado e atualização contínua para oferecer o melhor padrão de cuidado.',
    status: 'confirmado',
  },
  {
    id: 'corpo-clinico',
    name: 'Equipe Multidisciplinar OralMaxx',
    role: 'Especialistas Integrados',
    registration: 'Profissionais Registrados no CRO-MG',
    bio: 'Corpo clínico atuante nas diversas especialidades da odontologia contemporânea, unindo tecnologia de ponta a um olhar humanizado.',
    status: 'confirmado',
  },
];

/**
 * Jornada de Atendimento (3 etapas simples)
 */
export const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Entre em contato',
    description: 'Converse com a recepção da OralMaxx pelo WhatsApp de forma ágil, tirando dúvidas iniciais sobre seu caso.',
  },
  {
    step: '02',
    title: 'Agende sua avaliação',
    description: 'Verifique a disponibilidade e combine o melhor dia e horário para seu atendimento presencial na clínica.',
  },
  {
    step: '03',
    title: 'Venha conhecer a OralMaxx',
    description: 'Receba uma recepção acolhedora, diagnóstico detalhado e um plano de tratamento personalizado para o seu sorriso.',
  },
];

/**
 * Perguntas Frequentes
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como posso agendar uma consulta na OralMaxx?',
    answer: 'O agendamento é realizado de forma rápida e direta pelo nosso WhatsApp oficial. Basta clicar no botão "Agendar pelo WhatsApp" para iniciar a conversa com a nossa recepção e escolher o melhor horário.',
  },
  {
    question: 'Quais tratamentos a clínica oferece?',
    answer: 'A OralMaxx conta com estrutura completa para Implantodontia, Ortodontia, Harmonização Facial, Clínica Geral, Estética Dental, Endodontia (canal), Periodontia e Cirurgias. Nossa equipe auxilia você na escolha da melhor abordagem.',
  },
  {
    question: 'Posso tirar dúvidas antes de comparecer à clínica?',
    answer: 'Sim, com certeza! Nossa equipe está à disposição no WhatsApp para esclarecer dúvidas sobre os procedimentos disponíveis, estrutura e como funciona a primeira consulta de avaliação.',
  },
  {
    question: 'Onde a OralMaxx está localizada?',
    answer: 'A clínica conta com sede própria e moderna, equipada inclusive com centro radiológico integrado para maior comodidade dos pacientes. Entre em contato pelo WhatsApp para receber o endereço e rota pelo Google Maps.',
  },
  {
    question: 'Como funcionam os horários de atendimento?',
    answer: 'Atendemos de segunda a sexta-feira em horário comercial e dispomos de flexibilidade conforme a agenda clínica. Consulte a recepção pelo WhatsApp para verificar vagas nesta semana.',
  },
];

/**
 * Especialidades (comunicação visual da fachada real)
 */
export const SPECIALTIES = [
  'Implantes',
  'Ortodontia',
  'Harmonização',
  'Clínica Geral',
  'Estética',
  'Endodontia',
  'Periodontia',
  'Cirurgia Bucomaxilofacial',
];

/**
 * Galeria da Estrutura
 */
export const STRUCTURE_GALLERY = [
  {
    id: 'fachada-principal',
    title: 'Fachada Arquitetônica Contemporânea',
    description: 'Design moderno com revestimento amadeirado, comunicação visual marcante e acessibilidade.',
    imageUrl: '/images/fachada-hero-1440.webp',
    area: 'lg:col-span-8',
    ratio: 'aspect-[16/10] lg:aspect-auto lg:h-[420px]',
  },
  {
    id: 'radiologia-integrada',
    title: 'OralMaxx Radiologia Integrada',
    description: 'Torre envidraçada e setor de diagnóstico por imagem para agilidade no planejamento.',
    imageUrl: '/images/clinica-torre.webp',
    area: 'lg:col-span-4 lg:row-span-2',
    ratio: 'aspect-[4/5] lg:aspect-auto lg:h-full',
  },
  {
    id: 'comunicacao-visual',
    title: 'Identidade & Acolhimento',
    description: 'Fachada tratada com acabamento em madeira e identidade visual de alto padrão.',
    imageUrl: '/images/clinica-placa.webp',
    area: 'lg:col-span-4',
    ratio: 'aspect-[16/10] lg:aspect-auto lg:h-[320px]',
  },
  {
    id: 'acesso-principal',
    title: 'Entrada & Recepção',
    description: 'Portas envidraçadas e paisagismo integrado planejados para o seu conforto.',
    imageUrl: '/images/clinica-entrada.webp',
    area: 'lg:col-span-4',
    ratio: 'aspect-[16/10] lg:aspect-auto lg:h-[320px]',
  },
];
