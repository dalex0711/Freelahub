import { apiRequest } from '../../api/requests.js';



const hideButton = document.querySelectorAll('.hideButton');
const hideButton2 = document.querySelectorAll('.hideButton2');


const dashboardCompany = document.getElementById('dashboardCompany');

const newRequirement = document.getElementById('newRequirement');

const editVacancy = document.getElementById('editVacancy');

newRequirement.style.display = 'none';
editVacancy.style.display = 'none'


hideButton.forEach(element => {
    element.addEventListener('click', ()=>{
        hideSection()
    })
})
hideButton2.forEach(element => {
    element.addEventListener('click', ()=>{
        editSection()
    })
})

let edit = true

function editSection(){
    if(edit == true){
        dashboardCompany.style.display = 'none';
        editVacancy.style.display = 'block';
        edit = false;
    } else if(edit == false){
        dashboardCompany.style.display = 'block';
        editVacancy.style.display = 'none';
        edit = true;
    }
}

let on = true;
function hideSection(){
    if(on == true){
        dashboardCompany.style.display = 'none';
        newRequirement.style.display = 'block';
        on = false;
    } else if(on == false){
        dashboardCompany.style.display = 'block';
        newRequirement.style.display = 'none';
        on = true;
    }
}

const form = document.getElementById('form');

const requirementName = document.getElementById('requirementName');

const projectDescription = document.getElementById('projectDescription');

const jobType = document.getElementById('jobType');

const jobModality = document.getElementById('jobModality');

const addSkillButton = document.getElementById('addSkill');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const skills = document.querySelectorAll('.skillsRequired');
  const levels = document.querySelectorAll('.levelRequired');

  const skillData = [];
  const skillLevel = [];

  skills.forEach((skill, index) => {
    const skillValue = skill.value.trim();
    const levelValue = levels[index]?.value.trim();

    if (skillValue && levelValue) {
      skillData.push(skillValue);
      skillLevel.push(levelValue);
    }
  });

  const data = {
    projectName: requirementName.value,
    projectDescription: projectDescription.value,
    jobType: jobType.value,
    jobModality: jobModality.value,
    skillsRequired: skillData,
    levelRequired: skillLevel
  };
  apiRequest('POST', 'vacancy', data);
  apiRequest('GET', 'vacancy', null)
});





addSkillButton.addEventListener('click', ()=>{
    addSkill();
})

function addSkill() {
  const container = document.getElementById('skills-container');
  const div = document.createElement('div');
  div.className = "flex space-x-4";
  div.innerHTML = `
    <div class="flex items-center space-x-2 w-full mb-2">
      <!-- Technology select -->
      <select required class="skillsRequired flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="">Selecciona una tecnología</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="react">React</option>
        <option value="nodejs">Node.js</option>
        <option value="typescript">TypeScript</option>
        <option value="java">Java</option>
        <option value="docker">Docker</option>
        <option value="kubernetes">Kubernetes</option>
        <option value="devops">DevOps</option>
        <option value="postgresql">PostgreSQL</option>
        <option value="mysql">MySQL</option>
        <option value="android">Android</option>
        <option value="flutter">Flutter</option>
        <option value="security">Cybersecurity</option>
      </select>

      <!-- Level select -->
      <select required class="levelRequired w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="">Nivel</option>
        <option value="beginner">Principiante</option>
        <option value="intermediate">Intermedio</option>
        <option value="advanced">Avanzado</option>
      </select>

      <!-- Remove button -->
      <button
        type="button"
        class="ml-2 inline-flex items-center px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full hover:bg-red-200 focus:outline-none"
        onclick="this.parentElement.remove()"
        title="Eliminar">
        ✕
      </button>
    </div>
  `;
  container.appendChild(div);
}