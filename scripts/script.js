/* bron: https://codepen.io/robertspier/pen/wvjqWbe?editors=0010 */
/* header benoemen in js */    
const nav = document.querySelector('header nav');

/* maakt een event aan wanneer er gescrolled wordt in je browser */    
window.addEventListener('scroll', onScroll);

/* maakt een functie aan wanneer de y as verplaatst */    
function onScroll() {
	console.log(window.scrollY)

/* wanneer er verder is gescrolled dan 75px */    
    if(window.scrollY > 75) {

/* dan wordt er een class toegevoegd aan de nav */  
    nav.classList.add('kleurnav'); 
	} else {

/* wanneer dat niet het geval is, wordt de class weggehaald */  
    nav.classList.remove('kleurnav');
	}
}

/* bron: https://codepen.io/robertspier/pen/PoeJpVO */
/* menu laten verdwijnen en laten zien */
const deButton = document.querySelector("nav button");
const deNav = document.querySelector(".main-nav");

/* Wanneer er geklikt wordt komt het menu tevoorschijn */
deButton.addEventListener("click", toggleMenu);

/* het menu kan in en uit nu */
function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}