function fruits() {
   if( true ) {
    var fruit1 = 'Apple'; // Cumple con function Scope
    let fruit2 = 'Kiwi'; 
    const fruit3 = 'Banana'
    console.log( fruit2 );
    console.log( fruit3 );
   } 

   console.log( fruit1 );
}

fruits();