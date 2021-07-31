const axios = require('axios');
// import store from '../config/store'

export let cancel;

export const Methods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH"
};

export const makeRequest = (url, type, params, extra_headers, config) => {
//     const token_auth = get_nested(["auth", "auth_token"],store.getState(), false);

    return new Promise((resolve,reject) => {
        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        };
     //    if(extra_headers){
     //        headers = {...headers, ...extra_headers}
     //    }
        axios.request(url, {
            method: type,
            data: (type === Methods.POST || type === Methods.PUT || type === Methods.PATCH) ? params : {},
            headers: headers,
          //   onUploadProgress: config
        })
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error, res) {
                console.log(error)
            });
    })
}