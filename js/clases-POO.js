// ******* CLASES POO  ********** 

// Al MOLDE de un OBJETO/funcionConstructora que instancia Objetos, se le conoce en POO como CLASE
// En la Clase se puede englobar TODO ----> Propiedads(datos), Metodos Constructor(funcion Constructora) y Metodos locales(funciones locales) al objeto instanciado 

console.log('-- CLASES POO --')
console.log(" ") 


console.log('-- Ejemplo Nro 1 - Creando la Clase Cliente y la Funcion Constructor --')

class Cliente {
    
   // Primero SIEMPRE VA A TENER UNA Funcion/Metodo Constructora
   constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
   }

}
 
console.log(" ")
console.log('-- Creando el Objeto cliente1 mediante el Constructor--')
// Creando a cliente1
let cliente1 = new Cliente('David ', 58000); 

// Verificando el contenido del objeto cliente1
console.log(cliente1)

console.log(" ")
console.log('-- Ejemplo Nro 2 - Clase Cliente2 con Funcion Constructor y Metodos --')

class Cliente2 {

   // Este es el constructor
   constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
   }

   // Esto es una METODO y no necesita declararlo como funcion YA viene listo para ser una Funcion
   // EL METODO es un tipo de Funcion que evoluciono 
   // Nota: Los METODOS se debe declarar/crear dentro de una clase
   imprimirSaldo() {
      return "Hola " + this.nombre + ' tu saldo es ' + this.saldo
   }

   retirarSaldo(retiro) {
      // Para restar el Saldo Uso un Decrementador   
      return this.saldo -= retiro
   }

   depositarSaldo(deposito) {
      // Para restar el Saldo Uso un Decrementador   
      return this.saldo += deposito
   }

}

console.log(" ")
console.log('-- Instanciado el Objeto cliente2 y Usando El Metodo imprimirSaldo()  --')

// Creando a cliente1
let cliente2 = new Cliente2('David ', 58000);

// Verificando el contenido del objeto cliente1
console.log(cliente2)
// Usando el metodo imprimirSaldo() y consologueandolo
console.log(cliente2.imprimirSaldo())

console.log(" ")

console.log("-- Instanciando Varios Objetos  y Usando todos los Metodos Creados--")
// Creando varios Clientes con la Funcion Constructora y Usando los Metodos contenidos dentro de ella

let cliente3 = new Cliente2('Reina', 70000)
let cliente4 = new Cliente2('Marco', 100000)
let cliente5 = new Cliente2('Roxana', 50000)

// Verificando el objeto Instanciado 
console.log(" -- Mostando y Retirando Saldo")
console.log(cliente3)
console.log(cliente3.imprimirSaldo())
// Retirando Saldo Roxana - 
console.log(cliente3.retirarSaldo(25000))

console.log(" ")
console.log(" -- Retirando Varias veces Saldo/Dinero")
// // Retirando Saldo Varias Veces Marco  
console.log(cliente4)
console.log(cliente4.retirarSaldo(5000))
console.log(cliente4.retirarSaldo(5000))
console.log(cliente4.retirarSaldo(5000))
console.log(cliente4.retirarSaldo(5000))

console.log(" ")
console.log(" -- depositando Varias veces Saldo/Dinero")
console.log(cliente5)
// Depositando Saldo Reina 
console.log(cliente5.depositarSaldo(20000000))

console.log(" ") 