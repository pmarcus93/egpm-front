import axios from 'axios';

const urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';
var header = "";

function setTokenHeader() {
    header = {Authorization: `Bearer ${localStorage.getItem("st_token")}`};
}

export default {


    pushAutenticationobject(object) {
        if (object === null) {
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },

    getUrl() {
        return urlbase;
    },

    get(rota, callback) {
        setTokenHeader();
        axios.get(urlbase + rota, {headers: header}).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    post(rota, data, callback) {
        setTokenHeader();
        axios.post(urlbase + rota, data, {headers: header}).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    delete(rota, callback) {
        setTokenHeader();
        axios.delete(urlbase + rota, {headers: header}).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

}