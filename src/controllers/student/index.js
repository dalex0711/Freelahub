  import { createIcons, icons } from 'lucide';
   createIcons({ icons });
  // Menú móvil toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });

  // Ruta activa
  const currentPath = location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Sombra al hacer scroll
  window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('bg-white', 'shadow-md');
    header.classList.remove('bg-white/80');
  } else {
    header.classList.add('bg-white/80');
    header.classList.remove('bg-white', 'shadow-md');
  }
});

