'use strict';




function sqr(round){
  return 3.13 * 1.4 * round * round;
  
}
sqr(3);
console.log( sqr);

  

let money = +prompt('Ваш месячный доход ?',40000),
  income = 'frilance' ,
  addExpenses  = prompt('Перечислите возможные расходы (через запятую)'),
  deposit = confirm('Есть ли у вас депозит'),
  mission = 250000;

console.log(addExpenses.split(', '));
console.log(deposit);


let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let addExpenses2  = prompt('Какие обязательные ежемесячные расходы у вас есть ?'),
  expenses2 = +prompt('Во сколько это обойдется ?', 10000),
  addExpenses3  = prompt('Какие обязательные ежемесячные расходы у вас есть ?'),
  expenses3 = +prompt('Во сколько это обойдется ?', 20000);


 let getExpensesMonth = function(expens){
   return 'Ваши расходы за месяц:' + expens + 'Рублэй';
  
};
let res = getExpensesMonth(expenses2 + expenses3 );
console.log('getExpensesMonth:'+ res);


function getAccumulatedMonth(){
    return money - expenses2 - expenses3;

}
let accumulatedMonth = getAccumulatedMonth();
console.log('Оставшиеся деньги, от уплаты взносов=',accumulatedMonth, 'Рублэй');




let budgeMonth = (money - expenses2 - expenses3);
console.log('Доход за месяц:' + budgeMonth);

let period = (Math.floor(mission/budgeMonth));
console.log('period=' +period);

function getTargetMonth(){
 

}
getTargetMonth();
console.log('Накопления будут достигнуты, через '+ period + ' Месяцев');

let budgetDay = Math.floor(budgeMonth / 30);
console.log(budgetDay); 


function getStatusIncome(){
if (budgetDay >= 800){
    return('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800){
    return('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300){
    return('Низкий уровень дохода');
} else if (budgetDay < 0){
    return('Что то пошло не так');
}
}
console.log('getStatusIncome()', getStatusIncome());
