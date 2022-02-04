import * as axios from 'axios';

export const getUsers = (token) => {
    return axios.get('http://localhost:5000/auth/users',
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token,
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const deleteUser = (email) => {
    return axios.post('http://localhost:5000/auth/deleteUser',
    JSON.stringify({email}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const addCategory = (categoryName) => {
    return axios.post('http://localhost:5000/products/addCategory',
    JSON.stringify({name: categoryName}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        },
        responseType: "json"
    }).then((res)=>{
        return res.data;
    });
}
export const deleteCategory = (categoryName) => {
    return axios.post('http://localhost:5000/products/deleteCategory',
    JSON.stringify({name: categoryName}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const updateProduct = (productId,updatedProduct) => {
    return axios.post('http://localhost:5000/products/updateProduct',
    JSON.stringify({id: productId, updatedProduct}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const addProduct = (product) => {
    return axios.post('http://localhost:5000/products/addProduct',
    JSON.stringify({product}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const deleteProduct = (id) => {
    return axios.post('http://localhost:5000/products/deleteProduct',
    JSON.stringify({id}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
