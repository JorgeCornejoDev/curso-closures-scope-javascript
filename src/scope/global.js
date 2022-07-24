// Veamos como funciona la asignación, declaración, reasignación 


// Variables 
// Declarando

var a; 
var b = 'b'; // Declramos y asignamos 
b = 'bb'; // Reasignamos un valor
var a = 'aa'; // redeclaración 

// Vamos a entender el global scope 
var fruit = 'Apple'; // Globak

function bestFruit() {
    console.log( fruit );
}
bestFruit();

function countries() {
    country = 'México'; // Asignamos Global - No es recomendable
    console.log( country );
}
countries();
console.log( country );

