// ******* Objeto/Funcion/Metodo Constructor con PROPIEDADES Y  Metodos/funciones INTERNAS ********** 

console.log('-- Objeto/Funcion/Metodo Constructor con PROPIEDADES Y Metodos/funciones INTERNAS--')
console.log(" ")


console.log('-- Ejemplo Nro 1 - Optimizando la Funcion/objeto Constructora, Creando Funciones/Metodos dentro de la misma --')

function Cliente(nombre, saldo) {

   this.nombre = nombre;
   this.saldo = saldo;

   // CREANDO UNA FUNCION/METODO para mostrar el saldo - funcion que retorna un valor 
   this.imprimirSaldo = function () { 
      return "Hola " + this.nombre + ' tu saldo es ' + this.saldo
   }

   // CREANDO UNA FUNCION/METODO para mostrar el saldo - funcion que NO retorna un valor 
   // Esto es una explicacion a modo EDUCATIVO -- ESTA FORMA CASI NUNCA SE USA
   this.imprimirSaldo1 = function () {
      
      console.log("Hola " + this.nombre + ' tu saldo es ' + this.saldo)

   }

   // CREANDO UNA FUNCION/METODO para retirar saldo - Usando Funcion Flecha 
      // NOTA Importante: Siempre como colacar return cuando la Funcion realizar alguna OPERACION BASICA (Matematica/Concatenacion/Asignacion etc etc )
   this.retirarSaldo = (retiro)=> {
      // Para restar el Saldo Uso un Decrementador   
      return this.saldo -= retiro
   }

   // CREANDO UNA FUNCION/METODO para retirar saldo - Usando Funcion tradicional 
      // NOTA Importante: Siempre como colacar return cuando la Funcion realizar alguna OPERACION BASICA (Matematica/Concatenacion/Asignacion etc etc )
   this.retirarSaldo1 = function (retiro) {
      // Para restar el Saldo Uso un Decrementador
      return this.saldo -= retiro
   }

   // CREANDO UNA FUNCION/METODO para Depositar saldo - Usando Funcion Flecha 
   this.depositarSaldo = (deposito) => {
      // Para restar el Saldo Uso un Decrementador   
      return this.saldo += deposito
   }

}


let cliente1 = new Cliente('Michell', 50000)
// Mostrando lo que existe detro del objeto cliente1
console.log(cliente1)

console.log("--- Usando funcion que retorna un valor --- ")
// Se consologuea para mostrar el Dato que esta retornando la Funcion
console.log(cliente1.imprimirSaldo())

console.log("--- Usando funcion que NO retorna un valor --- ")
// No es necesario consologuear xq es una funcion estatica que ejecuta un linea de codigos en su interior
cliente1.imprimirSaldo1()

console.log(" ") 

console.log("Creando varios Clientes con la Funcion Constructora y Usando los Metodos contenidos dentro de ella") 
// Creando varios Clientes con la Funcion Constructora y Usando los Metodos contenidos dentro de ella
let cliente2 = new Cliente('Roxana', 50000)
let cliente3 = new Cliente('Reina', 70000)
let cliente4 = new Cliente('Marco', 100000)

// Verificando los objetos nuevos creados "cliente4,5,6"
console.log(cliente2)
console.log(cliente2.imprimirSaldo())
// Retirando Saldo Roxana - Usando Funcion Flecha
console.log(cliente2.retirarSaldo(25000))

console.log(" ")
// // Retirando Saldo Varias Veces Reina - Usando Funcion tradicional
console.log(cliente3)
console.log(cliente3.retirarSaldo1(5000))
console.log(cliente3.retirarSaldo1(5000))
console.log(cliente3.retirarSaldo1(5000))
console.log(cliente3.retirarSaldo1(5000))

console.log(" ")
console.log(cliente4)
// Depositando Saldo Marco 
console.log(cliente4.depositarSaldo(20000000))

console.log(" ") 


// **** USANDO EL OPERADOR LOGICO " in " ---> Evalua Si existe una Propiedad/Metodo especificos dentro del Objeto Instanciado y siempre devuelve una condicion Booleana
// el Operador Logigo " in " se puede usar en Estructuras de Control de Flujo ( Condicionales/Bucle(ciclos))

// Evaluando SI en el objeto cliente1 existe la propiedad "nombre"
// Nota: la propiedad/metodo a evular se debe colocar primero y entre comilla ---> 'nombre'
console.log('nombre' in cliente1) 

// Evaluando SI en el objeto cliente1 existe la funcion imprimirSaldo()
console.log('imprimirSaldo' in cliente1) 

// Evaluando SI en el objeto cliente1 existe la funcion balance()
console.log('balance' in cliente1) 

// ***** Usando el BUCLE(Ciclo) For para evular las propiedades que estan dentro un Objeto Instanciado

console.log(" ")
console.log(" -- Propiedades y Metodos que estan dentro del Objeto Instanciado cliente1 -- ")

for (let propiedad in cliente1) {

   //Aca se Obtiene el nombre de la Propiedad/Metodo - que esta dentro de cliente1
   console.log(propiedad)
   // Aca se Obtiene lo que contiene la Propiedad/Metodo - que esta dentro de cliente1
   console.log(cliente1[propiedad])
   
}