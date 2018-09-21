 function palindromo (str = prompt('Ingrese una palabra: ')){
     if(str.split("").reverse().join("") == str){
         console.log(str + ' es un palindromo');
         return;
     }
     console.log(str + ' no es palindromo');
     return;
}