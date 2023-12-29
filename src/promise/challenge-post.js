import fetch, { Response } from "node-fetch";
const API_URL = 'https://api.escuelajs.co/api/v1';

function postData (ApiURL, data){
    const response = fetch(ApiURL, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data1 = {
    "title": "Shoes",
    "price": 160,
    "description": "Sport shoes",
    "categoryId": 1,
    "images": ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"]
};

postData(`${API_URL}/products`, data1)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })