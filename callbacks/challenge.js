const XMLHttprequest = require('xmlhttprequest');
const API_URL = 'https://api.escuelajs.co/api/v1';

function fetchData(ApiURL, callback){
    let xhttp = new XMLHttprequest();

    xhttp.open('GET', ApiURL, true);
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{
            const error = new Error("Response error");
            return callback (error, null);
        }
    }
    xhttp.send();
}