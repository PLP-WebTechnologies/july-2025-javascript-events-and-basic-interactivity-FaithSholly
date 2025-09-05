// ====================
// Part 1: Event Handling
// ====================
const clickMeBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickMeBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// ====================
// Part 2: Interactive Elements
// ====================

// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countValue = document.getElementById("countValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

// FAQ Toggle
const faqQuestion = document.getElementById("faqQuestion");
const faqAnswer = document.getElementById("faqAnswer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});

// ====================
// Part 3: Form Validation
// ====================
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from refreshing the page

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email (using regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email!";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password (at least 6 chars)
  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters!";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Message
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    myForm.reset();
  }
});