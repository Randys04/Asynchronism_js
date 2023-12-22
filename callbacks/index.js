function sum(num1, num2){
    return num1 + num2;
}

// No es necesario que se llame callback
function calc(num1, num2, callback){
    return callback(num1, num2);
}

// No se deben usar los parentesis () a la hora de pasar la funcion. Ejemplo sum 
console.log(calc(4, 5, sum));

setTimeout(function(){
    console.log("Hello everyone!!");
},2000);

function gretting(name){
    console.log(`Hello ${name}!!`);
}

setTimeout(gretting, 3500, "Pepe");
