(function () {
// Mobile nav toggle with ARIA
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (btn && nav) {
btn.addEventListener('click', () => {
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', String(open));
});
}


// Set current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();


// Ensure skip target receives focus (useful for screen readers)
const main = document.getElementById('main');
if (main) {
document.querySelectorAll('.skip-link').forEach(link => {
link.addEventListener('click', () => main.focus());
});
}
})();