function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("signin-password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("currentUser", matchedUser.username);
    alert("Login successful!");
    window.location.href = "main.html";
  } else {
    alert("Invalid email or password");
  }
});
