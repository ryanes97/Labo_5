function absolute(n = prompt("Ingrese un numero: ")) {
    if(n < 0) {
        console.log('El valor absoluto de ' + n + ' es: ' + n*(-1));
        return;
    }
    console.log('El valor absoluto de ' + n + ' es: ' + n);
    return;
}