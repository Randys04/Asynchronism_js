import fetch, { Response } from "node-fetch";
const API_URL = 'https://api.escuelajs.co/api/v1';

async function fetchData(ApiURL){
    const response = await fetch(ApiURL);
    const data = await response.json();
    return data;
}

async function* getData(ApiURL){
    const products = await fetchData(`${ApiURL}/products`);
    yield console.log(products);

    const product = await fetchData(`${ApiURL}/products/${products[1].id}`);
    yield console.log(product.title);

    const category = await fetchData(`${ApiURL}/categories/${product.category.id}`);
    yield console.log(category.name);
}

const gd = getData(API_URL);

console.log(gd.next());
console.log(gd.next());
console.log(gd.next());