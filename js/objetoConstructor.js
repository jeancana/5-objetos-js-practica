
// ******* Objeto/Funcion/Metodo Constructor CON SOLO PROPIEDADES INTERNAS********** 

//1. Ejemplo Objeto/Funcion/Metodo Constructor - con Personas 
// Es una funcion que Usamos para Crear un nuevo Objeto cada vez que sea necesario 
// Es una Plantilla Molde para Crear N Objetos tantos sean requeridos
// Al crear una Objeto/Funcion/Metodo Constructora se le coloca la primera letra en Mayuscula por convencion "Persona"
// La palabra Reservada NEW se usa para Instanciar/Crear un nuevo Objeto perteneciente a una clase especifica

// Nota: el OBJETO/FUNCIO/METODO CONSTRUCTOR es un objeto literal generico y de el SE instancian/Crean nuevos Objetos.... por eso es que se le denomina/llama Plantilla/Molde/Constructor

console.log('------------   Objeto/Funcion/Metodo Constructor Inicial --------------')
console.log(" ")

function Persona(nombre, edad, calle) { 
   
   // Usando Variables y el operador de Asignacion " = " como PAR de Clave:Valor 
   // clave   =  Valor
   this.nombre = nombre;
   // propiedades/valores/caracteristicas/atributos del Objeto Constructor son ---> "this.nombre/this.edad/this.calle"
   this.edad = edad; 
   // el this signica ---> asigna lo que viene por parametro directamente a la estructura de codigo donde te estoy indicando
   this.calle = calle;
   // Logica del This: asigna el nombre que viene por parametro a this.nombre 
   // this.nombre es como decir Persona.nombre 
}

// Instaciando un NEW OBJET - Creando nuevas instancias del ObjetoConstructor "Persona" llamadas persona1 y persona2
const persona1 = new Persona ('michell', 39, 'french 2741')
const persona2 = new Persona('Katherine', 26, 'Sanchez de Loria 1943')

// Verificando que el Objeto Constructor funcione al consologuear el contenido de persona1 y persona2
// Verificando los tipos de Datos que Son las Propiedades de Objeto Constructor

console.log('------------   Verificando el new Object "persona1"  --------------')
console.log(persona1)
console.log('--  chequeando la Propiedades/Caracteristicas/Valores de persona1 Por Separado --')
console.log(persona1.nombre)
console.log(typeof persona1.nombre)
console.log(persona1.edad)
console.log(typeof persona1.edad)
console.log(persona1.calle)
console.log(typeof persona1.calle)

console.log('------------   Verificando el new Object "persona2" --------------')
console.log(persona2)
console.log('-- chequeando la Propiedades/Caracteristicas/Valores de persona2 Por Separado --')
console.log(persona2.nombre)
console.log(typeof persona2.nombre)
console.log(persona2.edad)
console.log(typeof persona2.edad)
console.log(persona2.calle)
console.log(typeof persona2.calle)

console.log('------------   OTROS EJEMPLOS DE OBJETO/FUNCION CONSTRUCTORA  --------------')
console.log(" ")
// OTROS EJEMPLOS DE FUNCION CONSTRUCTORA 

// Ejemplo Nro 1 - con las propiedades Harcodeadas y sin pasarle parametros a la Funcion Constructora: 

console.log('-- Ejemplo Nro 1 - Propiedades Harcodeadas y sin pasarle parametros a la Funcion Constructora --')

function Cliente() {
   
   // Propiedades de la funcion Constructora esta Hardcodeadas 
   // el this signica ---> asigna lo que viene por parametro directamente a la estructura de codigo donde te estoy indicando
   this.nombre = 'Alfredo'
   this.saldo = 60000;
}

// esta las forma en la que se debe crear los Nuevos Objetos a-partir-de/o-Usando la Funcion Constructora
let cliente1 = new Cliente()

// Verificando al objeto nuevo creado "cliente1"
console.log(cliente1)
console.log(cliente1.nombre)
console.log(typeof cliente1.nombre)
console.log(cliente1.saldo)
console.log(typeof cliente1.saldo)

console.log(" ")

// Intentando crear un 'cliente2 con la misma Funcion Constructora Harcodeada 
let cliente2 = new Cliente()

// Verificando al objeto nuevo creado "cliente2"
console.log("Verificando al objeto nuevo creado cliente2")
console.log(cliente2)

// Pisando los Datos de "cliente2" para que deje de ser Alfredo y se llame Pedro 
console.log("Pisando los Datos de cliente2 para que deje de ser Alfredo y se llame Pedro")
cliente2.nombre = 'Pedro'
console.log(cliente2)
console.log(cliente2.nombre)

console.log(" ")

// Ejemplo Nro 2 - Optimizando la Funcion Constructora y Convirtiendola en Plantilla/Molde: 
console.log('-- Ejemplo Nro 2 - Optimizando la Funcion/objeto Constructora, Pasandole variables como Parametros --')

function Cliente2(nombre, saldo) {

   // Propiedades de la funcion Constructora son variables que se reciben por Parametro
   // el this signica ---> asigna lo que viene por parametro directamente a la estructura de codigo donde te estoy indicando
   this.nombre = nombre;
   this.saldo = saldo;

}

// Creando a objeto cliente3 y pasandoles los Datos como parametro a la Funcion Constructora 
let cliente3 = new Cliente2('Michell', 50000)
// Verificando al objeto nuevo creado "cliente3"
console.log(cliente3)

// Creando varios Clientes con la Funcion Constructora del Ejemplo Nro 2
let cliente4 = new Cliente2('Roxana', 50000)
let cliente5 = new Cliente2('Reina', 70000)
let cliente6 = new Cliente2('Marco', 100000)
// Verificando los objetos nuevos creados "cliente4,5,6"
console.log(cliente4)
console.log(cliente5)
console.log(cliente6)

console.log(" ")

// Ejemplo Nro 3 - Creando objetos con Datos que viene por prompt: 
console.log('-- Ejemplo Nro 3 - Creando Objetos recibiendo Datos via Prompt y Pasandole variables como Parametros a la Funcion/objeto Constructora --')

/* let nombre = prompt('Ingresa Nombre')
let saldo = Number(prompt('Ingresa Saldo'))

// Verificando que contiene el Objeto cliente7
let cliente7 = new Cliente2(nombre, saldo)
console.log(cliente7) */

console.log(" ")

// Ejemplo Nro 4 - Metiendo un Objeto Literal dentro de un Objeto/Funcion Contructos : 
console.log('-- Ejemplo Nro 4 - Metiendo un Objeto Literal dentro de un Objeto/Funcion Contructos  --')

// Creando un Objeto/funcion/Metodo Constructor que usa como parametros un new Object de tipo liteal (usando PAR clave:valor - Usando un JSON)

function Persona2(literal) {

   // clave =   valor (aca se usa notacion de punto para asignarle el Dato que viene por JSON el cual es "Homero" tipo String)
   this.nombre = literal.nombre;
   // clave =  valor (aca se usa notacion de punto para asignarle el Dato que viene por JSON el cual es 39 tipo Number)
   this.edad = literal.edad;
   // clave =  valor (aca se usa notacion de punto para asignarle el Dato que viene por JSON el cual es El Barbecho tipo String)
   this.calle = literal.calle

}
// Instanciando a persona3 ----- aca estan pasando los Datos al parametro (literal) del objeto/funcion contructor como un JSON 
let persona3 = new Persona2({ nombre: "Homero", edad: 39, calle: "El Barbecho" })
console.log(persona3)


