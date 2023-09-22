/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
} function cambio(nombre){

   return nombre.substring(0, 1).toUpperCase() + nombre.substring(1);
}
}


function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   function invocar(cb) {
    return cb();

   }
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
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

}




function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

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
      return suma;
      }
      
      var su=sum();
      console.log(su);
      


}

function forEach(array, cb) {
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

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:


   var array=[5,4,3,2,1];
   var pa=array;
   var na=[];
   var newa=na;
   
   function arreglo(pa,newa) {
    
   for (let i = 0; i<array.length; i++) {
    console.log("Es la "+cb(), "Del elemento" ,array[i]);
    na.push(array[i]); /**************** */
    console.log("Este es el nuevo Vector", na);
                                         }
   return newa;
   }
   
   function cb() {
      return "Iteracion";
                 }
  var mostrar=arreglo();
  console.log(mostrar);
   
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   
   var s=["pedro","Alejo","armas"];
  
   for (let i = 0; i < s.length; i++) {
    var v=[];
    pl=s[i].charAt(0);
        
    if (pl=='a' || pl=='A'){
        v.push(s[i]);
        console.log("comienza con a ", v);
    }
        
}


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
