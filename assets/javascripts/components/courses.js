// courses.js

// Example course data
const COURSES = [
  {
    id: 'js-fundamentals',
    title: 'JavaScript Fundamentals',
    tagline: 'Learn core JS: types, functions, DOM, async',
    level: 'Beginner'
  },
  {
    id: 'py-web',
    title: 'Python for Web',
    tagline: 'Build a small web app with Flask',
    level: 'Intermediate'
  }
];

// Progress and event callback example
function onCourseOpen(courseId) {
  alert(`Open course: ${courseId}`);
}

// Render a single course card
function renderCourseCard(course, container, onOpen) {
  const card = document.createElement('article');
  card.className = 'border rounded-lg p-4 flex flex-col justify-between hover:shadow transition';

  card.innerHTML = `
    <div>
      <h3 class="font-semibold">${course.title}</h3>
      <p class="text-sm text-slate-500">${course.tagline}</p>
    </div>
    <div class="flex justify-between items-center mt-3">
      <span class="text-xs border rounded px-2 py-1">${course.level}</span>
      <button class="bg-indigo-600 text-white px-3 py-1 rounded">View</button>
    </div>
  `;

  // Attach event listener to the button
  const btn = card.querySelector('button');
  btn.addEventListener('click', () => onOpen(course.id));

  container.appendChild(card);
}

// Render all courses
export function renderCourses(containerId, courses = COURSES, onOpen = onCourseOpen) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear previous cards

  courses.forEach(course => renderCourseCard(course, container, onOpen));
}

// Initial render example
renderCourses('courses-container');
