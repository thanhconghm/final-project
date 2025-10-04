// playground.js
import { loadLocal, saveLocal } from './utils/storage.js';

export function renderPlayground(containerId) {
  const container = document.getElementById(containerId);
  let code = loadLocal('playground:code', `// Try JS here\nconsole.log('Hello from Playground');`);

  container.innerHTML = `
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold">Playground</h3>
          <button id="run-btn" class="px-3 py-1 rounded-md bg-indigo-600 text-white">Run</button>
        </div>
        <textarea id="playground-code" class="w-full h-[400px] p-3 border rounded-md font-mono text-sm">${code}</textarea>
      </div>
      <div>
        <h4 class="font-semibold">Output</h4>
        <iframe id="playground-output" class="w-full h-[440px] mt-2 border rounded-md"></iframe>
      </div>
    </div>
  `;

  const codeArea = document.getElementById('playground-code');
  const iframe = document.getElementById('playground-output');

  document.getElementById('run-btn').addEventListener('click', () => {
    const html = `
      <!doctype html>
      <html>
        <body>
          <div id="out"></div>
          <script>
            console.log = function(...args){
              const el = document.getElementById('out');
              el.innerHTML += args.map(a=>String(a)).join(' ') + '<br>';
            };
            try { ${codeArea.value} } catch(e) { document.getElementById('out').innerText = 'Error: ' + e.message; }
          <\/script>
        </body>
      </html>
    `;
    iframe.srcdoc = html;
  });

  codeArea.addEventListener('input', () => saveLocal('playground:code', codeArea.value));
}
