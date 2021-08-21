const anotherFuntion = () => {
    for (let i = 0; i < 10; i++) { //  Se debe colocar let ya que de lo contrario con var, se i,prime solo el ultimo valor del ciclo.
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFuntion();