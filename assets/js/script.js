let li = document.querySelector("ul").lastElementChild;
function toggleTheme() {
    const body = document.body
    const t = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    const icon = t === 'dark' ? 'fa-moon' : 'fa-sun'
    li.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    body.setAttribute('data-theme', t)
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}