function decimalToBinary (n = prompt('Ingrese un numero: ')) {
    var ans = [];
    while(n >= 2) {
        ans.push(n % 2);
        n = Math.floor(n / 2);
    }
    ans.push(n % 2);
    ans.push(Math.floor(n / 2));
    console.log(ans.reverse().join("")-"0");
}