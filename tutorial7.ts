for (var i = 1; i <= 5; i++) {
    console.log(i);
}
//En este for se imprime 5 veces el numero 6 esto es cuando falla el loop es decir cuando es mayor a 5
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log(i); }, 1000)
}

//Para que esto funcione se debe hacer con let.
for (let i = 1; i <= 5; i++) {
    setTimeout(function () { console.log(i); }, 1000)
}