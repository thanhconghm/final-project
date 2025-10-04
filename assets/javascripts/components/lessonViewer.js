// lessonViewer.js
import { saveLocal, loadLocal } from './utils/storage.js';

export function renderLessonViewer(containerId, course, lessonId, onMarkDone) {
  const container = document.getElementById(containerId);
  const lesson = course.lessons.find(l => l.id === lessonId) || course.lessons[0];
  const progress = loadLocal('progress:v1', {})[course.id] || {};
  let notes = loadLocal(`notes:${course.id}:${lesson.id}`, '');

  container.innerHTML = `
    <section class="p-4 bg-white rounded-lg border">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-xl font-semibold">${lesson.title}</h2>
          <p class="text-sm text-slate-500">${lesson.duration} • ${course.title}</p>
        </div>
        <div class="flex flex-col items-end gap-2">
          <button id="toggle-done" class="px-3 py-1 rounded-md border">
            ${progress[lesson.id] ? 'Mark as undone' : 'Mark done'}
          </button>
          <div class="text-sm text-slate-500">${progress[lesson.id] ? 'Completed' : 'Not done'}</div>
        </div>
      </div>
      <hr class="my-4"/>
      <div class="prose max-w-none">
        <p>${lesson.body}</p>
      </div>
      <div class="mt-4">
        <label class="block text-sm">Personal notes</label>
        <textarea id="lesson-notes" class="w-full mt-2 p-2 border rounded-md h-28">${notes}</textarea>
      </div>
    </section>
  `;

  // Bind events
  document.getElementById('toggle-done').addEventListener('click', () => {
    progress[lesson.id] = !progress[lesson.id];
    saveLocal('progress:v1', { ...loadLocal('progress:v1', {}), [course.id]: progress });
    onMarkDone(progress);
    renderLessonViewer(containerId, course, lessonId, onMarkDone); // re-render
  });

  document.getElementById('lesson-notes').addEventListener('input', (e) => {
    notes = e.target.value;
    saveLocal(`notes:${course.id}:${lesson.id}`, notes);
  });
}
