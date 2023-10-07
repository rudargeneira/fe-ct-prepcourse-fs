
function cc(){

 class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
  constructor(nombre,apellido,edad,domicilio){
            this.nombre=nombre;
            this.apellido=apellido;
            this.edad=edad;
            this.domicilio=domicilio;

    }

 detalle(){
    console.log(this.nombre,this.apellido,this.edad,this.domicilio);
    
  }

}

var instancia=new Persona ("JUANA","SUAREZ",55,"ffffffffff");
instancia.detalle();

}
cc();














/*
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
crearUsuario();
*/