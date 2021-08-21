const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox2 = (coins) => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};
// Lo anterior combina una funcón y el ambito donde se declara.
let myMoneyBox = moneyBox2();

myMoneyBox(4);
myMoneyBox(6); //10
myMoneyBox(10); //20