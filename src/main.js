import './scripts/photoswipe.js';
import './scripts/navbar.js'
import './scripts/hero.js'
import './scripts/contact.js'
import './scripts/video.js'
import './scripts/bento.js'

const langSwitcherStyle = document.createElement('style');
langSwitcherStyle.textContent = `
#lang-switcher button {
  background: transparent;
  border: 1px solid #a4d39a;
  color: #3b2c17;
  font-weight: 600;
  border-radius: 6px;
  padding: 0.3em 1em;
  margin: 0 2px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
#lang-switcher button.active, #lang-switcher button:focus {
  background: #a4d39a;
  color: #fff;
  border: 1px solid #578257;
  outline: none;
}
#lang-switcher button:hover {
  background: #d6e899;
  color: #3b2c17;
}
`;
document.head.appendChild(langSwitcherStyle);

function updateLangSwitcherActive(lang) {
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  if (enBtn && esBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    esBtn.classList.toggle('active', lang === 'es');
  }
}

const translations = {
  en: {
    brand: 'EcoGuardian',
    brandTag: 'Nurturing your future',
    navHome: 'Home',
    navEco: 'Eco Guardian',
    navBenefits: 'Benefits',
    navPricing: 'Pricing',
    navAbout: 'About Us',
    navWork: 'Work',
    navWorkWithUs: 'Work with us',
    getStarted: 'Get Started',
    heroWelcome: 'Welcome to Ecoguardian',
    heroTitle1: 'Innovation',
    heroTitle2: 'Care',
    heroDesc: 'We take care of your plants future by innovating with technologies based on IoT giving you all the information you need.',
    aboutExp: '+1 Year of Experience',
    aboutTitle: 'High end Tecnologies & usefull analytics',
    aboutBold: 'With over 200 experts giving you all the advices you need',
    aboutDesc: 'Monitor and analyze your plants and plantations data by using our sensors and services focused on increasing the performance and well being of your plants.',
    aboutList1: 'If you need to monitor the state of your plant or plantation',
    aboutList2: 'Farmers and enthusiasts all over the globe are using this kind of technology',
    aboutCta: 'Find out more ↗',
    bentoTitle: 'Benefits focused on what you need and deserve today',
    bentoDesc: 'This platform provides a smart IoT solution for plant care, offering insights and recommendations. It ensures optimal growth through monitoring, statistics, and expert advice tailored to your needs.',
    bentoGallery: 'View Gallery',
    bentoDomestic: 'Domestic Sector',
    bentoItem0Title1: 'What',
    bentoItem0Title2: 'for you',
    bentoItem0Desc: 'With Ecoguardian you maintain a constant flow of information by taking use of our data gathering and processing system. This ensures that your plants receive the best care possible.',
    bentoItem1Title: 'Made for Everyone',
    bentoItem1Desc: 'A lighter version for plant care enthusiasts.',
    bentoItem2Title1: 'Easy',
    bentoItem2Title2: 'Effective',
    bentoItem2Desc: 'With our IoT system and interactive interface',
    bentoItem3Title1: 'Manage',
    bentoItem3Title2: 'Gain Feedback',
    bentoItem3Desc: 'With access to all the plant’s analytics',
    bentoItem4Title: 'Available at all times',
    bentoItem4Desc: 'Our team of experts will aid you in all your inquiries, ensuring you receive the best support.',
    paymentsTitle: 'In both desktop and mobile',
    paymentsSubtitle: 'What are you waiting for?',
    paymentsDesc1: 'Sign up and improve the quality of life in your garden',
    paymentsDesc2: 'Select a payment plan depending on your needs',
    planDomestic: 'Domestic',
    planEnterprise: 'Enterprise',
    planCustomized: 'Customized',
    planMonth: '/ month',
    planDevice: '/ device',
    planFeat1: 'Up to 5 plants to manage',
    planFeat2: '5 Expert Inquiries per week',
    planFeat3: 'Access to our sensors',
    planFeat4: 'Free installation for 3 plants',
    planFeat5: 'Insights and Recommendations',
    planFeat6: 'Get Access to all our sensors',
    planFeat7: 'Access to actuator system',
    planFeat8: 'Monthly payments with each sensor',
    planFeat9: 'Unlimited plants',
    buyNow: 'Buy now ↗',
    teamTitle: 'A group lead by <span class="highlight">Creativity</span> and <span class="highlight">Innovation</span>',
    teamSubtitle: 'Our Startup WeMade was build upon the foundations of a better more technologically available',
    meetUs: 'Meet us',
    workTitle: 'Feeling like working with us?',
    workSubtitle: 'Join EcoGuardian and enjoy a rewarding career as a specialist in IoT and plant care.',
    workEnv: 'Great Work Environment',
    workEnvDesc: 'Be part of a collaborative and innovative team that values your ideas and growth.',
    salary: 'Competitive Salary',
    salaryDesc: 'Receive a salary that reflects your skills, experience, and dedication.',
    training: 'Continuous Training',
    trainingDesc: 'Access ongoing learning opportunities and professional development in IoT and automation.',
    impact: 'Meaningful Impact',
    impactDesc: 'Help clients improve their plant care and sustainability, making a real difference.',
    contactTitle: 'Tryout now',
    contactDesc: 'Are you passionate about IoT and plant care? We\'re looking for experts to help us innovate and improve our automated irrigation and plant care solutions. Share your skills and experience with us!',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone Number',
    skills: 'What skills or experience can you bring to our team?',
    sendInfo: 'Send Information',
    explore: 'Explore',
    footerAboutEco: 'About EcoGuardian',
    footerAboutTeam: 'About the team',
    footerContact: 'Contact',
    footerContactUs: 'Contact us',
  },
  es: {
    brand: 'EcoGuardian',
    brandTag: 'Cuidando tu futuro',
    navHome: 'Inicio',
    navEco: 'Eco Guardian',
    navBenefits: 'Beneficios',
    navPricing: 'Precios',
    navAbout: 'Sobre Nosotros',
    navWork: 'Trabaja',
    navWorkWithUs: 'Trabaja con nosotros',
    getStarted: 'Comenzar',
    heroWelcome: 'Bienvenido a Ecoguardian',
    heroTitle1: 'Innovación',
    heroTitle2: 'Cuidado',
    heroDesc: 'Cuidamos el futuro de tus plantas innovando con tecnologías basadas en IoT, dándote toda la información que necesitas.',
    aboutExp: '+1 año de experiencia',
    aboutTitle: 'Tecnología de punta y analítica útil',
    aboutBold: 'Más de 200 expertos dándote todos los consejos que necesitas',
    aboutDesc: 'Monitorea y analiza los datos de tus plantas y cultivos usando nuestros sensores y servicios enfocados en aumentar el rendimiento y bienestar de tus plantas.',
    aboutList1: 'Si necesitas monitorear el estado de tu planta o cultivo',
    aboutList2: 'Agricultores y entusiastas de todo el mundo usan esta tecnología',
    aboutCta: 'Descubre más ↗',
    bentoTitle: 'Beneficios enfocados en lo que necesitas y mereces hoy',
    bentoDesc: 'Esta plataforma provee una solución IoT inteligente para el cuidado de plantas, ofreciendo recomendaciones y análisis. Asegura el crecimiento óptimo mediante monitoreo, estadísticas y asesoría experta.',
    bentoGallery: 'Ver galería',
    bentoDomestic: 'Sector doméstico',
    bentoItem0Title1: 'Lo que',
    bentoItem0Title2: 'para ti',
    bentoItem0Desc: 'Con Ecoguardian mantienes un flujo constante de información usando nuestro sistema de recolección y procesamiento de datos. Así aseguras el mejor cuidado para tus plantas.',
    bentoItem1Title: 'Hecho para todos',
    bentoItem1Desc: 'Una versión ligera para entusiastas del cuidado de plantas.',
    bentoItem2Title1: 'Fácil',
    bentoItem2Title2: 'Efectivo',
    bentoItem2Desc: 'Con nuestro sistema IoT e interfaz interactiva',
    bentoItem3Title1: 'Gestiona',
    bentoItem3Title2: 'Recibe feedback',
    bentoItem3Desc: 'Con acceso a toda la analítica de tus plantas',
    bentoItem4Title: 'Disponible en todo momento',
    bentoItem4Desc: 'Nuestro equipo de expertos te ayudará en todas tus consultas, asegurando el mejor soporte.',
    paymentsTitle: 'En escritorio y móvil',
    paymentsSubtitle: '¿Qué esperas?',
    paymentsDesc1: 'Regístrate y mejora la calidad de vida en tu jardín',
    paymentsDesc2: 'Selecciona un plan de pago según tus necesidades',
    planDomestic: 'Doméstico',
    planEnterprise: 'Empresarial',
    planCustomized: 'Personalizado',
    planMonth: '/ mes',
    planDevice: '/ dispositivo',
    planFeat1: 'Hasta 5 plantas para gestionar',
    planFeat2: '5 consultas a expertos por semana',
    planFeat3: 'Acceso a nuestros sensores',
    planFeat4: 'Instalación gratuita para 3 plantas',
    planFeat5: 'Recomendaciones y análisis',
    planFeat6: 'Acceso a todos nuestros sensores',
    planFeat7: 'Acceso al sistema de actuadores',
    planFeat8: 'Pagos mensuales por cada sensor',
    planFeat9: 'Plantas ilimitadas',
    buyNow: 'Comprar ahora ↗',
    teamTitle: 'Un grupo guiado por la <span class="highlight">Creatividad</span> y la <span class="highlight">Innovación</span>',
    teamSubtitle: 'Nuestra startup WeMade se fundó sobre las bases de un mundo mejor y más tecnológico',
    meetUs: 'Conócenos',
    workTitle: '¿Te gustaría trabajar con nosotros?',
    workSubtitle: 'Únete a EcoGuardian y disfruta de una carrera gratificante como especialista en IoT y cuidado de plantas.',
    workEnv: 'Gran ambiente laboral',
    workEnvDesc: 'Sé parte de un equipo colaborativo e innovador que valora tus ideas y crecimiento.',
    salary: 'Salario competitivo',
    salaryDesc: 'Recibe un salario acorde a tus habilidades, experiencia y dedicación.',
    training: 'Capacitación continua',
    trainingDesc: 'Accede a oportunidades de aprendizaje y desarrollo profesional en IoT y automatización.',
    impact: 'Impacto significativo',
    impactDesc: 'Ayuda a los clientes a mejorar el cuidado y la sostenibilidad de sus plantas, marcando la diferencia.',
    contactTitle: '¡Postula ahora!',
    contactDesc: '¿Te apasiona el IoT y el cuidado de plantas? Buscamos expertos para innovar y mejorar nuestras soluciones de riego e IoT. ¡Comparte tu experiencia con nosotros!',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    skills: '¿Qué habilidades o experiencia puedes aportar al equipo?',
    sendInfo: 'Enviar información',
    explore: 'Explora',
    footerAboutEco: 'Sobre EcoGuardian',
    footerAboutTeam: 'Sobre el equipo',
    footerContact: 'Contacto',
    footerContactUs: 'Contáctanos',
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'H2' && translations[lang][key].includes('<span')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  updateLangSwitcherActive(lang);
}

function getLanguage() {
  return localStorage.getItem('lang') || 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  setLanguage(lang);
  updateLangSwitcherActive(lang);
  const enBtn = document.getElementById('lang-en');
  const esBtn = document.getElementById('lang-es');
  if (enBtn && esBtn) {
    enBtn.onclick = () => setLanguage('en');
    esBtn.onclick = () => setLanguage('es');
  }
});