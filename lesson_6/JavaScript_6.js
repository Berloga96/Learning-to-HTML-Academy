'use strict';

//
let car = {
  model: 'mazda',
  year: 2006
};
car.ride = function(speed){
  console.log('Мапшина едет со скоростью' , speed , 'Км/ч');
};
car.ride(60);
stop();
car.stop = stop;
car.stop();

function stop(){
  console.log('Машина стоит,скорость 0 км/ч');
}


//
let money,
    start = function(){
    do {
     
     
     money = +prompt('Ваш месячный доход ?');
    }
      while (isNaN(money) || money == '' || money == null);
  };
start();

console.log('money', money);

let appData = {
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function(){
      let  addExpenses  = prompt('Перечислите возможные расходы (через запятую)');
           appData.addExpenses = addExpenses.toLowerCase().split(',');
           appData.deposit = confirm('Есть ли у вас депозит');
 
  }

};
  



  



let expenses2,
    expenses3 ;
  


  appData.getExpensesMonth = function(){
   
   let sum = 0, question;

   for(let i=0; i<2; i++){

    if(i === 0){
      expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
     } else {
      expenses3  = prompt('Какие обязательные ежемесячные расходы у вас есть ?');
  
     }
     do{
       question = prompt('Во сколько это обойдется ?', 10000);
     }
     

     while (isNaN(question) || question == '' || question == null);
      
      sum = sum + question;
     
   }
   return  sum + '  Рублэй';
  
};


appData.getExpensesMonth(appData.expensesMonth);

appData.expensesMonth = appData.getExpensesMonth();
console.log('Расходы за месяц:' + appData.expensesMonth);


appData.getAccumulatedMonth = function (){
    return money - (appData.expensesMonth);

};
console.log(appData.getAccumulatedMonth());

appData.getTargetMonth = function(){
  return appData.mission / appData.getAccumulatedMonth;
};








let budgetDay = Math.floor(appData.getAccumulatedMonth / 30);
console.log('budgetDay', appData.getAccumulatedMonth());
if(appData.getTargetMonth()>0){
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' Месяца');
} else {
  console.log('Цель не будет достигнута');
}



appData.getStatusIncome = function (){
if (budgetDay >= 800){
    return('Высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800){
    return('Средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300){
    return('Низкий уровень дохода');
} else if (budgetDay < 0){
    return('Что то пошло не так');
}
};
console.log('appData.getStatusIncome()', appData.getStatusIncome(budgetDay)); 
