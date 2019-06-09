import axios from 'axios';

const urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {
    pushAutenticationobject: (object) => {
        if (object === null) {
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },

    getAllDuvidas: (callback) => {
        var url = urlbase + "Duvida/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getDuvida: (id_duvida, callback) => {
        var url = urlbase + "Duvida/" + id_duvida;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    postDuvida: (duvida, callback) => {
        var url = urlbase + "Duvida/";
        axios.post(url, duvida).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    deleteDuvida: (id, token, callback) => {
        var url = urlbase + "Duvida/" + id;
        axios.delete(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },


}