/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
  
   class Usuario { 
      constructor (usuario,nombre,email,password){
   
      this.usuario=usuario;
      this.nombre=nombre;
      this.email=email;
      this.password=password;
   
   }
   
   saludar(){
       console.log("HOLA MI NOMBRES ES ",this.nombre);
   }
   
   }
   
   var instancia=new Usuario ("34","alberto","sss@hotmail.com",2587);
    console.log(instancia);
    instancia.saludar();
   
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:

     instancia.saludar();
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".


Array.prototype.reverse=function(){
  var cadenaInv=[];
   for (let i=this.length-1;i<=0;i--){
       cadenaInv.unshift(this[i]);

   }

}

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
