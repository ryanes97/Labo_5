function bisiesto(year = prompt("Ingrese un anio: ")) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log(year + ' es bisiesto');
        return;
    }
    console.log(year + ' no es bisiesto');
    return;
}