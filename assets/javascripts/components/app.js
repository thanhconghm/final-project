import { renderHeader } from './header.js';
import { renderCourses } from './courses.js';
import { renderLessonViewer } from './lessonViewer.js';
import { renderSidebar } from './sidebar.js';
import { renderPlayground } from './playground.js';
import { MOCK_COURSES } from './data/courses.js';
import { googleSignIn, googleSignOut, listenToAuthChanges } from './firebase.js';

let user = null;
let selectedCourseId = null;

// Initialize auth listener
listenToAuthChanges(u => {
  user = u;
  renderApp();
});

function openCourse(courseId) {
  selectedCourseId = courseId;
  renderApp();
}

function openPlayground() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div id="playground-container"></div>`;
  renderPlayground('playground-container');
}

function renderApp() {
  renderHeader({
    userState: user,
    onLogin: googleSignIn,
    onLogout: googleSignOut,
    onSearch: query => console.log('search:', query),
    onOpenPlayground: openPlayground
  });

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="grid grid-cols-3 gap-6">
      <section class="col-span-2" id="courses-container"></section>
      <aside id="sidebar-container"></aside>
    </div>
  `;

  const coursesContainer = document.getElementById('courses-container');
  const sidebarContainer = document.getElementById('sidebar-container');

  if (!selectedCourseId) {
    renderCourses('courses-container', MOCK_COURSES, openCourse);
  } else {
    const course = MOCK_COURSES.find(c => c.id === selectedCourseId);
    coursesContainer.innerHTML = `<div id="lesson-container"></div>`;
    renderLessonViewer('lesson-container', course, course.lessons[0].id, p => console.log('progress updated', p));
  }

  renderSidebar('sidebar-container', MOCK_COURSES);
}

// Initial render
renderApp();
