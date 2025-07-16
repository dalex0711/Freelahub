import './style.css';
import { loadView } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    loadView(window.location.pathname);
});