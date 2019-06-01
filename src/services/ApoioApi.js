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

    getAll: (callback) => {
        var url = urlbase + "Apoio/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getOne: (id, callback) => {
        var url = urlbase + "Apoio/" + id;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    post: (patrocinador, callback) => {
        var url = urlbase + "Apoio/";
        axios.post(url, patrocinador).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    delete: (id, token, callback) => {
        var url = urlbase + "Apoio/" + id;
        axios.delete(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    analisar: (id, token, callback) => {
        var url = urlbase + "Apoio/" + id + "/analisar";
        axios.post(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

}