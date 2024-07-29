"use strict;"

//1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let number_one = 0.2;
let number_two = 0.1;

let sum = Math.round((number_one + number_two)*10)/10;
alert(`${sum}`);

//2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let FirstNumber = "1";
let SecondNumber = 2;

let sumBoth = +FirstNumber + SecondNumber;
alert(`${sumBoth}`)

//3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let value = prompt(`Вкажіть об'єм флешки`);

let answer = Math.round((value*1024)/820);
alert(`${answer}`)

//4 Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let summ_of_money_in_a_wallet = prompt(`How much money do you have?`);
let price_of_one_chocolate = prompt(`Please enter the price of one chocolate`);

let you_can_buy = Math.floor(summ_of_money_in_a_wallet / price_of_one_chocolate);
let your_change = summ_of_money_in_a_wallet % price_of_one_chocolate;
alert(`You can buy - ${you_can_buy} chocolates.
        Your change - ${your_change} dollars`);

//5 Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let user_number = prompt(`Please enter your number with three symbols`);
let a = Math.floor(user_number/100);
let b = Math.floor((user_number - a * 100) / 10);
let c = Math.floor((user_number - a * 100) - (b * 10));

let number_for_user = String(c) + b + a; 
alert(`${number_for_user}`);

//6 Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let user_deposit = prompt(`Please, enter summ of your deposit`);
let all_summ = user_deposit * ((1 + 0.05)/6);
let ammount_of_interest = (user_deposit - all_summ)/100;
alert(`${ammount_of_interest}`);