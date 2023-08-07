// * 1
let number = 2;
        
        const sumPow = ((number*2)+(number**3));
        console.log(sumPow);


// * 2

let a = prompt ('Введите число');
let percent = a / 100 * 13;

if (a = number) {
    alert(percent);
} else {
    alert (`Значение задано неверно`);
}

// * 3

let b = prompt (`Введите первое число`);
let c = prompt (`Введите второе число`);
let d = prompt (`Введите третье число`);

alert (Math.max(b,c,d));

// * 4


const sum = (num1, num2) => (num1 + num2);
const dif = (num1, num2) => (Math.max(num1,num2) - Math.min(num1,num2));
const pro = (num1, num2) => (num1 * num2);
const quo = (num1, num2) => (num1 / num2);
let number1 = 15;
let number2 = 78;

console.log(`Сумма чисел = ${sum(number1, number2)}`);
console.log(`Разность чисел = ${dif(number1, number2)}`);
console.log(`Произведение чисел = ${pro(number1, number2)}`);
console.log(`Частное чисел = ${quo(number1, number2)}`);




