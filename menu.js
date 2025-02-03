// Menu sanduíche
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
})

// Menu normal
document.addEventListener("DOMContentLoaded", function () {
  const elemento = document.querySelector("header");
  const secao = document.querySelector("#inicio");

  const observer = new IntersectionObserver(
      ([entry]) => {
          if (!entry.isIntersecting) {
              elemento.classList.add("fixo");
          } else {
              elemento.classList.remove("fixo");
          }
      },
      { threshold: 0.1 }
  );

  observer.observe(secao);
});

// Ratrei de seção
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu li a");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const sectionId = entry.target.getAttribute("id");
                  
                  // Remove a classe ativa de todos os links
                  navLinks.forEach((link) => link.classList.remove("active"));

                  // Adiciona a classe ativa ao link correspondente
                  const activeLink = document.querySelector(`.menu li a[data-section="${sectionId}"]`);
                  if (activeLink) {
                      activeLink.classList.add("active");
                  }
              }
          });
      },
      { threshold: 0.5 } // Ativa quando 50% da seção estiver visível
  );

  sections.forEach((section) => observer.observe(section));
});
