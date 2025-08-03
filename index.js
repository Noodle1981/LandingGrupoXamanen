document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Inicializar AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // 2. Actualizar dinámicamente el año en el footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. NAVEGACIÓN ACTIVA CON INTERSECTION OBSERVER
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // 4. INICIALIZAR PARTICLES.JS (CON NUEVOS COLORES)
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#30eee2" }, // Color cyan neón de la paleta
        shape: { type: "circle" },
        opacity: { value: 1.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 7, random: true, anim: { enable: false } },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#3c84ce", // Color azul de la paleta
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_opacity: 1 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

  // 5. EFECTO DE TIPEO EN EL TÍTULO DE CONTACTO
  if (document.getElementById("contact-title")) {
    new Typed('#contact-title', {
      strings: ['Cuéntanos cómo podemos ayudarte.', 'Hablemos de tu próximo proyecto.', 'Inicia tu transformación digital.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      smartBackspace: true
    });
  }

  // 6. ANIMACIÓN SECUENCIAL DEL TÍTULO HERO
  const animatedTitle = document.querySelector('.animated-title');
  if (animatedTitle) {
    // La duración total de la animación es 9 segundos (3s para cada palabra)
    // Le damos un pequeño margen antes de mostrar el título final.
    setTimeout(() => {
      animatedTitle.classList.add('finished');
    }, 9000); // 9000 milisegundos = 9 segundos
  }

});