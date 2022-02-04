import * as axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5000/products/'
});

export const getAllProductsFromServer = () => {
    return instance.get('all')
    .then((res)=>{return res.data})
    .catch((e)=>{console.log(e)});
}
export const getCurrentProductsFromServer = (title) => {
    return instance.post('currentType',
    JSON.stringify({constantName:title}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{return res.data;})
    .catch((e)=>{console.log(e)});
}
export const getCategoriesFromServer = () => {
    return axios.get('http://localhost:5000/products/categories',)
    .then((res)=>{return res.data})
    .catch((e)=>{console.log(e)});
}
export const getPriceFilteredProducts = (min,max) => {
    return instance.post('priceFilter',
    JSON.stringify({min,max}),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        },
        responseType: "json"
    }).then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((e)=>{console.log(e)});
}