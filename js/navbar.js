document.addEventListener("DOMContentLoaded", function () {
    console.log("navbar.js carregado"); // Verifique se está sendo exibido no console
    fetch("partials/navbar.html")
      .then((response) => response.text())
      .then((html) => {
        // Insert navbar into the placeholder
        document.getElementById("navbar").innerHTML = html;
  
        // Highlight the active link
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll(".nav-link").forEach((link) => {
          if (link.getAttribute("href").includes(currentPage)) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      })
      .catch((err) => console.warn("Error loading navbar: ", err));
  });
  