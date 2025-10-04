export const MOCK_COURSES = [
  {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    tagline: 'Learn core JS: types, functions, DOM, async',
    lessons: [
      { id: 'intro', title: 'Intro & Setup', duration: '6m', body: 'Welcome to JS!' },
      { id: 'types', title: 'Types & Variables', duration: '10m', body: 'Numbers, strings, booleans...' }
    ]
  },
  {
    id: 'py-web',
    title: 'Python for Web',
    tagline: 'Build a small web app with Flask',
    lessons: [
      { id: 'setup', title: 'Python Setup', duration: '8m', body: 'Installing Flask...' },
      { id: 'routes', title: 'Routes & Templates', duration: '14m', body: 'Routing, templates...' }
    ]
  }
];
