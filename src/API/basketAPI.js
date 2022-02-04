import * as axios from 'axios';

export const getBasket = (token) => {
    return axios.get('http://localhost:5000/basket/get',
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}

export const addBasket = (token,product) => {
    return axios.post('http://localhost:5000/basket/add',
    JSON.stringify(product),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}

export const deleteBasket = (token,product) => {
    return axios.post('http://localhost:5000/basket/delete',
    JSON.stringify(product),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}