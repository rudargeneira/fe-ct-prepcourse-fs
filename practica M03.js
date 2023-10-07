function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var arguments =[1,2,3,4,9];
  //var arguments=[];
     var r=0;r2=0;
       if(arguments.length==0){
        console.log(0);
       } else{
       
        for(var i=0;i<arguments.length;i++){
        console.log("I",arguments[i]);
        r2=arguments[i]*arguments[i+1];
        var r3=r2*arguments[i+2];
        console.log("MULTPLICACION", r3);
        break;         
        }               
          
        }
 
}

multiplicarArgumentos();


 // var numerodedia=2;
 /*   numerodedia=2;
 if (numerodedia==1 || numerodedia==2) {
  if (numerodedia==1) { console.log("Domingo");}
        if (numerodedia==2) { console.log("Lunes"); }
}// if 1 o 2
else console.log("Es Laboral");


/*
function arrayContiene(array, elemento) {
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
  var array=["hola","pedro"];
  elemento="hol";
  

  for(var i=0;i<array.length;i++){
        if(array[i]==elemento){
        console.log(true);
        break;
        } else console.log(false);  
          break;
       } 
} 
  
arrayContiene();



/*
function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido por parámetro.
  // Tu código:
  /*ElemntodelArray=array;
  console.log(ElementodelArray[0]);*/
 /* var array=[1,3,4];
   console.log(array[0]);
   var ultimo=array.length-1;
   console.log("El Ultimo elemento dentro del arreglo es ", array[ultimo]);
   console.log(array.length);
  // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
 
 
  var  narray=array.map(array=>array+1);
  console.log("El nuevo array", narray);

}
devolverPrimerElemento();
*/

/*
function esPrimo(num) {
  // Retornar true si "num" es primo.
  // De lo contrario retorna false.
  // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
  // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
  // [Nota]: los números negativos, 0 y 1 NO son números primos.
  // Tu código:

  num=89;
       for(var i=2;i<num-1;i++){
        var es=num % i;
        if(es!=0)
        //console.log(es);
        console.log("ES PRIMO"); 
        break;     
       } if (es==0){
        console.log("no es primo");
       }
      // console.log("es primo" ,es);
      }
      
esPrimo();
/*
function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
 num1=-11,num2=9,num3=10;
 if (num1!=0 && num2!=0 && num3!=0)
 {
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   if (num1>0 && num1>num2 && num1>num3){
   console.log("numero 1 es positivo y mayor");

 }  
 // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
 if(num1<0 || num2<0 || num3<0 ){
    console.log("alguno es negativo");


 }
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  if(num1<num3 && num3>num2){
  num3++;
  console.log("el mayor es El Número 3 y le Sumo 1=> ",num3);
  }


} else console.log(false);
}

operadoresLogicos();
/*
function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    num=555;
    a=num%1;
    if(a===0){
    console.log(true);
    } else { console.log (false);}
    
 }
 esEntero();

/*
function conection(status) {
    // El argumento "status" representa el estado de conexión de un usuario.
    // Si el estado es igual a 1, el usuario está "Online".
    // Si el estado es igual a 2, el usuario está "Away".
    // De lo contrario, presumimos que el usuario está "Offline".
    // Retornar el estado de conexión del usuario.
    // Tu código:
    status=3;
 
    switch (status) 
    {
       case 1:
         console.log('Online');
         break;
       case 2:
          console.log("Away");
          break;
    
     default: 
     console.log("Esta Offline") ;
 
    }    
    
 };
 
conection();

/*
function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares.
    // Debes calcular el valor recibido como argumento pasándolo a dolares.
    // Tu código:
    euro=5;
    d=euro*1.20;
    console.log (d);
 
 
 }

deEuroAdolar();

/*
function numeroRandom() {
    // Genera un número al azar entre 0 y 1 y retórnalo.
    // Tu código:
 a=Math.random();
 console.log(a);
 
 
 }
numeroRandom();

/*

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
 num=9.97;  
 a=Math.ceil(num);
 console.log(a);
}
redondearHaciaArriba();


/*
function redondearNumero(num) {
    // Redondea "num" al entero más próximo y retórnalo.
    // Tu código:
    var num=5.35;
    a= Math.round(num);
     console.log(a);
 }
 

redondearNumero();


/*
function elevarAlCuadrado(num) {
    // Retorna el valor de "num" elevado al cuadrado.
    // Tu código:
    num=5;
    console.log(a=Math.pow(num,2));
   // console.log(a);
 }
 
elevarAlCuadrado();
/*------------------- redondea
a=Math.round(3.35);
console.log(a);
------------------------------*/
/*
function mayorQueCincuenta(num) {
    // Retorna true si el argumento "num" es mayor que cincuenta.
    // De lo contrario, retorna false.
    // Tu código:
     
      if (num>50) {console.log(true);}
       else if(num<=50) console.log(false);
          
 }

 mayorQueCincuenta();


/*
function sonIguales(x, y) {
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
 x=5;
 y=9;
 
    if(x===y) {console.log(true);} 
    else console.log(false);
 }

sonIguales();


/* de aqui para abajo ejercio 02------------
function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    z=x/y;
    a=x%y;
    console.log(z,a);
    
 }

/*
function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
 
    x=18,y=11;
    z=x-y;
   console.log(z);


}

resta();


/*function suma(x, y) {
    // Retorna el resultado de su suma.
    // Tu código:
    x=5;y=6;
    w=x+y;
    console.log(w);
        
}
suma();

/*
function devolverString(string) {
    // Debe retornar un string.
    // Tu código:
    string="Ejemplo";
    console.log(string);
    
}
    devolverString();


    */