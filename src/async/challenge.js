import fetch, { Response } from "node-fetch";
const API_URL = 'https://api.escuelajs.co/api/v1';

async function fetchData(ApiURL){
    const response = await fetch(ApiURL);
    const data = await response.json();
    return data;
}

const anotherFunction = async (ApiURL) => {
    try {
        const products = await fetchData(`${ApiURL}/products`);
        const product = await fetchData(`${ApiURL}/products/${products[0].id}`);
        const category = await fetchData(`${ApiURL}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API_URL);