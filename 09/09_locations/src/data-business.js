import axios from "axios";

const getData = function(){
    return axios.get("https://rickandmortyapi.com/api/location")
    .then(response => response.data)
    .then (data => data.results)
    .catch(error => console.log("Ha habido un error: "+error));
}

/*
//La misma función pero simulando que tarda 2 segundos en recibir los datos

const getData = function(){
    return axios.get("https://rickandmortyapi.com/api/location")
    .then(response => response.data)
    .then (data => {
        const myPromise = new Promise(resolve => {
            setTimeout(function() {
                resolve(data.results);
            }, 2000);
        });
        return myPromise;
    })
    .catch(error => console.log("Ha habido un error: "+error));
}    
*/
const getDetail = function(id){
    return axios.get("https://rickandmortyapi.com/api/location/"+id)
    .then(response => response.data)
    .catch(error => console.log("Ha habido un error: "+error));
}




export {getData, getDetail};