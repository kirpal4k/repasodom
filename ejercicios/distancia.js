//ENTRADAS DEL SISTEMA

let cordenadax1=0;
let cordenadax2=50;
let cordenaday1=0;
let cordenaday2=-70;

let restax=cordenadax2-cordenadax1;
let restay=cordenaday2-cordenaday1;

let potenciax=Math.pow(restax,2);
let potenciay=Math.pow(restay,2);

let sumatoria=potenciax+potenciay;

let distancia=Math.sqrt(sumatoria);

//SALIDA
console.log("La distancia del planeta Yavin-4 a Naboo es: "+distancia+" UA")