console.log("Hola mundo");

var num = 1;
let texto = "ESto es un texto" //let solo existe en el bloque que se declara
const numX = 2; //const no puede cambiarse
var decimal = 2.123;
var bool = true;

console.log(texto);

var despues; //undefine
console.log(despues);
despues = "texto";
console.log(despues);

var num1 = 1;
var num2 = 9;
var suma = num1 + num2;
console.log(suma);

var nombre = "Elena de Troya";
var mensaje = "Mi nomrbe es: ";
console.log(mensaje+nombre);

var otro_nombre = "Juana de Arco";
var edad = 18;
var msj_concatenado = "Mi nombre es: " + otro_nombre + " ¿Cómo estás? Tengo " + edad + " años."
var msj_interpolado = `Mi nombre es: ${otro_nombre} ¿Cómo estás? Tengo ${edad} años.`
console.log(msj_concatenado);
console.log(msj_interpolado);

var combinamos_texto = "ABC";
console.log(combinamos_texto + num1);
console.log(combinamos_texto + num1 + num2);
console.log(num1 + num2 + combinamos_texto);

var orden = 10 + 20 / 6;
console.log(orden);
console.log(7%2);

var n = 14;
n +=5;
console.log(n);

var nombre_completo = "Pedro";
nombre_completo += " Páramo";
console.log(nombre_completo);

if(n >= 15){
    console.log("Valor mayor a 15");
}
else{
    console.log("Valor menos a 15");
}

var edad_infante = 4;
if(edad_infante < 2){
    console.log("Es un bebé");
} else if(edad_infante < 5){
    console.log("Es un toddler");
} else {
    console.log("Es un niño");
}

var temp = 20;
var esta_lloviendo = false; //NO está lloviendo
if (temp >= 18 && !esta_lloviendo){
    console.log("Es un gran día para salir a pasear");
}
if (esta_lloviendo){
    console.log("Lleva un paraguas");
}
if (!esta_lloviendo){
    console.log("Las nubes están despejadas");
}


var edad_conducir = 17;
var permiso_padre = true;
if (edad_conducir >= 18 || permiso_padre){
    console.log("Puedes obtener la licencia de conducir");
}

let a="B";
for(let i=0; i<4; i++){
    console.log("Hola");
    console.log("Cómo estás?");
    let a = "A";
    console.log(a);
}
console.log(a);

for(let i=3; i>0; i--){
    console.log(i);
}

let x = 0;
while(x<3){
    console.log("Entramos al while");
    x += 2;
}

let inicio = 2;
let final = 10;
while(inicio<final){
    console.log("Entramos al segundo while");
    inicio++;
    final -= 2;
}

var variable1 = 1;
var variable2 = "1";
if(variable1 == variable2){
    console.log("Tienen el mismo valor");
}
if(variable1 === variable2){
    console.log("Tienen el mismo valor y el mismo tipo");
}

//TAREA OP
// Sigma -  Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
var suma = 0;
for (var i=1; i<=100; i++){
    suma += i;
}
console.log(suma);
//Sigma pares e impares - Escribe código que sume los valores pares del 1 al 100 en una variable suma_pares y valores impares en una variable suma_impares. Intenta hacer UN solo bucle. % -> mod. 5%2
var sum_p = 0;
var sum_i = 0;
for (var i=1; i<=100; i++){
    if (i%2 == 0){
        sum_p += i;
    } else {
        sum_i += i;
    }
}
console.log(sum_p);
console.log(sum_i);

//ARREGLOS
var hobbies = ["Leer", "Correr", "Cantar", "Hacer ejercicio", "Programar"];
console.log(hobbies[0]);

hobbies[1] = "Caminar";
console.log(hobbies);

console.log(hobbies.length);

for (let i=0; i < hobbies.length; i++){
    console.log(i+" - "+hobbies[i]);
}

var combinado = [
    1.11, 
    "texto",
    true,
    39,
    ["esta","es","otra","lista"]
];

hobbies.push("Ver series");
console.log(hobbies);

hobbies.unshift("Nadar");
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

//MATRIZ
var matriz = [
    [1,2,3,4,5],
    [7,8,9,10,11],
    [12,13,14,15,16],
    [17,18,19,20,21],
    [22,23,24,25,26]
];
console.log(matriz[0][3]);
matriz[0].push(6);
console.log(matriz);

//OBJETOS
var estuadiante = {
    "id": 123,
    "nombre": "Elena",
    "apellido": "de Troya",
    "edad": 25,
    "hobbies": ["Leer","Bailar","Ver pelis"],
    "direcciones":[
        {
            "calle": "Av. Sol",
            "num": 1234,
            "ciudad": "Monterrey",
            "pais": "México"
        },
        {
            "calle": "Primera Avenida",
            "num": 345,
            "ciudad": "Guadalajara",
            "pais": "México"
        }
    ]
}
console.log(estuadiante.nombre); //punto
console.log(estuadiante["edad"]); //corchetes
estuadiante.apellido = "De Arco";
console.log(estuadiante);

console.log(estuadiante.direcciones[1].calle);
estuadiante.direcciones[1].calle = "Segunda Avenida";

estuadiante.curso = "Fundamentos de la Web"
console.log(estuadiante);
estuadiante.curso = ["Fundamentos de la Web", "Python"];

