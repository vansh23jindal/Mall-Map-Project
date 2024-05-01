const form = document.getElementById("forgot-password-form");
const emailInput = document.getElementById("email");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;

  try {
    const response = await fetch("http://localhost:27017/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      messageDiv.textContent = "A password reset link has been sent to your email.";
    } else {
      messageDiv.textContent = "Failed to send password reset link.";
    }
  } catch (error) {
    console.error(error);
    messageDiv.textContent = "Failed to send password reset link.";
  }
});