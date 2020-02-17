let money = prompt ("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: false
};

let a = prompt ("Введите обязательную статью расходов в этом месяце");
let a1 = prompt ("Во сколько обойдется?");
let b = prompt ("Введите обязательную статью расходов в этом месяце");
let b1 = prompt ("Во сколько обойдется?");

appData.expenses.a = b;
appData.expenses.a1 = b1;

console.log (appData);

alert (appData.budget/30);