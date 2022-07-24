function greeting() {
    let userName = 'Jorge';

    function displayName() {
        return `Hello, welcome back ${userName}`;
    }

    return displayName;
}

const g = greeting();
console.log( g );
console.log( g() );