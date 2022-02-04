import * as axios from 'axios';

export const registration = (user) => {
    return axios.post('http://localhost:5000/auth/registration',
    JSON.stringify(user),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}
export const signIn = (user) => {
    return axios.post('http://localhost:5000/auth/login',
    JSON.stringify(user),
    {
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        },
        responseType: "json"
    }).then((res)=>{return res.data});
}