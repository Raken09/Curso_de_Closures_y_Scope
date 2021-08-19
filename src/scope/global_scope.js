var hello = "Hello"; // Es una variable global, ya que np está definida en una función o bloque.
var hello = "Hello + otra cosa"; // La variables con "var" se pueden reasignar.
let world = "Hello World"; 
//let world = "Hello World + otra cosa"; 
const helloWorld = "Hello World"; // Con let y const no se puede reasignar el valor de la variable.

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld2 = () => {
    globalVar = "Im gobal"
}

helloWorld2();
console.log(globalVar); // Permite acceder a una variable local, sin embargo es una mala practica.

const anotherFunction2 = () => {
    var localVar = globalVar = "Im gobal";
}

anotherFunction2();
console.log(globalVar);