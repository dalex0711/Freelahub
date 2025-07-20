import { getUserLogged } from '../../services/storage.js';
import {validateInputs} from '../../services/validations.js'
import { apiRequest } from '../../api/requests.js';
import { createIcons, icons } from 'lucide';


export async function init() {
   createIcons({ icons });
   const userDetails = await apiRequest('GET', `profiles?userId=${user.id}`);
  if (location.search === '') {
    const user = getUserLogged();
    const userDetails = await apiRequest('GET', `profiles?userId=${user.id}`);
    
    if (userDetails.length === 0) {
      userDetailsForm(user);
    }else{
         renderProfile(userDetails)
    }
  }
}

function userDetailsForm(user) {
    const seccion = document.querySelector('#formulario-perfil');
    
    seccion.classList.remove('hidden');

    const form = document.querySelector('#perfil-form')
    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const detailData = {
      userId: user.id,
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      ciudad: formData.get('ciudad'),
      institucion: formData.get('institucion'),
      programa: formData.get('programa'),
      habilidades: formData.get('habilidades').split(',').map(h => h.trim()),
      descripcion : formData.get('descripcion'),
      cvUrl: formData.get('cvUrl')
    };
    
    await apiRequest('POST','profiles', detailData)
    return
    }
)}



function renderProfile(userDetails){

}


