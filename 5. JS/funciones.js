function saludo(){
    console.log("Hola");
}
saludo();

function saludo_nombre(nombre){
    console.log(`hola ${nombre}!`);
}
saludo_nombre("Anita");

function saludo_especial(nom, ap){
    console.log(`Hola ${nom} ${ap}!!`);
}
saludo_especial("Juanito", "Perez");

function suma(num1, num2){
    return num1+num2;
}

var resultado = suma(10, 20);
console.log(resultado);