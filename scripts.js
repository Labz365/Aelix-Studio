const translations = {
  en: {
    tagline: 'Made for students by students',
    headline: 'Aelix Studios builds premium mobile experiences for learners.',
    intro: 'We design friendly, creative mobile applications that help students stay organized, focused, and inspired.',
    viewProject: 'View Project',
    aboutTeam: 'About the team',
    heroProjectTitle: 'Student-first tools',
    heroProjectCopy: 'Launching the first Aelix app to make campus life easier and more productive.',
    projectsTitle: 'Project spotlight',
    projectsSubtitle: 'One mobile application, built to help students.',
    blogTitle: 'News & insights',
    blogSubtitle: 'Stories, updates, and student-led ideas.',
    visitBlog: 'Visit the blog'
  },
  es: {
    tagline: 'Hecho para estudiantes por estudiantes',
    headline: 'Aelix Studios crea experiencias móviles premium para aprendices.',
    intro: 'Diseñamos aplicaciones móviles amigables y creativas que ayudan a los estudiantes a mantenerse organizados, concentrados e inspirados.',
    viewProject: 'Ver proyecto',
    aboutTeam: 'Sobre el equipo',
    heroProjectTitle: 'Herramientas para estudiantes',
    heroProjectCopy: 'Lanzando la primera aplicación de Aelix para facilitar la vida estudiantil.',
    projectsTitle: 'Proyecto destacado',
    projectsSubtitle: 'Una aplicación móvil, construida para ayudar a estudiantes.',
    blogTitle: 'Noticias y reflexiones',
    blogSubtitle: 'Historias, actualizaciones e ideas dirigidas por estudiantes.',
    visitBlog: 'Visitar el blog'
  }
};

function setTheme(theme) {
  document.body.classList.toggle('theme-light', theme === 'light');
  document.body.classList.toggle('theme-dark', theme !== 'light');
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  localStorage.setItem('aelixTheme', theme);
}

function setLanguage(lang) {
  const strings = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (strings[key]) {
      element.textContent = strings[key];
    }
  });
  localStorage.setItem('aelixLang', lang);
  const selector = document.getElementById('langSelector');
  if (selector) selector.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('aelixTheme') || 'dark';
  setTheme(savedTheme);

  const savedLang = localStorage.getItem('aelixLang') || 'en';
  setLanguage(savedLang);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }

  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.addEventListener('change', (event) => {
      setLanguage(event.target.value);
    });
  }
});
