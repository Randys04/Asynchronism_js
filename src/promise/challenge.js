import fetch, { Response } from "node-fetch";
const API_URL = 'https://api.escuelajs.co/api/v1';

function fetchData (ApiURL){
    return fetch(ApiURL);
}

// fetchData(`${API_URL}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(()=>console.log(`Holaaaa`))
//     .catch(error => console.log(error));

fetchData(`${API_URL}/products`)
    .then(response => response.json())
    .then(products =>{
        return fetchData(`${API_URL}/products/${products[0].id}`)
        .then(response => response.json())
        .then(product => {
            return fetchData(`${API_URL}/categories/${product.category.id}`)
            .then(response => response.json())
            .then(category => {
                console.log(category.name);
                console.log(product.title);
                console.log(products);
            })
        })
    })
    .catch(error => console.log(error))
    .finally(() => console.log(`The end!!!`))