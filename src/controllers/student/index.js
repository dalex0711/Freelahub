import { createIcons, icons } from 'lucide';
import { apiRequest } from '../../api/requests.js';


export async function init() {   
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

    createIcons({ icons });
    renderVacancy()


  }



//   async function renderVacancy() {

//   const container = document.querySelector('#offers');
//   const template = document.querySelector('#job-card-template');

//   try {
//     const container = document.querySelector('#offers');
// const template = document.querySelector('#job-card-template');

// const ofertas = await apiRequest('GET', 'vacancy');

// ofertas.forEach(oferta => {
//   const clone = template.content.cloneNode(true);


//   clone.querySelector('.job-title').textContent = oferta.projectName || 'Sin nombre';

  
//   const type = oferta.jobType || 'No especificado';
//   const modality = oferta.jobModality || 'Presencial';
//   clone.querySelector('.job-subinfo').textContent = `${type} • ${modality}`;

  
//   const skillsDiv = clone.querySelector('.job-skills');
//   if (Array.isArray(oferta.skillsRequired)) {
//     oferta.skillsRequired.forEach((skill, index) => {
//       const level = oferta.levelRequired?.[index] || 'N/A';
//       const skillItem = document.createElement('li');
//       skillItem.className = "flex items-center gap-2";
//       skillItem.innerHTML = `
//         <i data-lucide="laptop" class="w-4 h-4 text-gray-500"></i>
//         <span class="capitalize font-medium">${skill}</span>
//         <span class="text-xs bg-slate-100 border border-slate-300 text-slate-600 px-2 py-0.5 rounded-full">${level}</span>
//       `;
//       skillsDiv.appendChild(skillItem);
//     });
//   }

//   // Descripción
//   clone.querySelector('.job-description').textContent = oferta.projectDescription || 'Sin descripción';

//   container.appendChild(clone);
// });createIcons({ icons });
    

//   } catch (error) {
//     console.error('Error cargando ofertas:', error);
//   }
// }

  


















  

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

