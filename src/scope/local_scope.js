const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
//console.log(hello); // No se puede acceder a la variable hello porque esta dentro de una funcion, por lo tanto tiene scope local


// Ambito lexico.
var scope = "I am global";

const functionScope = () => {
    var scope = "I am local"; // No se reasigna la variable scope, simplemente es una varible local.
    const func = () => {
        return scope;
    };
    console.log(func());
};

functionScope();
console.log(scope);