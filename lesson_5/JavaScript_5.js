'use strict';


  

let money = +prompt('Ваш месячный доход ?',40000),
  income = 'frilance' ,
  addExpenses  = prompt('Перечислите возможные расходы (через запятую)'),
  deposit = confirm('Есть ли у вас депозит'),
  mission = 250000,
  period = 3;

  let start = function(){
    

    do {
     
     console.log(money);
     money = +prompt('Ваш месячный доход ?');
    }
      while (isNaN(money) || money == '' || money == null);
    
    
  };
start();



let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


let addExpenses2,
    addExpenses3 ;
  

 let expensesMonth = function(){
   
   let sum = 0;

   for(let i=0; i<2; i++){

    if(i === 0){
      addExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
     } else if(i === 1){
    addExpenses3  = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
  
     }
     sum += +prompt('Во сколько это обойдется ?', 10000);

     while (isNaN(sum) || sum == '' || sum == null){
      console.log(sum);
      sum = +prompt('Во сколько это обойдется ?');
     }

   }
   return 'Ваши расходы за месяц:' + sum + 'Рублэй';
  
};
let expensesAmount = expensesMonth();



let accumulatedMonth = function (){
    return money - (expensesAmount);

};






let budgePeriod = function(){
 return money * period;
};


let expensisPeriod = function(){
return expensesAmount * period;
};

let incomePeriod = function(){
return budgePeriod() - expensisPeriod();

};

let budgetDay = Math.floor(money / 30);
console.log(budgetDay); 
console.log(money);



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
