//menu scrolled
// Función para manejar el menú al cargar la página
function handleMenuOnLoad() {
  const navSection = document.querySelector(".navSection");
  if (window.scrollY > 50) {
    navSection.classList.add("menuScrolled");
  } else {
    navSection.classList.remove("menuScrolled");
  }
}

// Ejecutar la función al cargar la página
window.addEventListener("load", handleMenuOnLoad);

// Función para manejar el menú durante el scroll
window.addEventListener("scroll", function () {
  const navSection = document.querySelector(".navSection");
  if (window.scrollY > 50) {
    navSection.classList.add("menuScrolled");
  } else {
    navSection.classList.remove("menuScrolled");
  }
});


//menu responsive

const menuToggle = document.querySelector(".menu__toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("activeMenu");
  navigation.classList.toggle("activeMenu");
});


// scroll titles history

// Obtener todos los enlaces con la clase "titleHistory"
const titleLinks = document.querySelectorAll('.titleHistory');

// Agregar un evento de clic a cada enlace
titleLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    const targetId = event.currentTarget.getAttribute('href'); // Obtener el ID del objetivo
    const targetElement = document.querySelector(targetId); // Obtener el elemento objetivo

    // Realizar el desplazamiento suave
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// scroll adopt form

const adoptButton = document.getElementById('adoptButton');
const titleForm = document.getElementById('titleForm');

adoptButton.addEventListener('click', () => {
  titleForm.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
