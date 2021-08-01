import {makeRequest, Methods} from '../api/Request';

const ip = "217.160.215.195"
const port = 4444
const domain = "http://" + ip.toString() + ":" + port.toString()
const login = "/users"



export const URL_LOGIN = domain + login

export function getUsers(){
     const url = URL_LOGIN
     return makeRequest(url, Methods.GET)
}

export function getUser(pseudo){
     const url = URL_LOGIN + '/' + pseudo
     return makeRequest(url, Methods.GET)
}

export function updateUser(pseudo, data){
     const url =`http://217.160.215.195:${port.toString()}/users/${pseudo}`;
     return makeRequest(url, Methods.PATCH, data)
}

export function createUser(data){
     const url = URL_LOGIN
     return makeRequest(url, Methods.POST, data)
}

export function updateUserCards(pseudo, data){
     const url =`http://217.160.215.195:${port.toString()}/users/${pseudo}/cards`;
     return makeRequest(url, Methods.PATCH, data)
}