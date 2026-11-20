export const services = [
  {
    id: 'landing-pages', number: '01', icon: 'landing', title: 'Landing Pages', localTitle: 'Landing pages',
    description: 'Páginas enfocadas en presentar una propuesta, un producto o una iniciativa con claridad.',
    summary: 'Una página directa para presentar una propuesta concreta y guiar la navegación hacia una acción clara.',
    includes: ['Estructura y jerarquía de contenido', 'Diseño adaptable a móvil, tablet y escritorio', 'Desarrollo de una página rápida y accesible', 'Enlaces y llamados a la acción definidos para el proyecto'],
    benefit: 'Una experiencia enfocada que permite entender rápidamente qué ofrecés y cómo seguir.',
  },
  {
    id: 'business-websites', number: '02', icon: 'website', title: 'Business Websites', localTitle: 'Sitios para negocios',
    description: 'Sitios web que organizan la información de tu negocio y la presentan con una identidad propia.',
    summary: 'Un sitio institucional para explicar quién sos, qué ofrecés y cómo las personas pueden conocer más.',
    includes: ['Arquitectura de páginas y navegación', 'Diseño visual alineado con la identidad disponible', 'Maquetación responsive', 'Metadatos básicos para buscadores'],
    benefit: 'Toda la información principal de tu negocio en una presencia online ordenada y coherente.',
  },
  {
    id: 'website-redesign', number: '03', icon: 'redesign', title: 'Website Redesign', localTitle: 'Rediseño web',
    description: 'Una nueva estructura y dirección visual para sitios que necesitan renovarse.',
    summary: 'Una revisión del sitio existente para replantear su organización, presentación y experiencia en distintas pantallas.',
    includes: ['Revisión del contenido y estructura disponibles', 'Propuesta de jerarquía y dirección visual', 'Actualización responsive de las páginas acordadas', 'Repaso de navegación y enlaces existentes'],
    benefit: 'Una experiencia más clara y actual, construida alrededor de las necesidades presentes del sitio.',
  },
  {
    id: 'website-maintenance', number: '04', icon: 'maintenance', title: 'Website Maintenance', localTitle: 'Mantenimiento web',
    description: 'Acompañamiento para conservar tu sitio actualizado y en buenas condiciones.',
    summary: 'Tareas de mantenimiento para un sitio existente, definidas según sus necesidades técnicas y el alcance acordado.',
    includes: ['Revisión inicial del sitio y su configuración', 'Actualizaciones o ajustes que se acuerden', 'Alcance y frecuencia definidos antes de comenzar', 'Coordinación sujeta a disponibilidad'],
    benefit: 'Un plan de tareas delimitado para atender el sitio según prioridades reales, sin asumir un servicio ilimitado.',
    qualification: 'Sujeto al alcance y a la disponibilidad que se acuerden para cada proyecto.',
  },
];

export const projects = [
  { name: 'Nexo Digital', category: 'SERVICIOS DIGITALES', description: 'Concepto de presencia digital para un estudio creativo.', variant: 'nexo', wide: true },
  { name: 'La Espiga', category: 'PANADERÍA ARTESANAL', description: 'Concepto visual para una marca de panadería de barrio.', variant: 'espiga' },
  { name: 'Bistro Verde', category: 'GASTRONOMÍA', description: 'Concepto de sitio para un espacio gastronómico.', variant: 'bistro' },
  { name: 'NovaTech', category: 'TECNOLOGÍA', description: 'Concepto de comunicación para una marca tecnológica.', variant: 'nova', wide: true },
];

export const values = [
  { number: '01', title: 'Un enfoque a medida', english: 'CUSTOM APPROACH', description: 'Cada proyecto parte de sus objetivos, su contexto y las personas a las que busca llegar.' },
  { number: '02', title: 'Comunicación clara', english: 'CLEAR COMMUNICATION', description: 'Acordamos prioridades y compartimos avances con lenguaje directo durante el proceso.' },
  { number: '03', title: 'Desarrollo adaptable', english: 'RESPONSIVE DEVELOPMENT', description: 'Pensamos la experiencia para que el sitio funcione en distintos tamaños de pantalla.' },
  { number: '04', title: 'Diseño con intención', english: 'THOUGHTFUL DESIGN', description: 'Cada decisión visual ayuda a ordenar el contenido y hacer más clara la navegación.' },
];

const serviceCopyEn = [
  {
    description: 'Focused pages that clearly present an offer, product, or initiative.',
    summary: 'A focused page that introduces a specific offer and guides visitors toward a clear next step.',
    includes: ['Content structure and information hierarchy', 'Responsive design for mobile, tablet, and desktop', 'Fast, accessible page development', 'Project-specific links and calls to action'],
    benefit: 'A focused experience that helps visitors quickly understand what you offer and where to go next.',
  },
  {
    description: 'Websites that organize your business information and present it with a distinct identity.',
    summary: 'An informational website that explains who you are, what you offer, and how people can learn more.',
    includes: ['Page architecture and navigation', 'Visual design aligned with the available brand identity', 'Responsive page development', 'Basic search engine metadata'],
    benefit: 'Your business essentials brought together in a clear, consistent online presence.',
  },
  {
    description: 'A new structure and visual direction for websites that are ready for a refresh.',
    summary: 'A review of your existing site to rethink its organization, presentation, and experience across screens.',
    includes: ['Review of available content and structure', 'Content hierarchy and visual direction', 'Responsive updates to the agreed pages', 'Review of existing navigation and links'],
    benefit: 'A clearer, more current experience shaped around what your site needs today.',
  },
  {
    description: 'Ongoing support to help keep your website up to date and in good shape.',
    summary: 'Maintenance tasks for an existing website, defined around its technical needs and agreed scope.',
    includes: ['Initial review of the site and its setup', 'Agreed updates or adjustments', 'Scope and frequency set before work begins', 'Scheduling subject to availability'],
    benefit: 'A defined set of tasks that addresses real priorities without assuming unlimited support.',
    qualification: 'Subject to the scope and availability agreed for each project.',
  },
];

const projectCopyEn = [
  { category: 'DIGITAL SERVICES', description: 'Concept for the digital presence of a creative studio.' },
  { category: 'ARTISAN BAKERY', description: 'Visual concept for a neighborhood bakery brand.' },
  { category: 'FOOD & HOSPITALITY', description: 'Website concept for a food and hospitality space.' },
  { category: 'TECHNOLOGY', description: 'Communication concept for a technology brand.' },
];

const valueCopyEn = [
  { title: 'Custom approach', description: 'Every project starts with its goals, context, and the people it needs to reach.' },
  { title: 'Clear communication', description: 'We agree on priorities and share progress in plain language throughout the process.' },
  { title: 'Responsive development', description: 'We shape the experience so the website works across different screen sizes.' },
  { title: 'Thoughtful design', description: 'Each visual decision helps organize the content and make navigation clearer.' },
];

export function getServices(language = 'es') {
  return services.map((service, index) => ({
    ...service,
    ...(language === 'en' ? serviceCopyEn[index] : {}),
  }));
}

export function getProjects(language = 'es') {
  return projects.map((project, index) => ({
    ...project,
    ...(language === 'en' ? projectCopyEn[index] : {}),
  }));
}

export function getValues(language = 'es') {
  return values.map((value, index) => ({
    ...value,
    ...(language === 'en' ? valueCopyEn[index] : {}),
  }));
}
