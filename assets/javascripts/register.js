function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (username.length < 6) return alert("Username must be at least 6 characters");
  if (password.length < 8) return alert("Password must be at least 8 characters");
  if (password !== confirmPassword) return alert("Passwords do not match");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((u) => u.email === email)) {
    return alert("Email already registered");
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully! Please sign in.");
  window.location.href = "login.html";
});
