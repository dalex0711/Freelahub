// Maps each path to its corresponding HTML view

const routes = {
    '/': 'src/views/homeLanding.html',
    '/login': 'src/views/login.html',
    '/register': 'src/views/register.html',
    '/dashboard': 'src/views/dashboard.html',
}
// Maps each path to its JavaScript controller

const controllers = {
    '/'   : './controllers/homeLanding.js',
    '/login'    : './controllers/login.js',
    '/register' : './controllers/register.js',
    '/dashboard': './controllers/dashboard.js',
    '/404'      : 'src/controllers/404.js',
};
// Access rules for protected routes

const app = document.getElementById('app');

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