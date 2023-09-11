console.log("Hola Generation")

//alert("hola")

/*
-Flujo de control- 

Cuando hablamos de flujo de control hablamos del ordennatural que se ejecutan las instrucciones de nuestro programa (arriba/abajo  izq/der). Estas instrucciones pueden ser una duncion, un console.log, un ciclo, etc

La importancia que tiene el control de flujo radica en la posibilidad depoder ejecutar costos o instrucciones de una condicional (un elemento o instruccion detonante)


-Condiciones-

Las condicionales son palabras reservadas que nos permite evaluar si una condicion se cumple o no , bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false. 

Tengo la camisa limpia?
    si: voy a la fiesta
    no: me quedo en casa

Tengo esta variable?
    si: ejecuto la line 57 de mi codigo
    no: ejecuto la linea 80 de mi codigo


-Condicional if (si...)-

IF nos sirve para validar si una condicion se cumple o no, Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no lo cumple, entonces no hacemos nada.
Nota: Es la condicion mas sencilla, pero la mas limitante porque solo nos da una opcion. 

if (condicion){
    //bloque de coido que se ejecuta si la condicion es verdad (se cumple)
}

*/

//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para ir 

if (camisaLimpia = true){ //Siempre tiene que ser true para que se ejecutr el codigo
    console.log("Felipe va a la fiesta :D  con if");
} 

/*
-else (de otro modo, de lo contrario, si no)-

if (condicion/detontante){
    //bloque de codigo que se jecuta si la condicion es verdadera
} else{
    //bloqu de codigo que se ejecuta si la condicion es falsa 
}
*/

if (camisaLimpia = false){
    console.log ("Felipe va a la fiesta con if else"); //true
} else{
    console.log("Felipe se queda en su casa con if eslse"); //false
}

/*
else if

Esta condicion nos ayuda a ugar con mas opciones y mas detonantes, para tener muchaa posibilidades en el mismo codigo. Para lograr esto, vamos a unir el else con el if

if (conicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if (condicion detonante 2){
    //bloque de codigo 1 es falsa y la condicion 2 es verdadera
} else {
    //bloque de codigo si las dos condiciones son falsas
}

*/

//Ejemplo 2: Felipe tiene hambre y quiere comer chilaquiles verdes



if (felipeYaComio=false){
    console.log("Felipe va a comer");
}else if (chilaquilesVerdes = false){
    console.log("Felipe come chilaquiles");
} else{
    console.log("Felipe no come y se pone triste");
}

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El 1er mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a un descanso". El 2do mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El 3ro se muestra si no se cumple nada de lo anterior y debera imprimir "Lo siento mi ciela, seguimos programando"

//Prompt es una forma de ingresar datos y poder hacer uso de ellos

//alert("Hola Generation");

let hora = prompt("Hola, dime una hora");

//let hora=14;   antes del prompt 

if (hora==13){
    console.log("Vamos a un descanso");
}else if (hora==14){
    console.log("vamos a comer");
} else{
    console.log("Lo siento mi ciela, seguimos programando");
}

/*
switch (cambiar o intercambiar /segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada (estado de la variable)

Evalua una expresion comparando el valor de una variable con la expreion o caso, y ejecuta las declaraciones asociadas con ese caso, asi omo las cosas que siguen.


Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general. 


expresion con un valor
switch (espresion){
    case "1":
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1 break;
     case "2":
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2 break;
    case "3":
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3 break;
    default:
        //bloque de codigo que se ejecuta si ninguna opcion conincide;
}
*/

//Elevador con if else

let piso = 5

if (piso ==1){
    console.log("Llegamos al piso 1");
}else if (piso==2){
    console.log("Llegamos al piso 2");
}else if (piso==3){
    console.log("Llegamos al piso 3");
}else if (piso==4){
    console.log("Llegamos al piso 4");
}else if (piso==5){
    console.log("Llegamos al piso 5");//piso de destino
}else{
    console.log("piso no encontrado");
}

//Elevador con switch

let pisoSwitch = prompt ("A que piso vas?");

console.log(typeof(pisoSwitch))

switch (pisoSwitch){
    case "1":
        console.log("Llegaste al piso 1");
        break;
    case "2":
        console.log("Llegaste al piso 2");
        break;
    case "3":
        console.log("Llegaste al piso 3");
        break;
    default:
        console.log("Opcion no valida");
}



//Funciones que podriamos encontrar en un consultorio dental 

/*
//Funciones que podriamos encontrar en un consultorio dental 

-cliente activo/registrado
-promociones
-elegir especialidad/Dr 
--verificar cita 
registrar pacientes 
*/

//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

//variables para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFecuente;

function calcularCostoConsulta (tipoServicio, tiempoConsulta, emergencia, promocion, clienteFecuente){

    //Datos que necesito para mi funcion
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;
    //Condicional para saber si agregar otra promocion por ser cliente frecuente 
    if (clienteFecuente == true){
        
        //invocacionFuncion();
        costoTotal * promocionClienteFrecuente;
    }
}

//Un ejemplo mas sencillo 
function calcularCostoConsultaDos (duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;

    if(clienteFrecuente){
        costoTotalConDescuento = costoTotal*.9;
    } else{
        console.log(costoTotal);
    }
    return costoTotalConDescuento;

}

console.log(calcularCostoConsultaDos (45, 15, true));