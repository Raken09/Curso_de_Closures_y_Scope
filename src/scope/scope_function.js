const fruits = () => {
    var fruit = 'apple'; // Variable local
    console.log(fruit);
}

fruits();
console.log(fruit); // Genera error ya que es una variable local.

const anotherFunction = () => {
    var x = 1;
    var x = 2; // Con var se puede reasignar
    let y = 1; 
    //let y = 2; // Con let no se puede reasignar
    console.log(x);
    console.log(y);
}

anotherFunction();