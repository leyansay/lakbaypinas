// navbar.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("partials/navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      })
      .catch(err => {
        console.error("Failed to load navbar:", err);
      });
  });
  