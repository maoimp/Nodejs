'use strict'
// 
function calculadora(numero1,numero2, mostrar=false){
if(mostrar == false ){
    console.log("Suma: "+ (numero1+numero2))
    console.log("Calculadora: "+(numero1-numero2))
    console.log("Calculadora: "+(numero1*numero2))
    console.log("Calculadora: "+(numero1/numero2))
}else{
    document.write("Suma: "+ (numero1+numero2)+"<br/>")
    document.write("Resta: "+(numero1-numero2)+"<br/>")
    document.write("Multiplicacion: "+(numero1*numero2)+"<br/>")
    document.write("Division: "+(numero1/numero2)+"<br/>")
}

}
calculadora(20,30, true);

/*var resultado = calculadora();
console.log(resultado);*/
//calculadora(20,12);
//calculadora(30,10);
/*for (var i = 0 ; i<=10;i++){
    console.log(i)
    calculadora(i,7)
}*/