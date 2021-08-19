const fruits = () => {
    if (true) {
        var fruits1 = "apple"; // Con var pertenece a el scope de la función.
        let fruits2 = "orange"; // Con let y const pertenece a el scope local del if.
        const fruits3 = "banana";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();

let x = 1;
{
    let x = 2; // Con let se imprimen ambas variables
    console.log(x);
}
console.log(x);

var x = 1;
{
    var x = 2; // Se imprime dos veces 2 ya que se reasigna el valor.
    console.log(x);
}
console.log(x);


const anotherFuntion = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFuntion();