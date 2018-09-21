function fibonacci(n){
    var a=0;
    var b=1;
    var x=a+",";
 
    for(i=0; i<n-1;i++){
        var numeroTemporal=a;
        a=b;
        b=numeroTemporal+b;
        x+=a+",";
    }
    console.log(x);
 
}