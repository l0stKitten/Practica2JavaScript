//Ejercicio 1
console.log("----Ejercicio 1----")
let tasks = [
  { name : "Buy milk from the shop",
    duration : 20 ,
    priority : 1 ,},
  { name : "Clean the house",
    duration : 120 ,
    priority : 3 ,},
  { name : "Study JS functions" ,
    duration : 180 ,
    priority: 1 ,},
];
//Version iterativa

function mostrarNombres(arr){
  let nombres = [];
  for(let i = 0; i < arr.length; i++){
    nombres.push(arr[i]['name']);
  }
  return nombres;
}

var rp = mostrarNombres(tasks);
console.log("\n Versión Iterativa: \n")
for (let i = 0; i < rp.length; i++){
  console.log(rp[i]);
}


//Version funcional

console.log("\n Versión funcional:\n");
const reducer =  (acum, actual) => acum+actual['name']+"\n";
console.log(tasks.reduce(reducer, "" ));

// Ejercicio 2
console.log("----Ejercicio 2----")

//Version iterativa
function mostrarPrioridad1(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i]["priority"] == 1){
      result.push(arr[i]);
    }
  }
  return result;
}
console.log("\n Versión iterativa: \n ")
console.log(mostrarPrioridad1(tasks));

//Version funcional
console.log("\n Versión funcional: \n ")
console.log(tasks.filter(x => x["priority"] == 1));



//Ejercicio 3
console.log("\n----Ejercicio 3----\n ")

//Version iterativa
function sumarDuracionPrioridad1(dic){
  let acum = 0;
  for (let i = 0; i < dic.length; ++i){
    if (dic[i]["priority"] == 1){
      acum = acum += dic[i]["duration"];
    }
  }
  return acum;
}

console.log("Versión iterativa:")
console.log(sumarDuracionPrioridad1(tasks));

//Version Funcional
let r = tasks.filter(x => x["priority"]==1);

console.log("\n Versión funcional:\n")
console.log( r.reduce((acum, actual) => acum+actual['duration'],0));


//Ejercicio 4
console.log("\n ----Ejercicio 4----\n")
const vehicles = [
{ make : 'Honda ', model : 'CR -V', type : 'suv ', price : 24045 },
{ make : 'Honda ', model : 'Accord ', type : 'sedan ', price : 22455 },
{ make : 'Mazda ', model : 'Mazda 6', type : 'sedan ', price : 24195 } ,
{ make : 'Mazda ', model : 'CX -9 ', type : 'suv ', price : 31520 },
{ make : 'Toyota ', model : '4 Runner ', type : 'suv ', price : 34210 },
{ make : 'Toyota ', model : 'Sequoia ', type : 'suv ', price : 45560 },
{ make : 'Toyota ', model : 'Tacoma ', type : 'truck ', price : 24320 },
{ make : 'Ford ', model : 'F -150 ', type : 'truck ', price : 27110 },
{ make : 'Ford ', model : 'Fusion ', type : 'sedan ', price : 22120 },
{ make : 'Ford ', model : 'Explorer ', type : 'suv ', price : 31660 }
];
//Version iterativa
function ej4(arr){
  let acum = "";
  for(let i = 0; i < arr.length; ++i){
    acum = acum + arr[i].price.toString()+"\n"
  }
  return acum;
}

console.log("\n Versión iterativa: \n");
console.log(ej4(vehicles));

//Version funcional
console.log("\n  Versión funcional:\n");
console.log(vehicles.reduce( (acum, actual) => acum+actual.price.toString()+"\n", "" ))

// Ejercicio 5
console.log("\n ----Ejercicio 5----\n")
var personnel = [
  {   id: 5 ,
      name : "Luke Skywalker ",
      pilotingScore : 98 ,
      shootingScore : 56 ,
      isForceUser : true ,},
  {   id: 82 ,
      name : "Sabine Wren ",
      pilotingScore : 73 ,
      shootingScore : 99 ,
      isForceUser : false ,},
  {   id: 22 ,
      name : "Zeb Orellios ",
      pilotingScore : 20 ,
      shootingScore : 59 ,
      isForceUser : false ,},
  {   id: 15 ,
      name : "Ezra Bridger ",
      pilotingScore : 43 ,
      shootingScore : 67 ,
      isForceUser : true ,},
  {   id: 11 ,
      name : "Caleb Dume ",
      pilotingScore : 71 ,
      shootingScore : 85 ,
      isForceUser : true ,
  }
];

//Versión Iterativa
console.log("\n Versión Iterativa: \n")
function scoreForce(arr){
  var contador = 0;
  var scoreTotal = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].isForceUser == true){
      scoreTotal += (arr[i].pilotingScore + arr[i].shootingScore);
      console.log(arr[i].name + "total Score: " + (arr[i].pilotingScore + arr[i].shootingScore));
      contador++;
    }
  }
  return "Usaron la fuerza: " + contador + " Total: " + scoreTotal;
}
console.log(scoreForce(personnel))

//Versión Funcional
console.log("\n Versión Funcional: \n")
function ret(x){
  return x.name + "total Score: " + (x.pilotingScore + x.shootingScore);
}
        
const uF = personnel.filter(x => x.isForceUser==true)
console.log(uF.map(ret));

const reducer2 = (scoreT, cur) => scoreT + cur.shootingScore + cur.pilotingScore;
const score = uF.reduce(reducer2, 0)
console.log("Usaron la fuerza: " + uF.length + " Total: " + score);