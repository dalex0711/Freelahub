

export function renderPersonalInfoCard(container) {
   
  const data = {
    nombre: "Dalexa",
    apellido: "Sanjuan",
    email: "dalexasanjua14@gmail.com",
    telefono: "+57 3012150337",
    bio: "Estudiante en búsqueda de oportunidades laborales.",
  };

  // Creamos los elementos HTML
  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow p-6 max-w-xl mx-auto';

  const header = document.createElement('div');
  header.className = 'flex justify-between items-center mb-4';
  header.innerHTML = `<h2 class="text-xl font-bold">Información Personal</h2>
    <button id="editBtn" class="text-sm text-blue-600 hover:underline">✏️ Editar</button>`;

  const viewMode = document.createElement('div');
  viewMode.id = 'viewMode';
  viewMode.innerHTML = `
    <p><strong>Nombre:</strong> ${data.nombre}</p>
    <p><strong>Apellido:</strong> ${data.apellido}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.telefono}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
  `;

  const editMode = document.createElement('form');
  editMode.id = 'editMode';
  editMode.className = 'hidden space-y-4';
  editMode.innerHTML = `
    <input class="w-full border p-2 rounded" name="nombre" value="${data.nombre}" />
    <input class="w-full border p-2 rounded" name="apellido" value="${data.apellido}" />
    <input class="w-full border p-2 rounded" name="email" value="${data.email}" />
    <input class="w-full border p-2 rounded" name="telefono" value="${data.telefono}" />
    <textarea class="w-full border p-2 rounded" name="bio">${data.bio}</textarea>
    <div class="text-right">
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
    </div>
  `;

  // Agregar al DOM
  card.appendChild(header);
  card.appendChild(viewMode);
  card.appendChild(editMode);
  container.appendChild(card);

  // Interactividad
  const editBtn = header.querySelector('#editBtn');
  editBtn.addEventListener('click', () => {
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');
  });

  editMode.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(editMode);
    data.nombre = formData.get('nombre');
    data.apellido = formData.get('apellido');
    data.email = formData.get('email');
    data.telefono = formData.get('telefono');
    data.bio = formData.get('bio');

    viewMode.innerHTML = `
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Apellido:</strong> ${data.apellido}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.telefono}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
    `;

    editMode.classList.add('hidden');
    viewMode.classList.remove('hidden');
  });
}
