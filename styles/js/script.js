const Colored = document.querySelector('.colored');
console.log(Colored);
console.log(Colored.style);

let quest = prompt('Какой цвет');
Colored.style.backgroundColor = quest;