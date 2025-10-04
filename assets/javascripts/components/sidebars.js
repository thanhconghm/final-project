// sidebar.js
import { loadLocal } from './utils/storage.js';

export function renderSidebar(containerId, courses) {
  const container = document.getElementById(containerId);
  const progressMap = loadLocal('progress:v1', {});

  container.innerHTML = `
    <div class="space-y-4">
      <div class="p-4 bg-white border rounded">
        <h4 class="font-semibold">Your progress</h4>
        <p class="text-sm text-slate-500">Saved locally. Create an account to sync progress.</p>
        <div class="mt-3 text-sm" id="sidebar-progress"></div>
      </div>

      <div class="p-4 bg-white border rounded">
        <h4 class="font-semibold">Tips</h4>
        <ul class="text-sm mt-2 space-y-2">
          <li>Work through exercises in the Playground.</li>
          <li>Take notes for each lesson (saved locally).</li>
          <li>Consider adding tests and auto-grading later.</li>
        </ul>
      </div>
    </div>
  `;

  const progressContainer = document.getElementById('sidebar-progress');
  progressContainer.innerHTML = '';
  courses.forEach(c => {
    const done = Object.keys(progressMap[c.id] || {}).filter(k => progressMap[c.id][k]).length;
    const total = c.lessons.length;
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between py-1';
    div.innerHTML = `<div class="text-sm">${c.title}</div><div class="text-xs text-slate-500">${done}/${total}</div>`;
    progressContainer.appendChild(div);
  });
}
