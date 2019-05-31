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

    getAllPatrocinadores: (callback) => {
        var url = urlbase + "Patrocinador/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getPatrocinador: (id_patrocinador, callback) => {
        var url = urlbase + "Patrocinador/" + id_patrocinador;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    postPatrocinador: (patrocinador, callback) => {
        var url = urlbase + "Patrocinador/";
        axios.post(url, patrocinador).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    deletePatrocinador: (id, token, callback) => {
        var url = urlbase + "Patrocinador/" + id;
        axios.delete(url, token).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

}