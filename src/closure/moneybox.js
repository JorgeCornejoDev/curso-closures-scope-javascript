

function moneyBox( coins ) {
    
    let saveCoins = 0;
    saveCoins += coins;
    console.log( `MoneyBox: $ ${saveCoins}`);
}
// No logra realizar la sumatoria de las monedas agregadas

moneyBox(5);
moneyBox(5);

// con Closure

function moneyBox2() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log( `MoneyBox: $ ${saveCoins}` );
    }

    return countCoins
}

const myMoneyBox = moneyBox2();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);

const moneyBoxJorge = moneyBox2();
moneyBoxJorge(10);
moneyBoxJorge(10);
moneyBoxJorge(200);

