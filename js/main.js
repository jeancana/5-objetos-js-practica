/* alert("Probando") */

// ************* Estudiando  OBJETOS  *************************

// Que es un Objeto??? ---> ES UNA COLECCION DE DATOS RELACIONADOS CON UNA ENTIDAD/ ES UNA ENTIDAD QUE CONTIENE DATOS 
// Tambien es una: ENTIDAD QUE PUEDE CONTENER DATOS Y OPERACIONES COMUNES (FUNCIONES/METODOS)

// JAVASCRIPT es un Lenguaje de Programacion Orientado a Prototipos 
// Especificamente: Existen un Objeto Base Raiz (Prototipo Base Raiz) - de ese Prototipo NACE todo lo que tiene que ver con JAVASCRITP

// JavaScritp Se Creo con los 6 Tipos de Datos Primitivos y EL RESTO TODO ES OBJETOS 
 /*
 Los 6 tipos de Datos Primitivos en JS son:
    1. String
    2. Number
    3. Boolean (true/false)
    4. Undefined
    5. Null
    6. Symbol
    
    Nota: 
    7. bigInt (es nuevo tipo de Dato primitivo incorparado recientemente)

    DESPUES EXISTEN LOS TIPOS DE DATOS PUNTEROS ----> son todos aquellos que se usan mediante objetos y sus metodos y propiedadas se invocan/usan mediante notacion de punto

 */

//NOTA: Los Objetos NO tiene que ver con la Programacion Orientada Objetos (Los Objetos solo son Moldes Genericos Vacios - que Crean Objetos)

// ********PROPIEDADES Y METODOS DE UN OBJETO **************
/*  
----- IMPORTANTE -------
- Cuando dentro de un Objeto se contienen funciones(Bloques de Codigo/Instruciones) se le llama METODO del Objeto
- Cuando dentro de un Objeto se contienen VALORES (DATOS) se le llama PROPIEDAD/CARACTERISTICAS/ATRIBUTO  

*/

//******* ENTENDIENDO LA PALABRA ENTE/ENTIDAD (IDENTIDAD)

// Significado FILOSOFICO de ENTE O ENTIDAD: ALGO QUE EXISTE/ ALGO QUE ES, se le puede llamar ENTE o ENTIDAD a cualquier OBJETO cuya existencia es comprobable. 
// Significado en la vida Real de ENTIDAD: Asociacion de personas de cualquier tipo, toda colectivad que pueda ser considerada como Unidad

// Nota: Recordar bien de SQL que son la Entidades - Son las Partes que integran el Modelo de Negocio (Entidad son: Vendedor/Cajero/Cliente/Producto/Venta - las Entidades se pueden Definir a traves de un D.E.R "Diagrama de Entidad Relacion")


// ********* MANERAS DE:  OBTENER/RESCATAR/VER/USAR las PROPIEDADES/CARACTERISTICAS/VALORES/FUNCIONES/METODOS 

// Manera nro.1 - Notacion de Punto/Sintaxis de Punto = objeto.nombre

// Manera nro. 2 - Notacion de corchete/Sintaxis de corchete = objeto[nombre]

/* 

Se llama "instanciar" :
A la acción de crear un objeto a partir de una clase/Pantilla (funcion Constructora) , por tanto cuando se usa la palabra reservada “new” , se procede a instanciar un objeto de la clase especificada/especifica.

****** ¿Cómo se instancia un objeto? ******

Instanciar objetos es el proceso de generar un ejemplar de una clase/Plantilla, es decir, la clase es como una declaración de una forma o una plantilla Genererica y el objeto es un caso o elemento concreto que responde a esa forma.

Ejemplos: 

1. Creo o Instancio Objetos de la clase/Plantilla/Objeto(funcion)Constructor ReinoAnimal:
-  Objeto Perros/Felinos
- Objeto Gatos/Caninos
- ObjetoLoros/Aves

todos tienen comun que son del ReinoAnimal



*/