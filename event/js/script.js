//window.addEventListener('load', function(){

	const button = document.querySelector ('.openMenu');
	const popu = document.querySelector('.popup');
	const par = document.querySelector('.closePopup');
	const menu = document.querySelector('.menu');
	const but = document.querySelector ('.request');
const clmenu = document.querySelector('.closeMenu');

but.addEventListener('click', function() {
	popu.style.display = 'flex';
})
button.addEventListener('click', function() {
	menu.style.left = '0';
})
clmenu.addEventListener('click', function() {
	menu.style.left = '-50vw';
})
par.addEventListener('click', function() {
	popu.style.display = 'none';
})