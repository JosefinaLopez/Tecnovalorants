const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('#btn-menu');

const iconClosed = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"></path><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"></path></g></svg>`
const iconOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
<g fill="#D0D6F9" fill-rule="evenodd">
  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"></path>
</g>
</svg>`
window.addEventListener('scroll', function() {
    nav.classList.toggle('active', window.scrollY > 0);
});

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        btnMenu.innerHTML = iconClosed;
    } else {
        btnMenu.innerHTML = iconOpen;
    }
})