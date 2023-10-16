// Ejemplos varios 

//1. Ejemplo Objetos literales - con SuperHeroes 

let superHeroe1 = {
   
   // propiedades/ valores / caracteristicas / atributos del Objeto Literal
   nombre: "Bruno Dias",
   alterego: "Batman",
   superpoder: "Dinero"

}

console.log('------------   Objeto Literal Inicial --------------')
// 1.1 - Verificando propiedades/valores/caracteristicas/atributos del Objeto Literal
console.log(superHeroe1.nombre)
console.log(superHeroe1.alterego)
console.log(superHeroe1.superpoder)

// 1.2 - Cambiando Las propiedades/valores/caracteristicas/atributos del Objeto Literal 
console.log('------------  Cambiando Las propiedades/valores/caracteristicas/atributos del Objeto Literal Inicial --------------')

superHeroe1.nombre = "Clark Kent"
superHeroe1.alterego = "Superman"
superHeroe1.superpoder = "Volar"

// 1.2.1 - Viendo el Objeto completo actualizado(la datos fueron pisado y se cambiaron por unos nuevos)
console.log(superHeroe1)

// 1.2.2 - Viendo las propiedades del Objeto Actualizadas/Pisadas por separado 
console.log(superHeroe1.nombre)
console.log(superHeroe1.alterego)
console.log(superHeroe1.superpoder)


console.log('------------   2do Ejemplo Objeto Literal -  bjetos literales Dentro de Objetos Literales --------------')

//2. Ejemplo Objetos literales Dentro de Objetos Literales - Creando Objetos literales que contengan OTROS Objetos literales

let superHeroe2 = {

   nombre: "Kath",
   alterego: "BatiChica",
   superpoder: "Belleza",
   // Creando un Objeto dentro de un objeto 
   vestimanta: {
      pantalon: "Azul", 
      pechera: "negra"

   }

}

// 2.1 - Viendo el Objeto completo  
console.log(superHeroe2)

// 2.2 - Verificando propiedades/valores/caracteristicas/atributos del Objeto Literal con Notacion de Punto/Sintaxis de Punto 
console.log(' ------------     Notacion de punto/Sintaxis de punto     --------------')
console.log(superHeroe2.nombre)
console.log(superHeroe2.alterego)
console.log(superHeroe2.superpoder)
// Estas son las propiedades/valores/caracteristicas/atributos del Objeto creado dentro del Objeto
console.log(superHeroe2.vestimanta.pantalon)
console.log(superHeroe2.vestimanta.pechera)

// 2.3 - Verificando propiedades/valores/caracteristicas/atributos del Objeto Literal con Notacion de Corchete/Sintaxis de Corchete 
console.log(' ------------     Notacion de Corchete/Sintaxis de Corchete     --------------')

console.log(superHeroe2["nombre"])
console.log(superHeroe2["alterego"])
console.log(superHeroe2["superpoder"])
// Estas son las propiedades/valores/caracteristicas/atributos del Objeto creado dentro del Objeto
console.log(superHeroe2.vestimanta["pantalon"])
console.log(superHeroe2.vestimanta["pechera"])