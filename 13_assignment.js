/*Question: Write a program that generates a multiplication table for a given number using a for loop.*/
let number =3;
function multiplicationTable(number) {
console.log("MultiplicationTable for :",number)
};
multiplicationTable(number);
for (let i = 1; i <= 10; i++) {
   console.log(number + " x " + i + " =",number * i);
  
}