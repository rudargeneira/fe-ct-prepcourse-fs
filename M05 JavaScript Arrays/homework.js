/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   /*ElemntodelArray=array;

   console.log(ElementodelArray[0]);*/
   return array[0];

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   
    ultimoElemento=array.length-1;
    console.log(ultimoElemento);
    console.log(array[ultimoElemento]);


  

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
console.log(array.length-1);

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   var masuno=array.map(i=>i+1);
   console.log(masuno);



}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   n=array.push(elemento);
   console.log(n) ;
   

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   return array.unshift(elemento);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   
   //palabras.spilt()
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   var esta=array.every(valor => valor===elemento);
   console.log(esta);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   ultimo=arrayOfNums.length-1;
   var ac=0;
          for (var i=0;i<=ultimo ;i++ ) {
              ac=ac+arrayOfNums[i];
          }
         System.out.println("----------------");
        System.out.println(ac);
  
   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

 ultimo=resultadosTest.length-1;
 subpro=0, pro=0;

   for (var i=0;i<=ultimo ; i++ ) {
      subpro=subpro+array[i];
        
    } // fin del for 
      pro=subpro/array.length;
      System.out.println(pro);   


}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
ultimo=arrayOfNums.length-1;
may=0;
for (let i = 0; i <=ultimo; i++) {
     if (arrayOfNums[i]>=may) {

        may=arrayOfNums[i];
      
     } // fin del if
   
}// fin del for

console.log(may);

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   
   ultimo=array.length-1;
   idiez=0;
        for (var i=0;i<=ultimo ;i++ ) {
         if (array[i]>18)    {
            idiez=idiez+1;  
             
         }// fin del if       
    }// fin del for 
    System.out.println(idiez);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
  
   // var numerodedia=2;
   if (numerodedia==1 || numerodedia==2) {
       if (numerodedia==1) { System.out.println("Domingo");}
             if (numerodedia==2) { System.out.println("Lunes"); }
   }// if 1 o 2
   else System.out.println("Es Laboral");
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  
  int ultimo=array.length-1;
  resp=Boolean; 
  for (var i=0; i<=ultimo ;i++ ) {
    
      if (array[i]==array[i+1]) {
      System.out.println("hay igualdad");    
      return resp;
      break;
      }
       else System.out.println("No hay Igualdad")  ;
           break;
           return resp;
      
  }// end for 
  


}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   int ult=mes.length-1;
   System.out.println(mes[ult]);

   for (var i=0;i<=ult ;i++ ) {
           if (mes[i]=="enero") {
               orden[0]=mes[i];
           } else
               if (mes[i]=="marzo") {
                   orden[1]=mes[i];
               } else
                   if (mes[i]=="noviembre") {
                         orden[2]=mes[i];                              
                   }
       
   }// for

   for (var i=0;i<=orden.length-1 ;i++ ) {
      if (orden[i]==null) {
         System.out.println("no Existe Algun Mes Solicitado");
         break;
   
      System.out.println(orden[i]);    
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   int[] array=new int[11];
      
   
       for(int i=0;i<=11;i++){
            array[i]= 6*i;
           System.out.println(array[i]);

           
         }// for interno

}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   int[] array={99,100,140,150,190,200};
        
   int[] nuevo =new int[4];
       for (var i=0;i<=nuevo.length ;i++ ) {
            if (array[i]>100){
                nuevo[i]=array[i];
                System.out.println(nuevo[i]);
            }
       
                
             }// for


}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
        
   List<Integer> arreglo = new ArrayList<>();
  int iteraciones = 0;
 int num;
 int suma = num;
  while (iteraciones < 10) {
    suma += 2;
    iteraciones++;
    arreglo.add(suma);
     System.out.println(arreglo); 
    if (suma == iteraciones) {
      System.out.println("Se interrumpió la ejecución");
      break;
    }
  }
  return arreglo;  
       
 }
         


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
