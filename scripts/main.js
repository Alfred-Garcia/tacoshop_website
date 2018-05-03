const menu_bars = document.getElementsByClassName('fa-bars')[0];
const main_nav = document.getElementsByTagName('nav')[0];

menu_bars.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  main_nav.classList.toggle("hidden");
}


console.log(menu_bars);
console.log(main_nav);
