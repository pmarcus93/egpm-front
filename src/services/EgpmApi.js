import axios from 'axios';

global.urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {

    pushAutenticationobject: (object) => {
        if (object === null) {
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },

    getAllSecao: (callback) => {
        var url = urlbase + "Secao/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getSecao: (id, callback) => {
        var url = urlbase + "Secao/" + id;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getIconeSecao: (id_secao, callback) => {
        var url = urlbase + "Icone/" + id_secao + "/secao";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    salvarsessao: (data, callback) => {
        var url = urlbase + "Secao/";
        axios.post(url, data).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    salvarIconeSobre: (data, callback) => {
        var url = urlbase + "Icone/";
        axios.post(url, data).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },


}