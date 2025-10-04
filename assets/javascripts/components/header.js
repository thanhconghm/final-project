// header.js

// Simulate a "user" object
let user = null;

// Function to render the header
export function renderHeader({
  userState = null,
  onLogin = () => alert('Login clicked'),
  onLogout = () => alert('Logout clicked'),
  onSearch = (q) => console.log('Search:', q),
  onOpenPlayground = () => alert('Playground opened')
} = {}) {
  user = userState;

  const container = document.getElementById('header-container');
  container.innerHTML = ''; // clear previous

  const header = document.createElement('header');
  header.className = 'flex justify-between items-center py-4 px-6 bg-white/80 backdrop-blur border-b';

  header.innerHTML = `
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">CD</div>
      <div>
        <h1 class="font-semibold">CodeDojo</h1>
        <p class="text-xs text-slate-500">Learn by doing</p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <input id="search-input" placeholder="Search..." class="border px-3 py-2 rounded-md text-sm w-64"/>
      <button id="playground-btn" class="border rounded-md px-3 py-2 hover:bg-slate-50">Playground</button>
      <span id="auth-container"></span>
    </div>
  `;

  container.appendChild(header);

  // Events
  document.getElementById('search-input').addEventListener('input', e => onSearch(e.target.value));
  document.getElementById('playground-btn').addEventListener('click', onOpenPlayground);

  // Auth section
  const authContainer = document.getElementById('auth-container');
  authContainer.innerHTML = '';
  if (user) {
    const userDiv = document.createElement('div');
    userDiv.className = 'flex items-center gap-2';
    userDiv.innerHTML = `
      <img src="${user.photoURL}" alt="avatar" class="w-8 h-8 rounded-full"/>
      <span class="text-sm">${user.displayName}</span>
      <button id="logout-btn" class="text-indigo-600">Logout</button>
    `;
    authContainer.appendChild(userDiv);
    document.getElementById('logout-btn').addEventListener('click', onLogout);
  } else {
    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Login';
    loginBtn.className = 'text-indigo-600';
    loginBtn.addEventListener('click', onLogin);
    authContainer.appendChild(loginBtn);
  }
}

// Initial render example
renderHeader({
  userState: null,
  onLogin: () => {
    console.log('Login clicked');
    // Simulate login
    const fakeUser = { displayName: 'Jane Doe', photoURL: 'https://i.pravatar.cc/150?img=3' };
    renderHeader({ userState: fakeUser, onLogin: () => {}, onLogout: () => renderHeader({ userState: null }) });
  }
});
