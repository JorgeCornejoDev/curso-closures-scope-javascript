var firstName; // Se le asigna un valor undefined
firstName = 'Jorge';
console.log( firstName );

var lastName = 'Cornejo'; // Declaración y asignación 
lastName = 'Martínez'; // Reasignar

console.log( lastName );

var secondName = 'Chuchito'; //  declarando y asignando
var secondName = 'Alberto'; // Reasignando 
console.log( secondName );

// LET 

let fruit = 'Apple'; // Declarar y asignar
fruit = 'Kiwi'; // reasignar 
console.log( fruit );

// let fruit = 'Banana'; // Esto no se puede redeclarar una variable dentro del block scope 

// Const 
const animal = 'Dog';
// animal = 'Cat'; // esto no es posible, no se puede reasignar const
// const animal = 'cat'; // tampoco es posible redeclarar const 
console.log( animal );


// Se crea una referencia a esa constante
const vehicles = [];
vehicles.push("VW");
console.log( vehicles );

vehicles.pop();
console.log( vehicles );




