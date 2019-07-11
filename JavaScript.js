'use strict';

//alert('Привет Мне');
let money = +prompt('Ваш месячный доход ?');

let addExpenses  = prompt('Перечислите возможные расходы (через запятую)');
console.log(addExpenses.split(', '));

let deposit = confirm('Есть ли у вас депозит');
console.log(deposit);

let income = 'frilance' ;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let addExpenses2  = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
let question2 = +prompt('Во сколько это обойдется ?');
let addExpenses3  = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
let question3 = +prompt('Во сколько это обойдется ?')



let mission = 250000;



let budgeMonth = (money - question2 - question3);
console.log('Доход за месяц:' + budgeMonth);

let period = (Math.round(mission/budgeMonth));
console.log('period=' +period);


let budgetDay = (budgeMonth / 30);
console.log(budgetDay); 



if (budgetDay >= 800){
    console.log('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800){
    console.log('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300){
    console.log('Низкий уровень дохода');
} else if (budgetDay < 0){
    console.log('Что то пошло не так');
}



