function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
const g2 = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g2.next().value);

function* iterate(array){
    for (let value of array) {
        yield value;
    }
}

let arr = ["Luis","Carlos","Mario","Ana","Marcela"]
const itr = iterate(arr);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);