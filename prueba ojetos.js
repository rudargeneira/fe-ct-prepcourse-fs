// Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   var array=[5,4,3,2,1];
   var pa=array;
   
   function arreglo(pa) {
    //var array=[5,4,3,2,1];
   
   for (let i = 0; i<array.length; i++) {
    //element = array[i];
    console.log("Es la "+cb(), "Del elemento" ,array[i]);
    
                                        }
   //return e=element;
   }
   
function cb(){
   //p=arreglo();
return "Iteracion";
}

var mostrar=arreglo();
console.log(mostrar);


// Recibes un arreglo de números y un callback.---------------------------------------------------------
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
 /*  
function arreglo(){
var numeros = [ 1, 6, 8, 9, 43 ];
return numeros;

}

function sum(){
    suma=0;
    var a1=arreglo();
    for (var i=0;i<a1.length;i++){
      suma=suma+a1[i];
      

}
//return e=5+3;
return suma;
}

var su=sum();
console.log(su);

/*  FUNCIONA 
var w=sum();
console.log(w);

var z=arreglo();
console.log(z[3]);
*/


 



/*-----------------------------EJEMPLO--------------------------------------------------
function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado); 
--------------------------------------------------------------------------------*/


/*function operacionMatematica(num1, num2, cb) {
    // En este ejercicio recibirás dos números y un callback.
    // El callback realiza una operación matemática, por lo que necesita de los dos números.
    // Retorna el resultado del callback pasándole como parámetros los números.
    // Tu código:
*/
/*-------------------------------------------------------------------------------------------------------------------------
function n1(){
    n=5;
    return n;
}

function n2(){
    return n2=6;
}

function s(n1,n2){
      return n1()+n2();

}

var resultado=s(n1,n2);
 console.log(resultado);

 ------------------------------------------------------------------------------*/