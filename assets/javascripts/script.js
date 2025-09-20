// Toggle password visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// Toggle profile dropdown
function toggleMenu() {
  const dropdown = document.getElementById("profile-dropdown");
  dropdown.classList.toggle("hidden");
}
