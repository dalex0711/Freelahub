import { getUserLogged } from './services/storage';
import { createIcons, icons } from 'lucide';
// Maps each path to its corresponding HTML view

const routes = {
    '/': 'src/views/homeLanding.html',
    '/login': 'src/views/login.html',
    '/register': 'src/views/register.html',
    '/dashboard': 'src/views/dashboard.html',
    '/student': 'src/views/student/index.html',
    '/company': 'src/views/company/index.html',
    '/profile': 'src/views/student/profile.html',
};
// Maps each path to its JavaScript controller

const controllers = {
    '/'   : './controllers/homeLanding.js',
    '/login'    : './controllers/login.js',
    '/register' : './controllers/register.js',
    '/dashboard': './controllers/dashboard.js',
    '/student': './controllers/student/index.js',
    '/company'  : './controllers/company/index.js',
    '/profile'  : './controllers/student/profile.js',
};


// Access rules for protected routes
const guards = {
    '/login'     : (user) => !user,
    '/dashboard' : (user) => user?.rol === 'admin',
    '/student': (user) => user?.rol === 'student',
    '/company'   : (user) => user?.rol === 'company',

};

const app = document.getElementById('app');

// Loads the HTML view and initializes the controller if available
export async function loadView(path) {
    const view = routes[path] || routes['/404'];
    try {
        const response = await fetch(view);
        const viewContent = await response.text();
        app.innerHTML = viewContent;

        if (controllers[path]) {
            const module = await import(controllers[path]);
            if (module.init) {
                module.init();
            }
        }
    } catch (error) {
        console.log(error);
        app.innerHTML = `<h1> Unexpected error while loading the view. </h1>`;
    }
}

// Validates access based on user role and defined guards
function checkAcces(path, user) {
    const guard = guards[path];

    if (guard && !guard(user)) {
        if (path === '/login' && user) {
          switch (user.rol) {
            case 'admin':
                return '/admin';
            case 'company':
                return '/company';
            case 'student':
                return '/student';
            }
}
        return user ? '/404' : '/login';
    }

    return path;
}

// Main navigation handler
export function navegation(path) {
   
    const user = getUserLogged();
    const accessRoute = checkAcces(path, user);

    if (!accessRoute) return;
    history.pushState(null, null, accessRoute);
    loadView(accessRoute);
}

// Handles browser back/forward button
window.addEventListener('popstate', () => {
    navegation(location.pathname);
});

// Intercepts <a data-link> clicks for SPA routing
export function navegationTag() {
    document.addEventListener('click', (event) => {
        const elemento = event.target.closest('[data-link]');
        if (!elemento) return;

        event.preventDefault();

        const path = elemento.getAttribute('href') || elemento.getAttribute('data-link');
        if (path) {
            navegation(path);
        }
    });
}
