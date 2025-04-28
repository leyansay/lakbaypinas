document.addEventListener("DOMContentLoaded", () => {
  // Determine the correct path based on the current page
  let path = window.location.pathname.includes('luzon') ||
             window.location.pathname.includes('visayas') ||
             window.location.pathname.includes('mindanao')
             ? '../partials/navbar.html'
             : 'partials/navbar.html';

  fetch(path)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => {
      console.error("Failed to load navbar:", err);
    });
});
