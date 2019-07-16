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
     money = +prompt('Ваш месячный доход ?', 50000);
    }
      while (isNaN(money) || money == '' || money == null);
  };

start();



let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function(){


      if(confirm('Есть ли у вас дополнительный источник дохода?')){
        let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
        let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
        appData.income[itemIncome] = cashIncome;
      }

      let addExpenses  = prompt('Перечислите возможные расходы через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){

          let itemExpenses = prompt('Введите обязательную статью расходов?', "Садик Государственный");
          let cashExpenses;
          do {
              cashExpenses = prompt('Во сколько это обходиться?', 2500);
          }
          while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);


          appData.expenses[itemExpenses] = cashExpenses;
        }
  },
    getExpensesMonth: function(){
      for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
      }
  },
    getBudget: function(){
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
    getTargetMonth: function(){
      return appData.mission / appData.budgetMonth;
   },
    getStatusIncome: function(){
      if (appData.budgetDay > 800){
        return ('Высокий уровень дохода');
      } else if (appData.budgetDay > 300 ){
        return ('Средний уровень дохода');
      } else if (appData.budgetDay > 0) {
        return ('Низкий уровень дохода');
      } else {
        return ('Что то пошло не так !');
      }
    },
    getInfoDeposit: function(){
      if(appData.deposit){
        appData.percentDeposit = prompt('Какой годовой процент', '10');
        appData.moneyDeposit = prompt('Какая сумма заложена', 10000);
      }
    },
    calcSavedMoney: function(){
      return appData.budgetMonth * appData.period;
    }



};
  
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0){
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');

} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData){
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

console.log(appData.itemIncome, appData.cashIncome, appData.addExpenses, appData.itemExpenses  );
console.log(appData.moneyDeposit, appData.percentDeposit);