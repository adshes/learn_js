const Colored = document.querySelector('.page');
let que = prompt('Какой цвет');
Colored.style.backgroundColor = que;

const Colored1 = document.querySelector('.page');
let que1 = prompt('Какой текст');
Colored1.style.color = que1;

const Kiu = document.querySelector('.name');
let quest = prompt('Какое имя');
Kiu.innerHTML = quest;

const Kit = document.querySelector('img');
let ques = prompt('адрес картинки');
Kit.innerHTML = ques;

const shortBio = document.querySelector('.shortBio');
shortBio.innerHTML = prompt('Введите текст страницы');

shortBio.className += ' animated';


//let src = document.querySelector('img');
//src.innerHTML = prompt('Введите текст страницы');