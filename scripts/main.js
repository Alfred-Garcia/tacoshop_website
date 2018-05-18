const menuBars = document.querySelector('.fa-bars');
const siteNav = menuBars.nextElementSibling;

menuBars.addEventListener('click', siteNavReveal);
siteNav.addEventListener('mouseleave', siteNavHide);

function siteNavReveal() {
  siteNav.classList.toggle('reveal');
}
function siteNavHide() {
  siteNav.classList.remove('reveal');
}
