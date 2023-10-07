/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   string="Ejemplo";
   console.log (string);
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   x=5;y=6;
   w=x+y;
   console.log(w);
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   
   x=18,y=11;
   z=x-y;
  console.log(z);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   z=x/y;
    a=x%y;
    console.log(z,a);
   
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   w=x*y;
   console.log(w);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   w=x%y;
   console.log(w);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
