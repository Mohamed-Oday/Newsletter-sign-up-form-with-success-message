emailForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    errorMessage.textContent = "";
    emailInput.classList.remove("bg-errorBg", "border-Tomato");
    emailInput.classList.add("bg-white", "border-Grey");
    localStorage.setItem('subEmail', email)
    window.location.href = "thanks.html";
  } else {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.remove("bg-white", "border-Grey");
    emailInput.classList.add("bg-errorBg", "border-Tomato");
    return;
  }
});
