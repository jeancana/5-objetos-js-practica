
// INICIANDO LOS EJEMPLOS 

// Todas estas variables tiene en comun que CORRESPONDE A UNA ENTIDAD y se le puede Asignar un Nombre a esa Entidad 
// Entonces todas esta variables son caracteriscas de la ENTIDAD "ITEM/PRODUCTO" 
// Entonces todos ellos pueden ser Propiedades de un Objeto 
let nombreProducto = 'Zapatilla Adidas';
let precio = 35000;
let disponible = true; 

// ***** Definiendo Un OBJETO LITERAL - Englobando todas las caracteristica de la Entidad ITEM/PRODUCTO en una sola variable
// Un Objeto Literal se define DIRECTAMENTE con las LLAVES "{ }" 

/* 
******* Formato de Objeto Literal *********

   const/let nombreObjetoLiteral {
   
      clave:valor,
      clave2:valor2,
      etc etc etc....

   }
 */

// 1 - Ejemplo de OBJETO LITERAL 
// Al asignarle a la constante "producto1" las {} lo estoy convirtiendo en un OBJETO LITERAL
const producto1 = {

      // Esto es un objeto LITERAL VACIO
}
// Verificando el typeof de producto1 - el browser indica es de tipo ***Object***
console.log(typeof producto1)

// 2 - Ejemplo de OBJETO LITERAL con 1 Propiedad/Caracteristica (datos dentro del objeto)
// Usando el PAR Key:value
const producto2 = {

   // para Asignar propiedades(caracteristicas) al Objeto se realiza mediante la referencia de PAR --- key:value (clave:Valor / llave:valor)
   // NO se usa Operador de Asignacion " = " ... sino de referencia " : "  para crear la propiedades dentro de un Objeto

   nombre: "zapatillas Adidas"
   // nombre: ----> es la llave del objeto 
   // "zapatilla Adidas" es el valor referenciado dentro del objeto
   
}
// Verificando el typeof de producto2 - el browser indica que es de tipo ***Object y se le pueden ver las propiedas que contiene***
console.log('-------------------------')
console.log(typeof producto2)
console.log(producto2)


// 3 - Ejemplo de OBJETO LITERAL con N Propiedades/Caracteristicas (datos dentro del objeto)
// Usando Multiples Pares de Key:value
//NOTA: Para poder Crear varias Propiedades a traves de PARES(key:Vaklue) se debe separar con una COMA " , " para continuar y CREAR otro PAR
const producto3 = {
   
   //Asignandoles Varias Caracteristicas al Objeto - Usan varios PARES de Clave:Valor
   // Se usa la coma " , " para poder Separar Continuar Creando Caracteristicas 
   nombre: "zapatillas Adidas",
   precio: 40000, 
   disponible: true,
   color: "blanco"

}
// Verificando el typeof de producto3 - el browser indica que es de tipo ***Object y se le pueden ver las propiedas que contiene***
console.log('-------------------------')
console.log(typeof producto3)
console.log(producto3)

// 4 - INSPECCIONANDO y RECUPERANDO los VALORES que estan dentro de un OBJETO: 
// SE HACE, mediante la notacion de Punto ----> ejemplo: "producto3.nombre" y al consologuearlo podemos ver lo que contiene el Valor/DAto que contiene la propiedad/caracterista "nombre" del objeto creado como "producto3"

// Logica Operando: Inspeccionando el Objeto "producto3" usando notacion de punto/sintaxis de punto " .nombre ", hacemos referencia a la clave nombre: y le pedimos que nos muestre el "valor" que esta alojada en ella el cual es "zapatillas Adidas" 
console.log('-------------------------')
console.log(producto3.nombre)

// Viendo que Tipo de valor/Dato esta en la propiedad " nombre:"
console.log(typeof producto3.nombre)

// Mostrando todos los Valores/Datos que estan en las propiedades del Objeto 
console.log('-------------------------')
console.log(producto3.nombre)
console.log(typeof producto3.nombre)
console.log(producto3.precio)
console.log(typeof producto3.precio)
console.log(producto3.disponible)
console.log(typeof producto3.disponible)
console.log(producto3.color)
console.log(typeof producto3.color)

// Usando Salto de linea con <br> en el DOM
document.write(producto3.nombre + '<br>')
document.write(producto3.precio + '<br>')
document.write(producto3.disponible + '<br>')
document.write(producto3.color + '<br>')

// Usando parrafos <p></p> en el DOM
document.write('<p>' + producto3.nombre + '</p>')
document.write('<p>' +producto3.precio + '</p>')
document.write('<p>' +producto3.disponible + '</p>')
document.write('<p>' + producto3.color + '</p>')

// Usando Alert 
alert(producto3.nombre)
alert(producto3.precio)
alert(producto3.disponible)
alert(producto3.color)
