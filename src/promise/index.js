const promise = new Promise(function(resolve, reject){
    resolve("Hello");
});

const pieces = 1;

const countPieces = new Promise(function(resolve, reject){
    if(pieces >= 10){
        resolve(`Perfect!!, you have ${pieces} pieces`);
    }else{  
        reject(`You don't have enough pieces`);
    }
});

countPieces.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(`This is the end`);
});