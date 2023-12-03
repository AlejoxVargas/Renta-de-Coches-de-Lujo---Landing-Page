/*====== Home 1 and header ======*/
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

/*====== Modal ======*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

/*====== Home 2 ======*/

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*====== Validación de formulario ======*/

var emailError = document.getElementById('email-error');

function validateEmail(){
    var email = document.getElementById('email').value.trim();

    if(email.length === 0){
        emailError.innerHTML = 'Email es requerido';
        // Oculta los iconos y el mensaje de éxito
        hideIcons();
        return;
    }

    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = 'Escribe de nuevo el Email';
        // Oculta el ícono de éxito y muestra el ícono de error
        showIcons(false);
        return;
    }

    emailError.innerHTML = 'Válido';
    // Muestra el ícono de éxito y oculta el ícono de error
    showIcons(true);
}

function showIcons(isValid) {
    var errorIcon = document.querySelector('.error-icon');
    var successIcon = document.querySelector('.success-icon');

    if (isValid) {
        errorIcon.classList.add('hidden');
        successIcon.classList.remove('hidden');
    } else {
        errorIcon.classList.remove('hidden');
        successIcon.classList.add('hidden');
    }
}

function hideIcons() {
    var errorIcon = document.querySelector('.error-icon');
    var successIcon = document.querySelector('.success-icon');

    errorIcon.classList.add('hidden');
    successIcon.classList.add('hidden');
}

/*======= Modo nocturno =======*/
// Obtén una colección de elementos con la clase 'icon-modo-noche'
var icons = document.getElementsByClassName('icon-modo-noche');

// Itera sobre la colección de elementos
for (var i = 0; i < icons.length; i++) {
    // Asigna un controlador de eventos clic a cada elemento
    icons[i].addEventListener('click', function() {
        // Alternar la clase 'dark-theme' en el cuerpo del documento
        document.body.classList.toggle('dark-theme');
    });
}

