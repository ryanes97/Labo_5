function circle (r = prompt('Ingrese el radio: ')) {
    if(r <= 0) {
        console.log('El radio ingresado debe ser positivo y distinto de 0');
        return;
    }
    console.log('El area de la circunferencia es: ' + Math.PI*Math.pow(r, 2));
    return;
}