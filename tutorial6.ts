function greetPerson(name: string) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);

}

greetPerson("Chandler");

//A continuacion se muestra la diferencia entre var y let. Let es para un bloque de codigo, var es a nivel global.
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);